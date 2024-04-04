import { metadata } from '../metadata/metadata';

class Brand extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('id', 'brand');
    this.render();
  }

  render() {
    this.innerHTML = `<a href="/" id="brand-link-name">${metadata.appName}</a>
                     <a href="/" id="brand-link-initial">${metadata.initial}</a> `;
  }
}

customElements.define('my-brand', Brand);
