// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount, auth } from '../firebase/auth.js';
import { createPost } from './createPost.js';
import { getPosts } from '../firebase/post.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'MangaReads';
  title.classList = ('MangaReads');
  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Sign Out';
  buttonSignOut.classList.add('Back');
  const containerPost = document.createElement('div');
  console.log(containerPost);

  div.classList.add('container-wall');

  buttonSignOut.addEventListener('click', () => {
    //  onNavigate('/'); // Sign-out successful.
    signOutAccount(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
    });
  });

  getPosts((posts) => {
    posts.forEach((post) => { containerPost.textContent = post.data().message; });
    // console.log(posts.data());
  });

  div.append(title, buttonSignOut, containerPost, createPost());

  return div;
};
