const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temples

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/800%2C/0/default"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/08d5a9e90a0c8347a61d17335775c5e118b33a9a/full/800%2C/0/default"
    },
    {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x360/Adelaide_Australia_Temple-1.jpg"
    }
];
// SELECT THE TEMPLE CONTAINER
const templeContainer = document.querySelector("#temple-container");

// FUNCTION TO DISPLAY TEMPLE CARDS
function displayTemples(templeList) {

    // Clear the container before displaying temples
    templeContainer.innerHTML = "";

    // Loop through each temple in the array
    templeList.forEach((temple) => {

        // Create a new article element
        const card = document.createElement("article");

        // Give the article a CSS class
        card.classList.add("temple-card");

        // Add temple information to the card
        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p><strong>Location:</strong> ${temple.location}</p>

            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} Temple"
                loading="lazy"
                width="400"
                height="250"
            >
        `;

        // Add the card to the temple container
        templeContainer.appendChild(card);

    });
}

// DISPLAY ALL TEMPLES WHEN THE PAGE LOADS
displayTemples(temples);
/* TEMPLE FILTERING */

// Select all navigation filter links
const filterLinks = document.querySelectorAll("[data-filter]");

// Add a click event to each navigation link
filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        // Get the selected filter
        const filter = link.dataset.filter;

        // Filter the temple array
        let filteredTemples = [];

        if (filter === "all") {
            filteredTemples = temples;
        }

        else if (filter === "old") {
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.slice(0, 4));
                return year < 1900;
            });
        }

        else if (filter === "new") {
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.slice(0, 4));
                return year > 2000;
            });
        }

        else if (filter === "large") {
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
        }

        else if (filter === "small") {
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
        }

        // Display the filtered temples
        displayTemples(filteredTemples);

    });

});
/* HAMBURGER MENU */

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

/*footer info*/
// DYNAMIC COPYRIGHT YEAR

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// LAST MODIFIED DATE

document.querySelector("#lastModified").textContent =
    document.lastModified;