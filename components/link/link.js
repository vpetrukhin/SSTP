import { css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { AppLinkLitElement } from "../mixins/app-link";

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

  .link_full-size {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export class Link extends AppLinkLitElement {
  static properties = {
    isMenu: { type: Boolean, attribute: "is-menu" },
    isFullSize: { type: Boolean, attribute: "is-full-size" },
    class: { type: String, attribute: "class" },
  };

  constructor() {
    super();
    this.href = "#";
  }

  static styles = [linkStyles];

  render() {
    const classes = {
      link_menu: this.isMenu,
      "link_full-size": this.isFullSize,
    };
    this.class.split(" ").forEach((cls) => {
      classes[cls] = true;
    });
    return html`
      <a
        class="${classMap(classes)} link"
        href="${this.href}"
        @click="${this.handleClick}"
      >
          <slot></slot>
      </a>
    `;
  }
}

customElements.define("app-link", Link);
