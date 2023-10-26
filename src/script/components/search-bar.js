class SearchBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = 'submit';
  _searchEvent = 'search';

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .addEventListener('submit', (event) => this.#onFormSubmit(event, this));
    this.addEventListener(this._submitEvent, this.#onSearchBarSubmit);
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .removeEventListener('submit', (event) => this.#onFormSubmit(event, this));
    this.removeEventListener(this._submitEvent, this.#onSearchBarSubmit);
  }

  #onFormSubmit(event, searchBarInstance) {
    searchBarInstance.dispatchEvent(new CustomEvent('submit'));

    event.preventDefault();
  }

  #onSearchBarSubmit() {
    const query = this._shadowRoot.querySelector('input#name').value;

    if (!query) return;

    this.dispatchEvent(
      new CustomEvent(this._searchEvent, {
        detail: { query },
        bubbles: true,
      }),
    );
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: inline;
      }

      .floating-form {
        background-color: white;
        padding: 16px;
        border-radius: 5px;

        position: sticky;
        top: 10px;

        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .search-form {
        display: flex;
        gap: 16px;
      }

      .search-form .form-group {
        flex-grow: 1;

        position: relative;
      }

      .search-form .form-group input {
        display: block;

        width: 100%;
        height: 60px;

        padding: 14px 10px 0 10px;
        border-inline: none;
        border-block-start: none;
        border-block-end: 1px solid cornflowerblue;

        font-size: 1rem;
      }

      .search-form .form-group input:focus-visible {
        outline: 0;
      }

      .search-form .form-group label {
        line-height: 60px;
        font-size: 1em;
        font-weight: 700;
        text-transform: uppercase;
        color: cornflowerblue;

        white-space: nowrap;

        position: absolute;
        top: 0;
        left: 20px;

        user-select: none;
        pointer-events: none;

        transition: 150ms all ease-in-out;
      }

      .search-form .form-group input:focus-visible ~ label,
      .search-form .form-group input:valid ~ label {
        left: 10px;
        top: -16px;

        font-size: 0.8em;
      }

      .search-form button {
        border: 0;
        padding-inline: 24px;
        background-color: cornflowerblue;

        text-transform: uppercase;
        font-size: 1rem;
        color: white;

        cursor: pointer;

        transition: 100ms linear;
      }

      .search-form button:hover {
        background-color: #4485ff;
      }

      .search-form button:active {
        background-color: #6c9aee;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="floating-form">
        <form id="searchForm" class="search-form">
          <div class="form-group">
            <input id="name" name="name" type="search" required />
            <label for="name">Sport club's name</label>
          </div>

          <button>Search</button>
        </form>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
