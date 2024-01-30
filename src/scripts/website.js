import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";

import favIcon from "../assets/favicon.png";

const renderHeader = function () {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantLogo = document.createElement("a");
  restaurantLogo.href = "#";
  restaurantLogo.textContent = "LA CARAVANA";
  restaurantLogo.classList.add("header__logo");

  header.appendChild(restaurantLogo);
  header.appendChild(renderNavigation());

  return header;
};

const renderNavigation = function () {
  const navigation = document.createElement("nav");
  navigation.classList.add("nav");

  const homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";
  homeLink.classList.add("nav__link");
  homeLink.classList.add("nav__link--home");

  const aboutUsLink = document.createElement("a");
  aboutUsLink.href = "#";
  aboutUsLink.textContent = "About Us";
  aboutUsLink.classList.add("nav__link");
  aboutUsLink.classList.add("nav__link--about");

  const menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = "Menu";
  menuLink.classList.add("nav__link");
  menuLink.classList.add("nav__link--menu");

  const contactLink = document.createElement("a");
  contactLink.href = "#";
  contactLink.textContent = "Contact";
  contactLink.classList.add("nav__link");
  contactLink.classList.add("nav__link--contact");

  navigation.appendChild(homeLink);
  navigation.appendChild(aboutUsLink);
  navigation.appendChild(menuLink);
  navigation.appendChild(contactLink);

  return navigation;
};

const renderMain = function (renderSection) {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");
  const section = renderSection();
  mainSection.appendChild(section);

  return mainSection;
};

const renderWebsite = function () {
  const favIconLink = document.createElement("link");

  favIconLink.setAttribute("rel", "icon");
  favIconLink.setAttribute("href", favIcon);

  const head = document.head;

  head.appendChild(favIconLink);

  const body = document.querySelector("body");
  body.appendChild(renderHeader());
  const mainElement = renderMain(loadHome);
  body.appendChild(mainElement);

  const homeLink = document.querySelector(".nav__link--home");
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild(loadHome());
  });

  const aboutLink = document.querySelector(".nav__link--about");
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild(loadAbout());
  });

  const menuLink = document.querySelector(".nav__link--menu");
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild(loadMenu());
  });

  const contactLink = document.querySelector(".nav__link--contact");
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild(loadContact());
  });
};

export default renderWebsite;
