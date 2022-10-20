/* eslint-disable max-len */
import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const mainTitle = document.createElement('h2');
  const japaneseTitle = document.createElement('h3');
  const subtitle = document.createElement('h4');
  const buttonRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputRegisterEmail = document.createElement('input');
  const inputRegisterPassword = document.createElement('input');
  inputRegisterEmail.placeholder = 'email';
  inputRegisterPassword.placeholder = 'password';

  inputRegisterEmail.classList.add('inputRegisterEmail');
  inputRegisterPassword.classList.add('inputRegisterPassword');
  inputRegisterPassword.setAttribute('type', 'password');
  div.classList.add('container-welcome');
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('buttonRegister');
  subtitle.textContent = 'CREATE AN ACCOUNT';
  subtitle.classList.add('subtitle');
  buttonBack.textContent = 'Back';
  buttonBack.classList.add('buttonBack');
  mainTitle.textContent = 'MangaReads';
  mainTitle.classList.add('registerMainTitle');
  japaneseTitle.textContent = 'まんが';
  japaneseTitle.classList.add('registerJapaneseTitle');

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonRegister.addEventListener('click', () => {
    saveUser(inputRegisterEmail.value, inputRegisterPassword.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log('ya se creo');
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Nel Pastel', errorMessage);
        // ..
      });
  });
  div.append(japaneseTitle, mainTitle, subtitle, inputRegisterEmail, inputRegisterPassword, buttonRegister, buttonBack);

  return div;
};
