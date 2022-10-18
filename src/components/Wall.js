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
      const div1 = document.createElement('div');
      const titleT = document.createElement('textarea');
      titleT.setAttribute('readonly', true);
      titleT.textContent = post.title;
      titleT.classList.add('titleT');
      const postContent = document.createElement('textarea');
      postContent.setAttribute('readonly', true);
      postContent.textContent = post.message;
      postContent.classList.add('PostView');
      containerPost.classList.add('container');

      // aquí se une o más abajo?
      containerPost.append(titleT, postContent);

      console.log(post);

      if (auth.currentUser.uid === post.uid) {
        const edit = document.createElement('img');
        edit.src = './img/outline_edit_white_24dp.png';
        edit.classList.add = 'buttonEd';

        const deletePosts = document.createElement('img');
        deletePosts.src = './img/outline_delete_white_24dp.png';
        deletePosts.classList.add = 'buttonD';
        containerPost.append(edit, deletePosts);
        edit.addEventListener('click', () => {
          const saveEditButton = document.createElement('button');
          saveEditButton.classList.add = 'buttonSave';
          saveEditButton.textContent = 'Save';

          const cancelEditButton = document.createElement('button');
          cancelEditButton.classList.add = 'buttonCancel';
          cancelEditButton.textContent = 'Cancel';

          containerPost.append(saveEditButton, cancelEditButton);

          postContent.classList.add('redit');
          titleT.classList.add('redit');

          console.log('USER:', auth.currentUser.uid);
          console.log(doc.id, post);

          postContent.removeAttribute('readonly');
          titleT.removeAttribute('readonly');
          edit.style.display = 'none';
          deletePosts.style.display = 'none';

          saveEditButton.addEventListener('click', () => {
            containerPost.append(edit);
            containerPost.append(deletePosts);
            editPost(doc.id, postContent.value, titleT.value);
          });

          cancelEditButton.addEventListener('click', async () => {
            containerPost.append(edit);
            containerPost.append(deletePosts);
            editPost(doc.id, postContent.value, titleT.value);
          });
          // document.getElementsByClassName('WallView').setAttribute('readOnly', false);
        });
        deletePosts.addEventListener('click', async () => {
          await deletePost(doc.id);
        }); //
      }

      /* edit.addEventListener('click', () => {
        deletePosts.style.display = 'none';
      }); */
    });
  });

  div.append(titleW, title2W, textIntroW, buttonSignOut, containerPost, createPost());

  return div;
};
