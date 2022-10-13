import { savePost } from '../firebase/post.js';

export const createPost = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const inputT = document.createElement('input');
  const send = document.createElement('button');
  send.textContent = 'send';
  send.classList.add('send');
  input.classList.add('write');
  input.placeholder = 'Write your post';
  inputT.classList.add('writeT');
  inputT.placeholder = 'Title';


  send.addEventListener('click', () => {
    savePost(inputT.value, input.value);
    console.log(input.value);
  });

  div.append(input, send, inputT);

  return div;
};
