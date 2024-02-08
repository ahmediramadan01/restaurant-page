/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about.webp */ "./src/assets/about.webp");

var renderAbout = function renderAbout() {
  var aboutSection = document.createElement("section");
  aboutSection.classList.add("about");
  var aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-div");
  var aboutText = document.createElement("div");
  aboutText.classList.add("about-text");
  var secondaryHeading = document.createElement("h2");
  secondaryHeading.classList.add("secondary-heading");
  secondaryHeading.textContent = "ABOUT US";
  var aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("paragraph--about");
  aboutParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  var readButton = document.createElement("button");
  readButton.classList.add("button");
  readButton.textContent = "Read More";
  var image = document.createElement("img");
  image.src = _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__;
  image.classList.add("image--about");
  aboutText.appendChild(secondaryHeading);
  aboutText.appendChild(aboutParagraph);
  aboutDiv.appendChild(aboutText);
  aboutDiv.appendChild(readButton);
  aboutSection.appendChild(aboutDiv);
  aboutSection.appendChild(image);
  return aboutSection;
};
var loadAbout = function loadAbout() {
  var mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.textContent = "";
  mainSection.appendChild(renderAbout());
  return mainSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pizza_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.webp */ "./src/assets/pizza.webp");
/* harmony import */ var _assets_instagram_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/instagram.webp */ "./src/assets/instagram.webp");
/* harmony import */ var _assets_facebook_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/facebook.webp */ "./src/assets/facebook.webp");
/* harmony import */ var _assets_whatsapp_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/whatsapp.webp */ "./src/assets/whatsapp.webp");




var renderContact = function renderContact() {
  var contactSection = document.createElement("section");
  contactSection.classList.add("contact");
  var image = document.createElement("img");
  image.src = _assets_pizza_webp__WEBPACK_IMPORTED_MODULE_0__;
  image.classList.add("image--pizza");
  var heading = document.createElement("h2");
  heading.classList.add("contact-heading");
  heading.textContent = "LA CARAVANA";
  var socialLinks = document.createElement("ul");
  socialLinks.classList.add("social-links");
  var socialLink1 = document.createElement("a");
  socialLink1.href = "#";
  var icon1 = document.createElement("img");
  icon1.src = _assets_instagram_webp__WEBPACK_IMPORTED_MODULE_1__;
  icon1.classList.add("contact-icon");
  var socialLink2 = document.createElement("a");
  socialLink2.href = "#";
  var icon2 = document.createElement("img");
  icon2.src = _assets_facebook_webp__WEBPACK_IMPORTED_MODULE_2__;
  icon2.classList.add("contact-icon");
  var socialLink3 = document.createElement("a");
  socialLink3.href = "#";
  var icon3 = document.createElement("img");
  icon3.src = _assets_whatsapp_webp__WEBPACK_IMPORTED_MODULE_3__;
  icon3.classList.add("contact-icon");
  socialLink1.appendChild(icon1);
  socialLink2.appendChild(icon2);
  socialLink3.appendChild(icon3);
  socialLinks.appendChild(socialLink1);
  socialLinks.appendChild(socialLink2);
  socialLinks.appendChild(socialLink3);
  contactSection.appendChild(image);
  contactSection.appendChild(heading);
  contactSection.appendChild(socialLinks);
  return contactSection;
};
var loadContact = function loadContact() {
  var mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.textContent = "";
  mainSection.appendChild(renderContact());
  return mainSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pizza_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.webp */ "./src/assets/pizza.webp");

var renderHome = function renderHome() {
  var homeSection = document.createElement("section");
  homeSection.classList.add("home");
  var heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "LA CARAVANA";
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.\n        Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.";
  var image = document.createElement("img");
  image.src = _assets_pizza_webp__WEBPACK_IMPORTED_MODULE_0__;
  image.classList.add("image--pizza");
  homeSection.appendChild(heading);
  homeSection.appendChild(paragraph);
  homeSection.appendChild(image);
  return homeSection;
};
var loadHome = function loadHome() {
  var mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.textContent = "";
  mainSection.appendChild(renderHome());
  return mainSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_menu_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu-1.webp */ "./src/assets/menu-1.webp");
/* harmony import */ var _assets_menu_2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu-2.webp */ "./src/assets/menu-2.webp");


