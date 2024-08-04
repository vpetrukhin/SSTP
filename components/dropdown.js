import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

const rootCss = css`
  .root {
    position: relative;
  }

  .content {
    display: none;
    position: absolute;
    left: 0;
    padding: 10px;
    background: #fff;
    z-index: 10;
  }

  .visible {
    display: block;
  }
`;

const DEFAULT_TRIGGER_HEIGHT = 20;

export class Dropdown extends LitElement {
  static properties = {
    isOpen: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.isOpen = false;
  }

  static styles = [rootCss];

  get triggerHeight() {
    const trigger = this.shadowRoot.querySelector("#trigger");
    return (
      trigger?.assignedElements({ flatten: true })[0].offsetHeight ??
      DEFAULT_TRIGGER_HEIGHT
    );
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  handleMouseEnter() {
    this.isOpen = true;
  }
  handleMouseLeave() {
    this.isOpen = false;
  }

  render() {
    const classes = { content: true, visible: this.isOpen };
    const contentStyle = { top: `${this.triggerHeight}px` };
    return html`
      <div
        class="root"
        @mouseenter="${this.handleMouseEnter}"
        @mouseleave=${this.handleMouseLeave}
      >
        <slot id="trigger" name="trigger"></slot>
        <div class=${classMap(classes)} style=${styleMap(contentStyle)}>
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("app-dropdown", Dropdown);
