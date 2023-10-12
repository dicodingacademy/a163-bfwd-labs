class ImageFigure extends HTMLElement {
  static get observedAttributes() {
    return ['img', 'altImg', 'caption'];
  }

  constructor() {
    super();

    this._style = document.createElement('style');
  }

  connectedCallback() {
    this.render();
  }

  set img(value) {
    const hasChange = this.img != value;
    if (hasChange) {
      this.removeAttribute('img');
    }

    this.setAttribute('img', value);
  }

  get img() {
    const value = this.getAttribute('img');
    return value;
  }

  set altImg(value) {
    const hasChange = this.altImg != value;
    if (hasChange) {
      this.removeAttribute('altImg');
    }

    this.setAttribute('altImg', value);
  }

  get altImg() {
    const value = this.getAttribute('altImg');
    return value;
  }

  set caption(value) {
    const hasChange = this.caption != value;
    if (hasChange) {
      this.removeAttribute('caption');
    }

    this.setAttribute('caption', value);
  }

  get caption() {
    const value = this.getAttribute('caption');
    return value;
  }

  updateStyle() {
    this._style.textContent = `
      ${this.localName} {
        display: block;
      }
    `;
  }

  render() {
    this.emptyContent();
    this.updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
      <figure>
        <img src="${this.img}" alt="${this.altImg}" />
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  emptyContent() {
    this.innerHTML = '';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Render konten ulang
    this.render();
  }
}

customElements.define('image-figure', ImageFigure);
