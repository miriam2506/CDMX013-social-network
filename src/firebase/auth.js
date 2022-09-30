import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const saveUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
