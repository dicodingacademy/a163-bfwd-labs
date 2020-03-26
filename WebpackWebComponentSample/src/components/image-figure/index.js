import css from "./style.css";
import html from "./template.html";
import componentTemplateFactory from "../../utils/componentTemplateFactory";

const template = componentTemplateFactory(html, css);

class ImageFigure extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;

        this.render();
    }


    render() {
        this.shadowRoot.querySelector("img").src = this.src;
        this.shadowRoot.querySelector("img").alt = this.alt;
        this.shadowRoot.querySelector("figcaption").textContent = this.caption;
    }
}


customElements.define("image-figure", ImageFigure);
