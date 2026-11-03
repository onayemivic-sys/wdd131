// HTML ELEMENTS SELECTOR
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// HAMBURGER MENU FUNCTION

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// DYNAMIC COPYRIGHT YEAR

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// LAST MODIFIED DATE

document.querySelector("#lastModified").textContent =
    document.lastModified;