import 'regenerator-runtime'; /* for async await transpile */
import '../styles/base.sass';
import '../styles/header.sass';
import '../styles/main.sass';
import '../styles/footer.sass';
import './components/index.js';
import { loadFoods } from './utils/loadFoods';
import { loadCategories } from './utils/loadCategories';
import { loadDrawer, loadNavigations } from './utils/loadNavigations';

console.log('Hello Coders! :)');

document.addEventListener('DOMContentLoaded', () => {
  loadNavigations();
  loadDrawer();
  loadFoods().then();
  loadCategories().then();

  // hamburger
  const hamburgerBtn = document.querySelector('#hamburger');
  const drawer = document.querySelector('#nav-drawer');
  const closeDrawerBtn = document.querySelector('#close-drawer');

  hamburgerBtn.addEventListener('click', () => {
    drawer.classList.add('show');
    drawer.classList.remove('hide');
  });

  closeDrawerBtn.addEventListener('click', () => {
    drawer.classList.add('hide');
    drawer.classList.remove('show');
  });
});
