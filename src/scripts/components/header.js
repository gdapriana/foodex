class Header extends HTMLElement {
  static observedAttributes = ['title'];
  constructor() {
    super();
    this._title = this.getAttribute('title');
    this.classList.add('section-header');
    this.render();
  }

  render() {
    this.innerHTML = `<h1 tabindex="0" class="section-header-text">${this._title}</h1>`;
  }
}

customElements.define('my-header', Header);
