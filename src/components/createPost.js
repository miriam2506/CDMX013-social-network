import { savePost } from '../firebase/post.js';

export const createPost = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const send = document.createElement('button');
  send.textContent = 'send';
  send.classList.add('send');

  send.addEventListener('click', () => {
    savePost(input.value);
    console.log(input.value);
  });

  div.append(input, send);

  return div;
};
