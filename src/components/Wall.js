/* eslint-disable max-len */
// import { saveUser } from '../firebase/auth.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount, auth, user } from '../firebase/auth.js';
import { createPost } from './createPost.js';
import { getPosts, deletePost, editPost } from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div'); // Contenedor principal
  div.classList.add('containerWall');

  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'MangaReads';
  mainTitle.classList.add('mainTitle');

  const japaneseTitle = document.createElement('h3');
  japaneseTitle.textContent = 'まんが';
  japaneseTitle.classList.add('japaneseTitle');

  const textIntroWall = document.createElement('h4');
  textIntroWall.textContent = 'What is up!';
  textIntroWall.classList.add('textIntroWall');

  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Sign Out';
  buttonSignOut.classList.add('buttonSignOut');
  const containerPost = document.createElement('div');
  buttonSignOut.addEventListener('click', () => {
    //  onNavigate('/'); // Sign-out successful.
    signOutAccount(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
    });
  });

  getPosts((posts) => {
    containerPost.innerHTML = '';
    posts.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      const post = doc.data();
      // creo que aquí va lo de div, pero entonces me confundí con el conteinerPost, no sería lo mismo?

      const papaPost = document.createElement('article');
      papaPost.classList.add = 'article';
      const titlePost = document.createElement('textarea');
      titlePost.setAttribute('readonly', true);
      titlePost.textContent = post.title;
      const postContent = document.createElement('textarea');
      postContent.setAttribute('readonly', true);
      postContent.textContent = post.message;
      titlePost.classList.add('titlePost');
      postContent.classList.add('PostView');
      containerPost.classList.add('container');

      if (auth.currentUser.uid === post.uid) {
        const edit = document.createElement('img');
        edit.src = './img/outline_edit_white_24dp.png';
        edit.classList.add = 'buttonEdit';

        const deletePosts = document.createElement('img');
        deletePosts.src = './img/outline_delete_white_24dp.png';
        deletePosts.classList.add = 'buttonDelete';

        papaPost.append(titlePost, postContent, edit, deletePosts);

        edit.addEventListener('click', () => {
          const saveEditButton = document.createElement('button');
          saveEditButton.classList.add = 'buttonSave';
          saveEditButton.textContent = 'Save';

          const cancelEditButton = document.createElement('button');
          cancelEditButton.classList.add = 'buttonCancel';
          cancelEditButton.textContent = 'Cancel';

          postContent.classList.add('reditPostAndTitle');
          titlePost.classList.add('reditPostAndTitle');

          postContent.removeAttribute('readonly');
          titlePost.removeAttribute('readonly');
          edit.style.display = 'none';
          deletePosts.style.display = 'none';
          papaPost.append(saveEditButton, cancelEditButton);

          saveEditButton.addEventListener('click', () => {
            papaPost.append(edit, deletePosts);
            editPost(doc.id, postContent.value, titlePost.value);
          });

          cancelEditButton.addEventListener('click', async () => {
            titlePost.setAttribute('readonly', true);
            titlePost.value = post.title;
            postContent.setAttribute('readonly', true);
            postContent.value = post.message;
            edit.style.display = 'inline';
            deletePosts.style.display = 'inline';
            titlePost.classList.remove('reditPostAndTitle');
            postContent.classList.remove('reditPostAndTitle');
            papaPost.removeChild(saveEditButton);
            papaPost.removeChild(cancelEditButton);

            papaPost.append(titlePost, postContent, edit, deletePosts);
            /* Aqui va la función de cancelar */
          });
        });
        deletePosts.addEventListener('click', async () => {
          await deletePost(doc.id);
        });
      } else {
        papaPost.append(titlePost, postContent);
      }

      containerPost.append(papaPost);
    });
  });

  div.append(mainTitle, japaneseTitle, textIntroWall, buttonSignOut, containerPost, createPost());

  return div;
};
