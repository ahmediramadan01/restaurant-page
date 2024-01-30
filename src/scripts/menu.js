import menuImage1 from "../assets/menu-1.jpeg";
import menuImage2 from "../assets/menu-2.jpeg";

const renderMenu = function () {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu");

  const secondaryHeading = document.createElement("h2");
  secondaryHeading.classList.add("menu-heading");
  secondaryHeading.textContent = "OUR MENU";

  const menuParagraph = document.createElement("p");
  menuParagraph.classList.add("menu-paragraph");
  menuParagraph.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images--menu");

  const image1 = document.createElement("img");
  image1.src = menuImage1;
  image1.classList.add("image--menu");

  const image2 = document.createElement("img");
  image2.src = menuImage2;
  image2.classList.add("image--menu");

  const menuButton = document.createElement("button");
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

const loadMenu = function () {
  const mainSection = document.createElement("main");
  mainSection.classList.add("main");
  mainSection.textContent = "";
  mainSection.appendChild(renderMenu());

  return mainSection;
};

export default loadMenu;
