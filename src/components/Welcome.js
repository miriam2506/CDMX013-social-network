/* eslint-disable max-len */
import { onNavigate } from '../main.js';
import { loginGoogle, signEmailPassword } from '../firebase/auth.js';

export const Welcome = () => {
  const div = document.createElement('div'); // Contenedor principal
  div.classList.add('container-welcome');

  const title = document.createElement('h2');
  title.textContent = 'MangaReads';
  title.classList.add('title');

  const title2 = document.createElement('h3');
  title2.textContent = 'まんが';
  title2.classList.add('title2');

  const textIntro = document.createElement('h4');
  textIntro.textContent = 'Welcome to a place to share information, exchange ideas and talk about your favourite Japanese manga series.';
  textIntro.classList.add('textIntro');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('buttonLogin');

  const buttonSignUp = document.createElement('button');
  buttonSignUp.textContent = 'Sign Up';
  buttonSignUp.classList.add('buttonRegister');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputOne');
  inputEmail.placeholder = 'email';

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputTwo');
  inputPassword.placeholder = 'password';
  inputPassword.setAttribute('type', 'password');

  const liner = document.createElement('hr');
  liner.classList = ('liner');

  const buttonGoogle = document.createElement('img');
  buttonGoogle.setAttribute('src', './img/btn_google_signin_light_normal_web@2x.png');
  buttonGoogle.classList.add('google');

  const sectionDivision = document.createElement('p');
  sectionDivision.classList.add('textLogInBox');
  sectionDivision.innerHTML = 'Or';

  const sectionSingUpText = document.createElement('p');
  sectionSingUpText.classList.add('textLogInBox');
  sectionSingUpText.innerHTML = "Don't have an account?";
  const sectionSpanParr = document.createElement('span');
  sectionSpanParr.innerHTML = 'Sign Up!';

  // Funcionalidad de botones
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

  div.append(title2, title, inputEmail, inputPassword, buttonLogin, buttonSignUp, textIntro, sectionDivision, sectionSingUpText, sectionSpanParr, liner, buttonGoogle);

  return div;
};
