import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { Welcome } from './components/Welcome.js';
import { Wall } from './components/Wall.js';
import { Register } from './components/Register.js';

const auth = getAuth();

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/wall': Wall,
  '/register': Register,

};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.removeChild(root.firstChild);
  // se podría usar un while para borrar varios datos al mismo tiempo
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/wall');
    console.log(user);
    // ...
  } else {
    onNavigate('/');
    console.log('me salí');
    // User is signed out
    // ...
  }
});

root.appendChild(component());
