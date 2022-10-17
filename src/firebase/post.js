import {
  collection, addDoc, getFirestore, onSnapshot, doc, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = async (titleP, textPost, uid) => {
  const docRef = await addDoc(collection(db, 'post'), {
    title: titleP,
    message: textPost,
    uid,
  });
  console.log('Document written with ID: ', docRef.id);
};

export const getPosts = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'post', id));
};

export const editPost = (id, textContent, titleContent) => {
  const postRef = (doc(db, 'post', id));
  updateDoc(postRef, {
    message: textContent,
    title: titleContent,
  });
};
