class Loader extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('id', 'loader');
    this.render();
  }

  render() {
    this.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
  }
}

customElements.define('my-loader', Loader);
