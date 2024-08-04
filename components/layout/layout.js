import { LitElement, html, css } from "lit";
import { headerStyles } from "./header.styles";
import { menuStyles } from "./menu.styles";
import { menuLinks } from "../../common/app-config/appConfig";
import { classMap } from "lit/directives/class-map.js";
import { burgerBtnStyles } from "./burger-btn.styles";

const styles = css`
  .main {
    display: flex;
    flex-direction: column;
  }

  .main__content {
    flex: 1;
  }
`;

export class Layout extends LitElement {
  static properties = {
    header: { type: String },
    isMenuOpen: { type: Boolean, attribute: false, state: true },
  };

  static styles = [burgerBtnStyles, menuStyles, headerStyles, styles];

  constructor() {
    super();
    this.isMenuOpen = false;
  }

  get isMain() {
    return this.header === "main";
  }

  renderDropdownContent(groups) {
    return html`
      <ul class="groups">
        ${groups.map(
          (group) => html`
            <li class="groups__item group">
              <h3 class="group__title">${group.text}</h3>
              ${group.links?.map(
                (childLink) => html`
                  <app-link
                    class="menu__link"
                    is-menu="true"
                    href=${childLink.href}
                    >${childLink.text}</app-link
                  >
                `,
              )}
            </li>
          `,
        )}
      </ul>
    `;
  }

  renderMenuItem(item) {
    if (item.childrens?.length) {
      return html`
        <app-dropdown>
          <app-link
            slot="trigger"
            class="menu__link"
            is-menu="true"
            href="${item.href}"
            >${item.text}</app-link
          >
          <div slot="content">
            ${this.renderDropdownContent(item.childrens)}
          </div>
        </app-dropdown>
      `;
    }

    return html`
      <li class="menu__item">
        <app-link class="menu__link" is-menu="true" href="${item.href}"
          >${item.text}</app-link
        >
      </li>
    `;
  }

  renderMenu() {
    const classes = { menu_open: this.isMenuOpen };

    return html`
      <nav class="menu ${classMap(classes)}">
        <ul class="menu__links">
          ${menuLinks.map((link) => this.renderMenuItem(link))}
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
    const headerClasses = {
      header_main: this.isMain,
    };

    return html`
      <header class="header ${classMap(headerClasses)}">
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
        ${this.isMain ? this.renderHeaderFooter() : null}
      </header>
    `;
  }

  renderMain() {
    return html`
      <main class="main">
        <div class="main__content">
          <slot></slot>
        </div>
      </main>
    `;
  }

  render() {
    return html` ${this.renderHeader()} ${this.renderMain()} `;
  }
}

customElements.define("app-layout", Layout);
