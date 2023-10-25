class AppBar extends HTMLElement {
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
        width: 100%;
        
        color: white;
        
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
      }

      div {
        padding: 24px 20px;
      }

      .brand-name {
        margin: 0;
      
        font-size: 1.7em;
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
        <h1 class="brand-name">Sport Club Finder</h1>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
