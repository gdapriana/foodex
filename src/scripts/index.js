import 'regenerator-runtime';
import '../styles/main.sass';
import './components';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigations'),
  content: document.querySelector('#main-wrapper'),
  closeBtn: document.querySelector('#close-nav-btn'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
