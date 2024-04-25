import { LitElement, css, html } from "lit";

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
  render() {
    return html`
      <app-link class="logo link" href="/">
        <img class="logo__img" src="/logo_prev_ui.png" alt="logo" />
      </app-link>
    `;
  }
}

customElements.define("logo-component", Logo);
