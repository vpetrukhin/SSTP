import { LitElement, css, html } from "lit";
import { appConfig } from "../../common";
import { goTo } from "../../scripts/Router";

export class Logo extends LitElement {
  static styles = css`
    .logo {
      display: inline-block;
      width: 100px;
      height: 100px;
      cursor: pointer;
    }

    .logo:hover {
      border-bottom: none;
    }

    .logo__img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    @media screen and (max-width: 768px) {
      .logo {
        display: inline-block;
        width: 70px;
        height: 70px;
      }
    }
  `;

  _handleClick(event) {
    event.preventDefault();

    goTo(appConfig.routes.index);
  }

  render() {
    return html`
      <div role="button" class="logo link" @click="${this._handleClick}">
        <img class="logo__img" src="/new_logo-2.png" alt="logo" />
      </div>
    `;
  }
}

customElements.define("logo-component", Logo);
