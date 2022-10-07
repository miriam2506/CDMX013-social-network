import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = async () => {
  const docRef = await addDoc(collection(db, 'post'), {
    message: 'Hi Mortaluchos',
  });
  console.log('Document written with ID: ', docRef.id);
};
