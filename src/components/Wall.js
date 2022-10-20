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

  const titleW = document.createElement('h2');
  titleW.textContent = 'MangaReads';
  titleW.classList.add('titleW');

  const title2W = document.createElement('h3');
  title2W.textContent = 'まんが';
  title2W.classList.add('title2W');

  const textIntroW = document.createElement('h4');
  textIntroW.textContent = 'What is up!';
  textIntroW.classList.add('textIntroW');

  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Sign Out';
  buttonSignOut.classList.add('buttonS');
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
      const titleT = document.createElement('textarea');
      titleT.setAttribute('readonly', true);
      titleT.textContent = post.title;
      const postContent = document.createElement('textarea');
      postContent.setAttribute('readonly', true);
      postContent.textContent = post.message;
      titleT.classList.add('titleT');
      postContent.classList.add('PostView');
      containerPost.classList.add('container');

      if (auth.currentUser.uid === post.uid) {
        const edit = document.createElement('img');
        edit.src = './img/outline_edit_white_24dp.png';
        edit.classList.add = 'buttonEd';

        const deletePosts = document.createElement('img');
        deletePosts.src = './img/outline_delete_white_24dp.png';
        deletePosts.classList.add = 'buttonD';

        papaPost.append(titleT, postContent, edit, deletePosts);

        edit.addEventListener('click', () => {
          const saveEditButton = document.createElement('button');
          saveEditButton.classList.add = 'buttonSave';
          saveEditButton.textContent = 'Save';

          const cancelEditButton = document.createElement('button');
          cancelEditButton.classList.add = 'buttonCancel';
          cancelEditButton.textContent = 'Cancel';

          postContent.classList.add('redit');
          titleT.classList.add('redit');

          postContent.removeAttribute('readonly');
          titleT.removeAttribute('readonly');
          edit.style.display = 'none';
          deletePosts.style.display = 'none';
          papaPost.append(saveEditButton, cancelEditButton);

          saveEditButton.addEventListener('click', () => {
            papaPost.append(edit, deletePosts);
            editPost(doc.id, postContent.value, titleT.value);
          });

          cancelEditButton.addEventListener('click', async () => {
            titleT.setAttribute('readonly', true);
            titleT.value = post.title;
            postContent.setAttribute('readonly', true);
            postContent.value = post.messag
            edit.style.display = 'inline';
            deletePosts.style.display = 'inline';
            titleT.classList.remove('redit');
            postContent.classList.remove('redit');
            papaPost.removeChild(saveEditButton);
            papaPost.removeChild(cancelEditButton);

            papaPost.append(titleT, postContent, edit, deletePosts);
            /* Aqui va la función de cancelar */
          });
        });
        deletePosts.addEventListener('click', async () => {
          await deletePost(doc.id);
        });
      } else {
        papaPost.append(titleT, postContent);
      }

      containerPost.append(papaPost);
    });
  });

  div.append(titleW, title2W, textIntroW, buttonSignOut, containerPost, createPost());

  return div;
};
