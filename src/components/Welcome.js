/* eslint-disable max-len */
import { onNavigate } from '../main.js';
import { loginGoogle, signEmailPassword } from '../firebase/auth.js';

export const Welcome = () => {
  const div = document.createElement('div'); // Contenedor principal
  div.classList.add('container-welcome');

  const mainTitle = document.createElement('h2');
  mainTitle.textContent = 'MangaReads';
  mainTitle.classList.add('welcomeMainTitle');

  const japaneseTitle = document.createElement('h3');
  japaneseTitle.textContent = 'まんが';
  japaneseTitle.classList.add('welcomeJapaneseTitle');

  const textIntro = document.createElement('h4');
  textIntro.textContent = 'Welcome to a place to share information, exchange ideas and talk about your favourite Japanese manga series.';
  textIntro.classList.add('textIntro');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('buttonLogin');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputEmail');
  inputEmail.placeholder = 'email';

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputPassword');
  inputPassword.placeholder = 'password';
  inputPassword.setAttribute('type', 'password');

  const liner1 = document.createElement('hr');
  liner1.classList = ('liner1');
  const liner2 = document.createElement('hr');
  liner2.classList = ('liner2');

  const buttonGoogle = document.createElement('img');
  buttonGoogle.setAttribute('src', './img/btn_google_signin_light_normal_web@2x.png');
  buttonGoogle.classList.add('google');

  const sectionDivision = document.createElement('p');
  sectionDivision.classList.add('textLogInOr');
  sectionDivision.innerHTML = 'Or';

  const sectionSingUpText = document.createElement('p');
  sectionSingUpText.classList.add('textLogInBox');
  sectionSingUpText.innerHTML = "Don't have an account?";
  const sectionSpanParr = document.createElement('span');
  sectionSpanParr.classList.add('span');
  sectionSpanParr.innerHTML = 'Sign Up!';

  // Funcionalidad de botones
  buttonLogin.addEventListener('click', () => {
    // obtener mail y password
    const mail = inputEmail.value;
    const password = inputPassword.value;
    signEmailPassword(mail, password);
  });

  sectionSpanParr.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    loginGoogle();
  });

  div.append(japaneseTitle, mainTitle, inputEmail, inputPassword, buttonLogin, textIntro, sectionDivision, sectionSingUpText, sectionSpanParr, liner1, liner2, buttonGoogle);

  return div;
};
