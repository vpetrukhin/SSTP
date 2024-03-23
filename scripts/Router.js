import { appConstants } from "../common/const";
import Route from "route-parser";

import MainPage from "../pages/main.template";
import ServicesPage from "../pages/services.template";

export const routes = {
  Main: new Route(appConstants.routes.index),
  Services: new Route(appConstants.routes.services),
};

export const render = (path) => {
  let result = "<h1>404</h1>";

  // TODO: refactor
  if (routes.Main.match(path)) {
    result = MainPage();
  } else if (routes.Services.match(path)) {
    result = ServicesPage();
  }

  document.querySelector("#content").innerHTML = result;
};

export const goTo = (path) => {
  window.history.pushState({ path }, path, path);
  render(path);
};

const initRouter = () => {
  window.addEventListener("popstate", (e) => {
    render(new URL(window.location.href).pathname);
  });
  document.querySelectorAll('[href^="/"]').forEach((el) => {
    el.addEventListener("click", (env) => {
      env.preventDefault();
      const { pathname: path } = new URL(env.target.href);
      goTo(path);
    });
  });
  render(new URL(window.location.href).pathname);
};

export default initRouter;
