import 'regenerator-runtime';
import '../styles/main.sass';
import './components';
import App from './views/app';

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
});
