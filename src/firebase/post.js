import {
  collection, addDoc, getFirestore, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = async (textPost) => {
  const docRef = await addDoc(collection(db, 'post'), {
    message: textPost,
  });
  console.log('Document written with ID: ', docRef.id);
};

export const getPosts = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};
