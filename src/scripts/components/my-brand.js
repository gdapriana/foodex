import { metadata } from '../data/metadata';

class MyBrand extends HTMLElement {
  constructor() {
    super();
    this._text = metadata.app;
    this._logo = metadata.logo;
    this.classList.add('brand');
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${this._logo}" />
      <h1>${this._text}</h1>
    `;
  }
}

customElements.define('my-brand', MyBrand);
