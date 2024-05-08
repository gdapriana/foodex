import { metadata } from '../data/metadata';

class Footer extends HTMLElement {
  constructor() {
    super();
    this.classList.add('footer');
    this.render();
  }

  render() {
    this.innerHTML = `<p tabindex="0">Copyright © 2024 - ${metadata.app}</p>`;
  }
}

customElements.define('custom-footer', Footer);
