import aboutImage from "../assets/about.webp";

const renderAbout = function () {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div");

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text");

    const secondaryHeading = document.createElement("h2");
    secondaryHeading.classList.add("secondary-heading");
    secondaryHeading.textContent = "ABOUT US";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.classList.add("paragraph--about");
    aboutParagraph.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

    const readButton = document.createElement("button");
    readButton.classList.add("button");
    readButton.textContent = "Read More";

    const image = document.createElement("img");
    image.src = aboutImage;
    image.classList.add("image--about");

    aboutText.appendChild(secondaryHeading);
    aboutText.appendChild(aboutParagraph);

    aboutDiv.appendChild(aboutText);
    aboutDiv.appendChild(readButton);

    aboutSection.appendChild(aboutDiv);
    aboutSection.appendChild(image);

    return aboutSection;
};

const loadAbout = function () {
    const mainSection = document.createElement("main");
    mainSection.classList.add("main");
    mainSection.textContent = "";
    mainSection.appendChild(renderAbout());

    return mainSection;
};

export default loadAbout;
