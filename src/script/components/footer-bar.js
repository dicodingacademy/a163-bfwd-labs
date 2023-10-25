class FooterBar extends HTMLElement {
  #shadowRoot = null;
  #style = null;

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: 'open' });
    this.#style = document.createElement('style');
  }

  _updateStyle() {
    this.#style.textContent = `
      :host {
        display: block;
      }

      div {
        padding: 24px 20px;

        text-align: center;
      }
    `;
  }

  _emptyContent() {
    this.#shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this.#shadowRoot.appendChild(this.#style);
    this.#shadowRoot.innerHTML += `      
      <div>
        Club Finder &copy; 2023
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
