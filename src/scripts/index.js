import 'regenerator-runtime';
import '../styles/index.sass';
import './components';
import swRegister from './utils/sw-register';
import App from './views/app';
import { WsInitiator } from './utils/ws-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-wrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WsInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
