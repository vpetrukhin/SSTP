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
    servicesProject: "/services/project",
    servicesDelivery: "/services/delivery",
    productsNastil: "/products/nastil",
    productsSteps: "/products/steps",
    productsFasteners: "/products/fastener",
    nastilSvarnoy: "/nastil/svarnoy-nastil",
    nastilPress: "/nastil/press-nastil",
    nastilAntiSlip: "/nastil/anti-slipnastil",


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

export const menuLinks = [
  {
    text: "Продукция",
    href: appConfig.routes.products,
    childrens: [
      {
        text: "Сварной настил",
        links: [
          {
            text: "Сварной настил",
            href: appConfig.routes.nastilSvarnoy,
          },
          {
            text: "Настил с противоскольжением",
            href: appConfig.routes.nastilAntiSlip,
          },
          {
            text: "Пресованный Настил",
            href: appConfig.routes.nastilPress,
          },
        ],
      },
      {
        text: "Ступени",
        links: [
          {
            text: "Ступени",
            href: appConfig.routes.productsSteps,
          }
          // {
          //   text: "Сварные ступени",
          //   href: appConfig.routes.products,
          // },
          // {
          //   text: "Ступени с противоскольжением",
          //   href: appConfig.routes.products,
          // },
        ],
      },
      {
        text: "Другое",
        links: [
          {
            text: "Крепеж",
            href: appConfig.routes.productsFasteners,
          },
        ],
      },
    ],
  },
  {
    text: "Производство",
    href: appConfig.routes.manufacture,
  },
  {
    text: "Услуги",
    href: appConfig.routes.services,
  },
  {
    text: "О компании",
    href: appConfig.routes.about,
  },
  {
    text: "Сертификаты",
    href: appConfig.routes.certificates,
  },
  {
    text: "Контакты",
    href: appConfig.routes.contacts,
  },
];
