import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonRegister = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');

  buttonRegister.textContent = 'Register';
  buttonBack.textContent = 'Back';
  title.textContent = 'Create Account';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPassword, buttonRegister, buttonBack);

  return div;
};
