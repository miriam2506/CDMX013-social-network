/* eslint-disable max-len */
import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('hc2');
  const title2 = document.createElement('h3');
  const subtitle = document.createElement('h4');
  const buttonRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  // const inputConfirm = document.createElement('input');
  inputEmail.placeholder = 'email';
  inputPassword.placeholder = 'password';
  // inputConfirm.placeholder = 'confirm password';

  inputEmail.classList.add('inputOne');
  inputPassword.classList.add('inputTwo');
  inputPassword.setAttribute('type', 'password');
  /* inputConfirm.classList.add('inputThree');
  inputConfirm.setAttribute('type', 'password'); */
  div.classList.add('container-welcome');
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('buttonRegister');
  subtitle.textContent = 'CREATE AN ACCOUNT';
  subtitle.classList.add('subtitle');
  buttonBack.textContent = 'Back';
  buttonBack.classList.add('Back');
  title.textContent = 'MangaReads';
  title.classList.add('title');
  title2.textContent = 'まんが';
  title2.classList.add('title2');

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonRegister.addEventListener('click', () => {
    saveUser(inputEmail.value, inputPassword.value).then((userCredential) => {
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
  div.append(title2, title, subtitle, inputEmail, inputPassword, /* inputConfirm */ buttonRegister, buttonBack);

  return div;
};
