// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount, auth } from '../firebase/auth.js';
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
  textIntroW.textContent = 'What´s up!';
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
      const div = document.createElement('div');
      const titleT = document.createElement('h4');
      titleT.textContent = post.title;
      const postContent = document.createElement('p');
      postContent.textContent = post.message;
      postContent.classList.add('WallView');
      containerPost.classList.add('container');

      // aquí se une o más abajo?
      div.append(titleT, postContent);

      console.log(post);

      const deletePosts = document.createElement('button');
      deletePosts.textContent = 'delete';
      deletePosts.classList.add = 'buttonD';
      deletePosts.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      const edit = document.createElement('button');

      edit.textContent = 'edit';
      edit.classList.add = 'buttonEd';
      edit.addEventListener('click', async () => {
        await editPost(doc.id, post);
      });

      containerPost.append(titleT, postContent, deletePosts, edit);
    });
  });

  div.append(titleW, title2W, textIntroW, buttonSignOut, containerPost, createPost());

  return div;
};
