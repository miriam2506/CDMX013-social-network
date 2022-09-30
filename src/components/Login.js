// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  div.classList.add('container-welcome');

  buttonLogin.textContent = 'Login';
  buttonBack.textContent = 'Back';
  title.textContent = 'Login';
  buttonLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPassword, buttonLogin, buttonBack);

  return div;
};
