class ImageFigure extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
      <figure>
        <img src="src/logo-g.jpg" alt="Dicoding Logo g" width="200" />
        <figcaption>Huruf g dalam logo Dicoding</figcaption>
      </figure>
    `;
  }
}

customElements.define('image-figure', ImageFigure);
