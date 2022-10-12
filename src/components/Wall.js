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
    containerPost.innerHTML = '';
    posts.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      const post = doc.data();
      const postContent = document.createElement('p');
      postContent.textContent = post.message;
      postContent.classList.add = 'WallView';
      console.log(post);
      containerPost.append(postContent);
    });
  });

  div.append(title, buttonSignOut, containerPost, createPost());

  return div;
};
