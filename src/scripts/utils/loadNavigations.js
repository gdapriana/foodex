import { routes } from '../metadata/routes';

export const loadNavigations = () => {
  const wrapper = document.querySelector('#navigations');

  for (const route of routes) {
    const link = document.createElement('a');
    link.classList.add('nav-item');
    link.setAttribute('href', route.route);
    route.target_blank && link.setAttribute('target', '_blank');
    link.innerHTML = route.title;
    wrapper.append(link);
  }
};

export const loadDrawer = () => {
  const drawer = document.querySelector('#nav-drawer');
  for (const route of routes) {
    const link = document.createElement('a');
    link.classList.add('nav-item');
    link.setAttribute('href', route.route);
    route.target_blank && link.setAttribute('target', '_blank');
    link.innerHTML = route.title;
    drawer.append(link);
  }
};
