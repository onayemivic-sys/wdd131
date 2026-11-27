const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Get the product select element
const productSelect = document.querySelector("#product");

// Loop through the products array
products.forEach((product) => {
    const option = document.createElement("option");

    // Display the product name
    option.textContent = product.name;

    // Set the product ID as the option value
    option.value = product.id;

    // Add the option to the dropdown
    productSelect.appendChild(option);
});

// Track form submission
const reviewForm = document.querySelector("form");

reviewForm.addEventListener("submit", () => {
    sessionStorage.setItem("reviewPending", "true");
});
//display last mod date
document.querySelector("#lastModified").textContent = document.lastModified;