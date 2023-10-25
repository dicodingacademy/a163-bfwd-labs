import Utils from '../utils.js';

class ClubList extends HTMLElement {
  #shadowRoot = null;
  #style = null;

  #column = 2;
  #gutter = 16;

  static get observedAttributes() {
    return ['column', 'gutter'];
  }

  constructor() {
    super();

    this.#shadowRoot = this.attachShadow({ mode: 'open' });
    this.#style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this.#style.textContent = `
      :host {
        display: block;
      }
      
      .list {
        display: grid;
        grid-template-columns: ${'1fr '.repeat(this.column)};
      
        gap: ${this.gutter}px;
      }
    `;
  }

  set column(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this.#column = value;
  }

  get column() {
    return this.#column;
  }

  set gutter(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this.#gutter = value;
  }

  get gutter() {
    return this.#gutter;
  }

  _emptyContent() {
    this.#shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this.#shadowRoot.appendChild(this.#style);
    this.#shadowRoot.innerHTML += `
      <div class="list">
        <slot></slot>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'column':
        this.column = newValue;
        break;
      case 'gutter':
        this.gutter = newValue;
        break;
    }

    this.render();
  }
}

customElements.define('club-list', ClubList);
