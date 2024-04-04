import { metadata } from '../metadata/metadata';

class Footer extends HTMLElement {
  constructor() {
    super();
    this.classList.add('footer');
    this.render();
  }

  render() {
    this.innerHTML = `<p tabindex="0">Copyright © 2024 - ${metadata.appName}</p>`;
  }
}

customElements.define('my-footer', Footer);
