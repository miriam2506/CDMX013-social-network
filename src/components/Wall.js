// import { saveUser } from '../firebase/auth.js';
import { onNavigate } from '../main.js';
import { signOutAccount } from '../firebase/auth.js';

export const Wall = () => {
  const div = document.createElement('div');
  div.classList.add('container-wall');
  const title = document.createElement('h2');
  title.textContent = 'MangaReads';
  title.classList = ('MangaReads');
  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Sign Out';
  buttonSignOut.classList.add('Back');

  buttonSignOut.addEventListener('click', () => {
    //  onNavigate('/'); // Sign-out successful.
    const auth = getAuth();
    signOut(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
    });
  });

  div.append(title, buttonSignOut);

  return div;
};
  /* export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const title2 = document.createElement('h3');
  const subtitle1 = document.createElement('h4');
  const buttonLogin = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  div.classList.add('container-welcome');
  title.textContent = 'MangaReads';
  title.classList.add('title');
  title2.textContent = 'まんが';
  title2.classList.add('title2');
  subtitle1.textContent = 'LOGIN';
  subtitle1.classList.add('subtitle1');
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('button');
  buttonBack.textContent = 'Back';
  buttonBack.classList.add('button');
  inputEmail.classList.add('inputOne');
  inputEmail.placeholder = 'email';
  inputPassword.classList.add('inputTwo');
  inputPassword.placeholder = 'password';
  inputPassword.setAttribute('type', 'password');

  buttonLogin.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title2, title, subtitle1, inputEmail, inputPassword, buttonLogin, buttonBack);

  return div;
};
 */
