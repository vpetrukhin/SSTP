import officeImg from "./office.jpg";
import factoryImg from "./factory.jpg";

export const appConfig = {
  routes: {
    index: "/",
    products: "/products",
    manufacture: "/manufacture",
    services: "/services",
    about: "/about",
    certificates: "/certificates",
    contacts: "/contacts",
  },
  contacts: {
    tabs: {
      office: {
        address:
          "Адрес: 115230, г. Москва, проезд Хлебозаводский, д.7, стр.9, этаж 3, пом. Х, офис 31",
        src: officeImg,
      },
      factory: {
        address: "Калужская область, п. Льва Толстого, ул. 1Мая дом 21",
        src: factoryImg,
      },
    },
  },
};
