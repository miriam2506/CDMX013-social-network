import { onNavigate } from '../main.js';
import { loginGoogle, signEmailPassword } from '../firebase/auth.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const title2 = document.createElement('h3');
  const textIntro = document.createElement('h4');
  textIntro.textContent = 'Welcome to a place to share information, exchange ideas and talk about your favourite Japanese manga series.';
  textIntro.classList.add('textIntro');
  const buttonLogin = document.createElement('button');
  const buttonSignUp = document.createElement('button');
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputOne');
  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputTwo');
  inputEmail.placeholder = 'email';
  inputPassword.placeholder = 'password';
  inputPassword.setAttribute('type', 'password');
  // const liner = document.createElement('hr');
  const buttonGoogle = document.createElement('img');

  div.classList.add('container-welcome');
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('buttonLogin');
  buttonSignUp.textContent = 'Sign Up';
  buttonSignUp.classList.add('buttonRegister');

  title.textContent = 'MangaReads';
  title.classList.add('title');
  title2.textContent = 'まんが';
  title2.classList.add('title2');

  buttonGoogle.setAttribute('src', './img/btn_google_signin_light_normal_web@2x.png');
  buttonGoogle.classList.add('google');
  // liner.classList.add('line');

  buttonLogin.addEventListener('click', () => {
    // obtener mail y password
    const mail = inputEmail.value;
    const password = inputPassword.value;
    signEmailPassword(mail, password);
  });

  buttonSignUp.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    loginGoogle();
  });

  div.append(title2, title, inputEmail, inputPassword, buttonLogin, buttonSignUp, textIntro, buttonGoogle);

  return div;
};
 