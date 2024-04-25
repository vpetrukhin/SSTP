import { LitElement, html, css } from "lit";
import { menuLinks } from "../common";

const menuStyles = css`
  .menu {
    max-width: 720px;
    margin: 0 auto;
  }

  .menu__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
`;

export class Menu extends LitElement {
  static properties = {
    class: { type: String, attribute: "class" },
    listClass: { type: String, attribute: "list-class" },
  };

  static styles = [menuStyles];

  render() {
    return html`
      <nav class="${this.class} menu">
        <ul class="${this.listClass} menu__links">
          ${menuLinks.map(
            (link) =>
              html`<li class="menu__item">
                <app-link class="menu__link" href="${link.href}"
                  >${link.text}</app-link
                >
              </li>`,
          )}
        </ul>
      </nav>
    `;
  }
}

customElements.define("menu-component", Menu);
