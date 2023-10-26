class ClubItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _club = {
    idTeam: null,
    strTeam: null,
    strDescriptionEN: null,
    strTeamBadge: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set club(value) {
    this._club = value;

    // Render ulang
    this.render();
  }

  get club() {
    return this._club;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        border-radius: 8px;

        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
        overflow: hidden;
      }

      .fan-art-club {
        width: 100%;
        max-height: 450px;

        object-fit: cover;
        object-position: center;
      }

      .club-info {
        padding: 16px 24px;
      }

      .club-info__title h2 {
        font-weight: lighter;
      }

      .club-info__description p {
        display: -webkit-box;
        margin-top: 10px;

        overflow: hidden;

        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; /* number of lines to show */
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="card">
        <img 
          class="fan-art-club"
          src="${this._club.strTeamBadge}" 
          alt="Fan Art: ${this._club.strTeam}"
        >
        <div class="club-info">
          <div class="club-info__title">
            <h2>${this._club.strTeam}</h2>
          </div>
          <div class="club-info__description">
            <p>${this._club.strDescriptionEN}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('club-item', ClubItem);
