import css from "bootstrap/dist/css/bootstrap.min.css";

class CardElement extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <style>
            ${css}
        </style>
       <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://i.picsum.photos/id/204/536/354.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `;
    }
}


customElements.define("card-element", CardElement);
