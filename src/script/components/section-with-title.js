class SectionWithTitle extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _title = 'NEED SECTION TITLE';

  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      
      .title-section {
        margin-block-end: 2rem;

        font-size: 1.2em;
      }
    `;
  }

  set title(value) {
    this._title = value;
  }

  get title() {
    return this._title;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <section id="club" class="club">
        <div class="title-section">
          <h2>${this.title}</h2>
        </div>

        <div>
          <slot></slot>
        </div>
      </section>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'title':
        this.title = newValue;
        break;
    }

    this.render();
  }
}

customElements.define('section-with-title', SectionWithTitle);
