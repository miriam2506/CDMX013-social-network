// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount, auth } from '../firebase/auth.js';
import { createPost } from './createPost.js';

export const Wall = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = 'MangaReads';
  title.classList = ('MangaReads');
  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Sign Out';
  buttonSignOut.classList.add('Back');
  div.classList.add('container-wall');

  buttonSignOut.addEventListener('click', () => {
    //  onNavigate('/'); // Sign-out successful.
    signOutAccount(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
    });
  });

  div.append(title, buttonSignOut, createPost());

  return div;
};