var renderMenu = function renderMenu() {
  var menuSection = document.createElement("section");
  menuSection.classList.add("menu");
  var secondaryHeading = document.createElement("h2");
  secondaryHeading.classList.add("menu-heading");
  secondaryHeading.textContent = "OUR MENU";
  var menuParagraph = document.createElement("p");
  menuParagraph.classList.add("menu-paragraph");
  menuParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  var imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images--menu");
  var image1 = document.createElement("img");
  image1.src = _assets_menu_1_webp__WEBPACK_IMPORTED_MODULE_0__;
  image1.classList.add("image--menu");
  var image2 = document.createElement("img");
  image2.src = _assets_menu_2_webp__WEBPACK_IMPORTED_MODULE_1__;
  image2.classList.add("image--menu");
  var menuButton = document.createElement("button");
  menuButton.classList.add("button");
  menuButton.textContent = "Menu";
  imagesContainer.appendChild(image1);
  imagesContainer.appendChild(image2);
  menuSection.appendChild(secondaryHeading);
  menuSection.appendChild(menuParagraph);
  menuSection.appendChild(imagesContainer);
  menuSection.appendChild(menuButton);
  return menuSection;
};
var loadMenu = function loadMenu() {
  var mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.textContent = "";
  mainSection.appendChild(renderMenu());
  return mainSection;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/scripts/website.js":
/*!********************************!*\
  !*** ./src/scripts/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/scripts/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/scripts/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/scripts/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/scripts/contact.js");
/* harmony import */ var _assets_favicon_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/favicon.webp */ "./src/assets/favicon.webp");





var renderHeader = function renderHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  var restaurantLogo = document.createElement("a");
  restaurantLogo.href = "#";
  restaurantLogo.textContent = "LA CARAVANA";
  restaurantLogo.classList.add("header__logo");
  header.appendChild(restaurantLogo);
  header.appendChild(renderNavigation());
  return header;
};
var renderNavigation = function renderNavigation() {
  var navigation = document.createElement("nav");
  navigation.classList.add("nav");
  var homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";
  homeLink.classList.add("nav__link");
  homeLink.classList.add("nav__link--home");
  var aboutUsLink = document.createElement("a");
  aboutUsLink.href = "#";
  aboutUsLink.textContent = "About Us";
  aboutUsLink.classList.add("nav__link");
  aboutUsLink.classList.add("nav__link--about");
  var menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = "Menu";
  menuLink.classList.add("nav__link");
  menuLink.classList.add("nav__link--menu");
  var contactLink = document.createElement("a");
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
var renderMain = function renderMain(renderSection) {
  var mainSection = document.createElement("main");
  mainSection.classList.add("main");
  var section = renderSection();
  mainSection.appendChild(section);
  return mainSection;
};
var renderWebsite = function renderWebsite() {
  var favIconLink = document.createElement("link");
  favIconLink.setAttribute("rel", "icon");
  favIconLink.setAttribute("href", _assets_favicon_webp__WEBPACK_IMPORTED_MODULE_4__);
  var head = document.head;
  head.appendChild(favIconLink);
  var body = document.querySelector("body");
  body.appendChild(renderHeader());
  var mainElement = renderMain(_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
  body.appendChild(mainElement);
  var homeLink = document.querySelector(".nav__link--home");
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
  });
  var aboutLink = document.querySelector(".nav__link--about");
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])());
  });
  var menuLink = document.querySelector(".nav__link--menu");
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
  });
  var contactLink = document.querySelector(".nav__link--contact");
  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    mainElement.innerHTML = "";
    mainElement.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWebsite);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.webp */ "./src/assets/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&family=Ruda&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Styles */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(39, 39, 39, 0.1) 0.01%,
            rgba(0, 0, 0, 0.13) 13.02%,
            #000 100%
        ),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
}

/* Header */

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #000;
}

