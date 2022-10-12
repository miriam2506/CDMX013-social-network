// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount, auth } from '../firebase/auth.js';
import { createPost } from './createPost.js';
import { getPosts } from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div'); // Contenedor principal
  div.classList.add('container-wall');

  const titleW = document.createElement('h2');
  titleW.textContent = 'MangaReads';
  titleW.classList.add('titleW');

  const title2W = document.createElement('h3');
  title2W.textContent = 'まんが';
  title2W.classList.add('title2W');

  const textIntroW = document.createElement('h4');
  textIntroW.textContent = 'Write your post';
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
      const postContent = document.createElement('p');
      postContent.textContent = post.message;
      postContent.classList.add ('WallView');
      containerPost.classList.add ('container');
      console.log(post);
      containerPost.append(postContent);
    });
  });

  div.append(titleW, title2W, textIntroW, buttonSignOut, containerPost, createPost());

  return div;
};
