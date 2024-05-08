class HeaderSection extends HTMLElement {
  static observedAttributes = ['title', 'align'];
  constructor() {
    super();
    this._title = this.getAttribute('title');
    this._align = this.getAttribute('align');
    if (!this._title) throw new Error('text header must be defined (title)');
    if (!this._align)
      throw new Error(
        'alugn header must be defined (align: center, left, right or justify)',
      );
    this.classList.add('section-header');
    this.render();
  }

  render() {
    this.innerHTML = `<h2 tabindex="0" style="text-align: ${this._align}">${this._title}</h2>`;
  }
}

customElements.define('my-header-section', HeaderSection);