.header__logo {
    color: #fff;
    text-align: center;
    font-family: Ruda;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.44px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.nav__link:link,
.nav__link:visited {
    color: #fff;
    text-align: center;
    font-family: Ruda;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;
}

.nav__link:hover,
.nav__link:active {
    border-bottom: 1px solid currentColor;
}

/* Main */
.main {
    flex-grow: 1;
}

/* Home Section */

.home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.heading {
    color: #fff;
    text-align: center;
    font-family: Quattrocento;
    font-size: 7.2rem;
    font-style: normal;
    font-weight: 700;
    border-bottom: 4px solid #f2c94c;
    padding-top: 7rem;
}

.paragraph {
    color: #fff;
    text-align: center;
    font-family: Ruda;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 2.25px;
    max-width: 74.5rem;
    padding-top: 1.5rem;
}

.image--pizza {
    width: 40%;
}

/* About Us Section */

.about {
    display: grid;
    grid-template-columns: repeat(2, 47.5rem);
    gap: 26rem;
    justify-items: center;
    justify-content: center;
    padding: 6.5rem;
}

.about-div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.about-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}

.secondary-heading {
    color: #fff;
    font-family: Quattrocento;
    font-size: 6rem;
    font-style: normal;
    font-weight: 400;
    border-bottom: 4px solid #f2c94c;
    margin-bottom: 2.5rem;
}

.paragraph--about {
    color: #fff;
    font-family: Ruda;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 160% */
    letter-spacing: 2.25px;
}

.button {
    color: #f2c94c;
    text-align: center;
    font-family: Ruda;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    border: 2px solid #f2c94c;
    padding: 1rem;
    transition: all 0.5s;
}

.button:hover {
    color: #000;
    background-color: #f2c94c;
}

.image--about {
    width: 100%;
}

/* Menu Section */

.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6.5rem 6.5rem 2.5rem 6.5rem;
}

.menu-heading {
    color: #fff;
    text-align: center;
    font-family: Quattrocento;
    font-size: 6rem;
    font-style: normal;
    font-weight: 400;
    border-bottom: 4px solid #f2c94c;
    margin-bottom: 2.5rem;
}

.menu-paragraph {
    color: #fff;
    text-align: center;
    font-family: Ruda;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 160% */
    letter-spacing: 2.25px;
    max-width: 1198px;
    margin-bottom: 2.5rem;
}

.images--menu {
    display: grid;
    grid-template-columns: repeat(2, 57.5fr);
    gap: 2.6rem;
    margin-bottom: 3.7rem;
}

.image--menu {
    max-height: 35.6rem;
    width: 576px;
}

/* Heading */

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem;
}

.contact-heading {
    color: #fff;
    text-align: center;
    font-family: Quattrocento;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    border-bottom: 4px solid #f2c94c;
    margin-bottom: 4rem;
}

.icons {
    display: flex;
}

.social-links {
    display: flex;
    align-items: center;
}

