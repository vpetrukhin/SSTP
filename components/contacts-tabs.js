import { appConstants } from "../common/const";
import "../styles/index.css";

const initTab = appConstants.contacts.tabs.office;

const styles = `
.contacts__inner {
    margin: 0 auto 40px;
    display: grid;
    grid-template-columns: 1fr minmax(0, 660px);
    grid-template-rows: [row2-start] 70px [row2-end row3-start] 50px [row3-end] auto [last];
    column-gap: 20px;
}
  
.contacts__buttons {
    height: 50px;
    display: flex;
    gap: 20px;
    
    margin-bottom: 40px;
}

.contacts__address {
    margin: 0;
    padding-left: 15px;
}

.contacts__img {
    width: 660px;
    height: 395px;
    
    grid-row: row2-start / last;
    grid-column: 2 / 2;
}

@media screen and (max-width: 1100px) {
    .contacts__inner {
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .contacts__img {
        margin-bottom: 20px;
        width: 100%;
        grid-column: 1 / 1;
    }
}
`;

class ContactTabs extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    const wrapper = document.createElement("div");

    style.textContent = styles;

    shadow.append(style);

    wrapper.innerHTML = `
        <div id="contacts-btns" class="contacts__buttons">
          <app-button id="office" active="true" text="Офис"></app-button>
          <app-button id="factory" active="false" text="Производство и склад"></app-button>
        </div>
        <div class="contacts__inner">
            <h2 class="contacts__title">Наши контакты</h2>
            <p class="contacts__address"></p>
            <slot name="contacts-list" class="contacts__list"></slot>
            <img class="contacts__img" src="" alt="">
        </div>
    `;

    wrapper.querySelector(".contacts__img").src = initTab.src;
    wrapper.querySelector(".contacts__address").textContent = initTab.address;

    shadow.appendChild(wrapper);
  }

  connectedCallback() {
    const shadow = this.shadowRoot;
    const btnsWrapper = shadow.querySelector(".contacts__buttons");

    btnsWrapper.addEventListener("click", (event) => {
      const target = event.target;
      const isTab = /^office$|^factory$/.test(target.id);

      if (isTab) {
        this.setActiveTab(target);
        this.updateTab(target);
      }
    });
  }

  setActiveTab(currentTab) {
    const btns = this.shadowRoot.querySelectorAll("[text]");
    btns.forEach((btn) => {
      btn.setAttribute("active", false);
    });
    currentTab.setAttribute("active", true);
  }

  updateTab(currentTab) {
    const currentTabConfig = appConstants.contacts.tabs[currentTab.id];

    this.shadowRoot.querySelector(".contacts__img").src = currentTabConfig.src;
    this.shadowRoot.querySelector(".contacts__address").textContent =
      currentTabConfig.address;
  }
}

customElements.define("contact-tabs", ContactTabs);
