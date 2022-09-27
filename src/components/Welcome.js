import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonSignUp = document.createElement('button');

  buttonLogin.textContent = 'Sign in';
  buttonSignUp.textContent = 'Sign Up';
  title.textContent = 'red social';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/register');
  });
  div.append(title, buttonLogin, buttonSignUp);

  return div;
};
