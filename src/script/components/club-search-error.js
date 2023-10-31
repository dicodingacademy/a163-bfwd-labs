class ClubSearchError extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div>
        <h2 class="placeholder">Error</h2>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('club-search-error', ClubSearchError);