.contact-icon {
    width: 6rem;
    height: auto;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General Styles */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&family=Ruda&display=swap\");\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background: linear-gradient(\n            180deg,\n            rgba(0, 0, 0, 0) 0%,\n            rgba(39, 39, 39, 0.1) 0.01%,\n            rgba(0, 0, 0, 0.13) 13.02%,\n            #000 100%\n        ),\n        url(\"../assets/background.webp\");\n}\n\nul {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\nbutton {\n    cursor: pointer;\n    background: none;\n    border: none;\n    font: inherit;\n}\n\n/* Header */\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2rem;\n    background-color: #000;\n}\n\n.header__logo {\n    color: #fff;\n    text-align: center;\n    font-family: Ruda;\n    font-size: 2.4rem;\n    font-style: normal;\n    font-weight: 400;\n    letter-spacing: 1.44px;\n}\n\n.nav {\n    display: flex;\n    align-items: center;\n    gap: 3rem;\n}\n\n.nav__link:link,\n.nav__link:visited {\n    color: #fff;\n    text-align: center;\n    font-family: Ruda;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    border-bottom: 1px solid transparent;\n    transition: all 0.3s;\n}\n\n.nav__link:hover,\n.nav__link:active {\n    border-bottom: 1px solid currentColor;\n}\n\n/* Main */\n.main {\n    flex-grow: 1;\n}\n\n/* Home Section */\n\n.home {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.heading {\n    color: #fff;\n    text-align: center;\n    font-family: Quattrocento;\n    font-size: 7.2rem;\n    font-style: normal;\n    font-weight: 700;\n    border-bottom: 4px solid #f2c94c;\n    padding-top: 7rem;\n}\n\n.paragraph {\n    color: #fff;\n    text-align: center;\n    font-family: Ruda;\n    font-size: 2.5rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px;\n    letter-spacing: 2.25px;\n    max-width: 74.5rem;\n    padding-top: 1.5rem;\n}\n\n.image--pizza {\n    width: 40%;\n}\n\n/* About Us Section */\n\n.about {\n    display: grid;\n    grid-template-columns: repeat(2, 47.5rem);\n    gap: 26rem;\n    justify-items: center;\n    justify-content: center;\n    padding: 6.5rem;\n}\n\n.about-div {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n}\n\n.about-text {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n}\n\n.secondary-heading {\n    color: #fff;\n    font-family: Quattrocento;\n    font-size: 6rem;\n    font-style: normal;\n    font-weight: 400;\n    border-bottom: 4px solid #f2c94c;\n    margin-bottom: 2.5rem;\n}\n\n.paragraph--about {\n    color: #fff;\n    font-family: Ruda;\n    font-size: 25px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px; /* 160% */\n    letter-spacing: 2.25px;\n}\n\n.button {\n    color: #f2c94c;\n    text-align: center;\n    font-family: Ruda;\n    font-size: 17px;\n    font-style: normal;\n    font-weight: 700;\n    border: 2px solid #f2c94c;\n    padding: 1rem;\n    transition: all 0.5s;\n}\n\n.button:hover {\n    color: #000;\n    background-color: #f2c94c;\n}\n\n.image--about {\n    width: 100%;\n}\n\n/* Menu Section */\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 6.5rem 6.5rem 2.5rem 6.5rem;\n}\n\n.menu-heading {\n    color: #fff;\n    text-align: center;\n    font-family: Quattrocento;\n    font-size: 6rem;\n    font-style: normal;\n    font-weight: 400;\n    border-bottom: 4px solid #f2c94c;\n    margin-bottom: 2.5rem;\n}\n\n.menu-paragraph {\n    color: #fff;\n    text-align: center;\n    font-family: Ruda;\n    font-size: 2.5rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px; /* 160% */\n    letter-spacing: 2.25px;\n    max-width: 1198px;\n    margin-bottom: 2.5rem;\n}\n\n.images--menu {\n    display: grid;\n    grid-template-columns: repeat(2, 57.5fr);\n    gap: 2.6rem;\n    margin-bottom: 3.7rem;\n}\n\n.image--menu {\n    max-height: 35.6rem;\n    width: 576px;\n}\n\n/* Heading */\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 7rem;\n}\n\n.contact-heading {\n    color: #fff;\n    text-align: center;\n    font-family: Quattrocento;\n    font-size: 72px;\n    font-style: normal;\n    font-weight: 700;\n    border-bottom: 4px solid #f2c94c;\n    margin-bottom: 4rem;\n}\n\n.icons {\n    display: flex;\n}\n\n.social-links {\n    display: flex;\n    align-items: center;\n}\n\n.contact-icon {\n    width: 6rem;\n    height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/about.webp":
/*!*******************************!*\
  !*** ./src/assets/about.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about.webp";

/***/ }),

/***/ "./src/assets/background.webp":
/*!************************************!*\
  !*** ./src/assets/background.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.webp";

/***/ }),

/***/ "./src/assets/facebook.webp":
/*!**********************************!*\
  !*** ./src/assets/facebook.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook.webp";

/***/ }),

/***/ "./src/assets/favicon.webp":
/*!*********************************!*\
  !*** ./src/assets/favicon.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon.webp";

/***/ }),

/***/ "./src/assets/instagram.webp":
/*!***********************************!*\
  !*** ./src/assets/instagram.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "instagram.webp";

/***/ }),

/***/ "./src/assets/menu-1.webp":
/*!********************************!*\
  !*** ./src/assets/menu-1.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-1.webp";

/***/ }),

/***/ "./src/assets/menu-2.webp":
/*!********************************!*\
  !*** ./src/assets/menu-2.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu-2.webp";

/***/ }),

/***/ "./src/assets/pizza.webp":
/*!*******************************!*\
  !*** ./src/assets/pizza.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza.webp";

/***/ }),

/***/ "./src/assets/whatsapp.webp":
/*!**********************************!*\
  !*** ./src/assets/whatsapp.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "whatsapp.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/scripts/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map