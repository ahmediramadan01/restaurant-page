import pizzaImage from "../assets/pizza.webp";
import instagramIcon from "../assets/instagram.webp";
import facebookIcon from "../assets/facebook.webp";
import whatsappIcon from "../assets/whatsapp.webp";

const renderContact = function () {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact");

    const image = document.createElement("img");
    image.src = pizzaImage;
    image.classList.add("image--pizza");

    const heading = document.createElement("h2");
    heading.classList.add("contact-heading");
    heading.textContent = "LA CARAVANA";

    const socialLinks = document.createElement("ul");
    socialLinks.classList.add("social-links");

    const socialLink1 = document.createElement("a");
    socialLink1.href = "#";

    const icon1 = document.createElement("img");
    icon1.src = instagramIcon;
    icon1.classList.add("contact-icon");

    const socialLink2 = document.createElement("a");
    socialLink2.href = "#";

    const icon2 = document.createElement("img");
    icon2.src = facebookIcon;
    icon2.classList.add("contact-icon");

    const socialLink3 = document.createElement("a");
    socialLink3.href = "#";

    const icon3 = document.createElement("img");
    icon3.src = whatsappIcon;
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

const loadContact = function () {
    const mainSection = document.createElement("main");
    mainSection.classList.add("main");
    mainSection.textContent = "";
    mainSection.appendChild(renderContact());

    return mainSection;
};

export default loadContact;
