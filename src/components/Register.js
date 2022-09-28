import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const title2 = document.createElement('h3');
  const subtitle = document.createElement('h4');
  const buttonRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirm = document.createElement('input');
  inputEmail.placeholder = 'e-mail';
  inputPassword.placeholder = 'password';
  inputConfirm.placeholder = 'confirm password';
  inputEmail.classList.add('inputOne');
  inputPassword.classList.add('inputTwo');
  inputConfirm.classList.add('inputThree');
  div.classList.add('container-welcome');
  buttonRegister.textContent = 'Register';
  buttonRegister.classList.add('buttonRegister');
  subtitle.textContent = 'CREATE AN ACCOUNT';
  subtitle.classList.add('subtitle');
  buttonBack.textContent = 'Back';
  buttonBack.classList.add('Back');
  title.textContent = 'MangaReads';
  title.classList.add('create');
  title2.textContent = 'まんが';
  title2.classList.add('title2');

  buttonRegister.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(
    title2,
    title,
    subtitle,
    inputEmail,
    inputPassword,
    inputConfirm,
    buttonRegister,
    buttonBack,
  );

  return div;
};
