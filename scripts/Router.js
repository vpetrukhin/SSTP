import { appConstants } from "../common/const";
import Route from "route-parser";

import MainPage from "../pages/main.template";
import ServicesPage from "../pages/services.template";
import ProductsPage from "../pages/products.template";
import ManufacturePage from "../pages/manufacture.template";
import AboutPage from "../pages/about.template";
import CertificatesPage from "../pages/certificates.template";
import ContactsPage from "../pages/contacts.template";

export const routes = {
  Main: new Route(appConstants.routes.index),
  Services: new Route(appConstants.routes.services),
  Products: new Route(appConstants.routes.products),
  Manufacture: new Route(appConstants.routes.manufacture),
  About: new Route(appConstants.routes.about),
  Certificates: new Route(appConstants.routes.certificates),
  Contacts: new Route(appConstants.routes.contacts),
};

export const render = (path) => {
  let result = "<h1>404</h1>";

  // TODO: refactor
  if (routes.Main.match(path)) {
    result = MainPage();
  } else if (routes.Services.match(path)) {
    result = ServicesPage();
  } else if (routes.Products.match(path)) {
    result = ProductsPage();
  } else if (routes.Manufacture.match(path)) {
    result = ManufacturePage();
  } else if (routes.About.match(path)) {
    result = AboutPage();
  } else if (routes.Certificates.match(path)) {
    result = CertificatesPage();
  } else if (routes.Contacts.match(path)) {
    result = ContactsPage();
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
