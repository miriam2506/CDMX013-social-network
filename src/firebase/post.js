import {
  collection, addDoc, getFirestore, onSnapshot, doc, deleteDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = async (titleP, textPost) => {
  const docRef = await addDoc(collection(db, 'post'), {
    title: titleP,
    message: textPost,
  });
  console.log('Document written with ID: ', docRef.id);
};

export const getPosts = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'post', id));
};

export const editPost = async (id, post) => {
  const postRef = (doc(db, 'post', id));
  await updateDoc(postRef, post);
};
