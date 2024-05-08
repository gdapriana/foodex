import { metadata } from '../data/metadata';

class Brand extends HTMLElement {
  constructor() {
    super();
    this.classList.add('brand');
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="brand-logo" alt='${metadata.app}' src='${metadata.logo}' />
      <h1 class="brand-text">${metadata.app}</h1>
    `;
  }
}

customElements.define('custom-brand', Brand);
