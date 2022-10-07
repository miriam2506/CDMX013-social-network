import { savePost } from '../firebase/post.js';

export const createPost = () => {
  const div = document.createElement('div');
  const input = document.createElement('input');

  savePost();

  div.append(input);

  return div;
};
