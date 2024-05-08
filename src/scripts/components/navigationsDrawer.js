import { routes } from '../data/metadata';
import 'regenerator-runtime';

const generateDrawerList = () => {
  const ul = document.createElement('ul');
  for (let i = 0; i < routes.length; i += 1) {
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.innerHTML = routes[i].title;
    link.setAttribute('href', routes[i].route);
    li.appendChild(link);
    ul.append(li);
  }
  return ul;
};

document.querySelector('#navigationDrawer').append(generateDrawerList());
