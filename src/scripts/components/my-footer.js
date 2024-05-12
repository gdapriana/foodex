class Footer extends HTMLElement {
  constructor() {
    super();
    this.classList.add('footer-content');
    this.render();
  }

  render() {
    this.innerHTML =
      '<p tabindex="0">Create with 🧑‍💻 by @gedeaprianaa | copyright ©️ 2024</p>';
  }
}

customElements.define('my-footer', Footer);
