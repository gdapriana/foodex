import 'regenerator-runtime';
import { routes } from '../data/metadata';

class NavigationsDrawer extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('id', 'navigations');
    this.render();
  }

  render() {
    this.innerHTML = `<button tabindex="0" id="close-nav-btn" aria-label="close drawer button"><img src="/close.svg" /></button>`
    for (let i = 0; i < routes.length; i += 1) {
      const link = document.createElement('a');
      link.setAttribute('href', routes[i].route);
      if (routes[i].target_blank) {
        link.setAttribute('target', '__blank');
      }
      link.innerHTML = routes[i].title;
      this.append(link);
    }
  }
}

customElements.define('my-navigations', NavigationsDrawer);
