import { html, css } from "lit";
import { AppLinkLitElement } from "./mixins/app-link";

export class ImgLink extends AppLinkLitElement {
  static properties = {
    class: { type: String, attribute: "class" },
    bg: { type: String, attribute: "bg" },
    text: { type: String, attribute: "text" }
  };

  static styles = css`
    .root {
        display: grid;

        width: 100%;
        height: 100%;

        background-size: 100% 100%;
        
        
        text-decoration: none;
    }

    .root > * {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    }

    .background {
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.30);

        pointer-event: none;
    }

    .root:hover .background {
        background: rgba(0, 0, 0, 0.10);
    }

    .text {
        padding: 0 0 10px 20px;

        align-self: end;

        color: white;
        font-size: 16px;
    }
  `;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

  }

  render() {
    return html`
      <a
        class="root"
        href="${this.href}"
        style="background-image: url(${this.bg}) "
        @click="${this.handleClick}"
      >
          <div class="background"></div>
          <span class="text">
            <slot></slot>
          </span>
      </a>
    `;
  }
}

customElements.define("img-link", ImgLink);
