import { collection, addDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

const db = getFirestore(app);

export const savePost = async () => {
  const docRef = await addDoc(collection(db, 'posts'), {
    message: 'Hoy desayune avena',
  });
  console.log('Document written with ID: ', docRef.id);
};
