import { appConfig } from "../common";
import Route from "route-parser";

import MainPage from "../pages/main.template";
import ServicesPage from "../pages/services.template";
import ProductsPage from "../pages/products.template";
import ManufacturePage from "../pages/manufacture.template";
import AboutPage from "../pages/about.template";
import CertificatesPage from "../pages/certificates.template";
import ContactsPage from "../pages/contacts.template";
import ServicesProjectPage from "../pages/services/project.template";
import ServicesDeliveryPage from "../pages/services/delivery.template";



export const routes = {
  Main: new Route(appConfig.routes.index),
  Services: new Route(appConfig.routes.services),
  Products: new Route(appConfig.routes.products),
  Manufacture: new Route(appConfig.routes.manufacture),
  About: new Route(appConfig.routes.about),
  Certificates: new Route(appConfig.routes.certificates),
  Contacts: new Route(appConfig.routes.contacts),
  ServicesProject: new Route(appConfig.routes.servicesProject),
  ServicesDelivery: new Route(appConfig.routes.servicesDelivery),
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
    result = ContactsPage({ src: "../assets/office.jpg" });
  } else if (routes.ServicesProject.match(path)) {
    result = ServicesProjectPage();
  } else if (routes.ServicesDelivery.match(path)) {
    result = ServicesDeliveryPage();
  }


  document.querySelector("#content").innerHTML = result;
};

export const goTo = (path) => {
  window.history.pushState({ path }, path, path);
  render(path);
};

const initRouter = async () => {
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
  return await render(new URL(window.location.href).pathname);
};

export default initRouter;
