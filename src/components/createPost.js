import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { savePost } from '../firebase/post.js';
const auth = getAuth();

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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      send.addEventListener('click', () => {
        savePost(inputT.value, input.value, user.uid);
        console.log(input.value);
      });
    }
  });

  div.append(input, send, inputT);

  return div;
};
