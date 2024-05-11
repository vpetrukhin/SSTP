import { LitElement } from "lit"
import { goTo } from "../../scripts/Router";

const AppLink = (superClass) => {
    class AppLinkElement extends superClass {
        static properties = {
            href: {type: String}
        }

        handleClick(event) {
            event.preventDefault();

            goTo(this.href);
        }
    }



    return AppLinkElement
}

export const AppLinkLitElement = AppLink(LitElement)
