import { LitElement, html } from "lit";
import { headerStyles } from "./header.styles";
import { menuStyles } from "./menu.styles";
import { menuLinks } from "../../common/app-config/appConfig";
import { classMap } from "lit/directives/class-map.js";
import { burgerBtnStyles } from "./burger-btn.styles";

export class Layout extends LitElement {
  static properties = {
    header: { type: String },
    isMenuOpen: { type: Boolean, attribute: false, state: true },
  };

  static styles = [burgerBtnStyles, menuStyles, headerStyles];

  constructor() {
    super();
    this.isMenuOpen = false;
    this.header = "main";
  }

  renderMenu() {
    const classes = { menu_open: this.isMenuOpen };

    return html`
      <nav class="menu ${classMap(classes)}">
        <ul class="menu__links">
          ${menuLinks.map(
            (link) =>
              html`<li class="menu__item">
                <app-link class="menu__link" is-menu="true" href="${link.href}"
                  >${link.text}</app-link
                >
              </li>`,
          )}
        </ul>
      </nav>
    `;
  }

  renderHeaderFooter() {
    return html`
      <div class="header__footer">
        <h1 class="header__title">Производитель решетчатого настила</h1>
      </div>
    `;
  }

  _toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  renderHeader() {
    const burgerBtnClasses = { "burger-btn_open": this.isMenuOpen };

    return html`
      <header class="header open">
        <div class="header__content">
          <div class="header__inner">
            <div class="header__logo">
              <logo-component></logo-component>
            </div>
            <ul class="header__contacts">
              <li><a tel="tel:+79999999999" href="#">+7 999 999-99-99</a></li>
              <li>
                <a href="mailto:1wDkK@example.com">1wDkK@example.com</a>
              </li>
            </ul>
          </div>
          <button
            class="header__burger-btn burger-btn ${classMap(burgerBtnClasses)}"
            @click="${this._toggleMenu}"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          ${this.renderMenu()}
        </div>
        ${this.header === "main" && this.renderHeaderFooter()}
      </header>
    `;
  }

  renderMain() {
    return html`
      <main>
        <slot></slot>
      </main>
    `;
  }

  render() {
    return html` ${this.renderHeader()} ${this.renderMain()} `;
  }
}

customElements.define("app-layout", Layout);
