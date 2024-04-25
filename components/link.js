import { LitElement, css, html } from "lit";
import { goTo } from "../scripts/Router";
import { classMap } from "lit/directives/class-map.js";

const linkStyles = css`
  .link {
    text-decoration: none;
    color: var(--color-orange);
    cursor: pointer;
  }

  .link:hover {
    color: var(--color-orange-dark);
  }

  .link_menu {
    color: black;
  }
`;

export class Link extends LitElement {
  static properties = {
    href: { type: String },
    isMenu: { type: Boolean, attribute: "is-menu" },
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
    return html`
      <a
        class="link ${classMap(classes)}"
        href="${this.href}"
        @click="${this.#handleClick}"
      >
        <slot></slot>
      </a>
    `;
  }
}

customElements.define("app-link", Link);
