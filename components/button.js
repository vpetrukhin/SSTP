import "../styles/index.css";

const styles = `
.btn {
    box-sizing: border-box;

    margin: 0;
    padding: 15px;
    border: 2px solid var(--color-orange);
    background: none;
    border-radius: 3px;
    outline: none;


    cursor: pointer;
}

.btn__active {
    background: var(--color-orange);
}

.btn:hover {
    border-color: var(--color-orange-dark);
}

.btn__active:hover {
    background: var(--color-orange-dark);
}
`;

class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.styles = styles;

    const style = document.createElement("style");
    const button = document.createElement("button");

    style.textContent = styles;

    shadow.append(style);
    shadow.append(button);

    this.active = false;
    this.externalClass = "";
  }
  static get observedAttributes() {
    return ["text", "active", "class"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "active") {
      this.active = JSON.parse(newValue);
    }
    if (name === "class") {
      this.externalClass = newValue;
    }
    this.render();
  }

  render() {
    const classList = `btn ${this.active ? "btn__active" : ""}`;
    const textContent = this.getAttribute("text");

    // this.classList.add(this.externalClass);
    this.shadowRoot.querySelector("button").classList = classList;
    this.shadowRoot.querySelector("button").textContent = textContent;
  }
}

customElements.define("app-button", Button);
