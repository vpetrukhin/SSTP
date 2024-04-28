import { LitElement, css, html } from "lit";
import { goTo } from "../scripts/Router";
import { classMap } from "lit/directives/class-map.js";

const linkStyles = css`
  .link {
    text-decoration: none;
    color: var(--color-orange);
    cursor: pointer;
    position: relative;
  }

  .link:hover {
    color: var(--color-orange-dark);
  }

  .link_menu {
    color: black;
  }

  ::slotted(*) {
    position: relative;
    box-sizing: border-box;
    height: 100%;
  }
`;

export class Link extends LitElement {
  static properties = {
    href: { type: String },
    isMenu: { type: Boolean, attribute: "is-menu" },
    class: { type: String, attribute: "class" },
  };

  constructor() {
    super();
    this.href = "#";
  }

  static styles = [linkStyles];

  #handleClick(event) {
    event.preventDefault();

    goTo(this.href);
  }

  render() {
    const classes = { link_menu: this.isMenu };
    this.class.split(" ").forEach((cls) => {
      classes[cls] = true;
    });
    return html`
      <a
        class="${classMap(classes)} link "
        href="${this.href}"
        @click="${this.#handleClick}"
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("app-link", Link);
