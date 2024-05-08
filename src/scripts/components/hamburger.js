class Hamburger extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('id', 'hamburger');
    this.render();
  }

  render() {
    this.innerHTML = '<img class="hamburger-logo" src="/hamburger.png" alt="hamburger" />';
  }
}

customElements.define('custom-hamburger', Hamburger);
