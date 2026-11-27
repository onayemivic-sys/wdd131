// Product information array
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" },
    { id: "uu-1986", name: "Knee Boards" }
];

// Get the product select element from HTML
const productSelect = document.querySelector("#product");

// Create an option for every product
products.forEach((product) => {
    const option = document.createElement("option");

    // Display the product name
    option.textContent = product.name;

    // Use the product ID as its value
    option.value = product.id;

    // Add the option to the select menu
    productSelect.appendChild(option);
});

// Mark a valid form submission for the confirmation page
const reviewForm = document.querySelector("form");

reviewForm.addEventListener("submit", () => {
    sessionStorage.setItem("reviewPending", "true");
});