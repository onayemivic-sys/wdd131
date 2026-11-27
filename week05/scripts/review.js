// Get the submitted information from the URL
const params = new URLSearchParams(window.location.search);

// Get the review details
const productId = params.get("product");
const rating = params.get("rating");
const installDate = params.get("installDate");
const userName = params.get("userName");
const features = params.getAll("features");

// Product information
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" },
    { id: "uu-1986", name: "Knee Boards" }
];

// Find the selected product
const selectedProduct = products.find(
    (product) => product.id === productId
);

// Display the submitted information
document.querySelector("#productName").textContent =
    selectedProduct ? selectedProduct.name : "Not provided";

document.querySelector("#rating").textContent =
    rating ? `${rating} out of 5 stars` : "Not provided";

document.querySelector("#installDate").textContent =
    installDate || "Not provided";

document.querySelector("#features").textContent =
    features.length > 0 ? features.join(", ") : "None selected";

document.querySelector("#userName").textContent =
    userName || "Anonymous";

// Check that a valid form submission was made
const isValidSubmission =
    productId &&
    selectedProduct &&
    rating &&
    installDate &&
    sessionStorage.getItem("reviewPending") === "true";

// Update the review counter only after a form submission
if (isValidSubmission) {

    // Get the existing review count
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Increase the count by one
    reviewCount++;

    // Save the new count
    localStorage.setItem("reviewCount", reviewCount);

    // Clear the pending submission marker
    sessionStorage.removeItem("reviewPending");
}

// Display the review count
const totalReviews = Number(localStorage.getItem("reviewCount")) || 0;

document.querySelector("#reviewCount").textContent = totalReviews;

//display last mod date
document.querySelector("#lastModified").textContent = document.lastModified;