//STATIC WEATHER DATA
const temperature = 8;
const windSpeed = 12;

// DISPLAY WEATHER VALUES
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// CHECK WHETHER WIND CHILL CONDITIONS ARE MET
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A";
}

// DISPLAY CURRENT YEAR
document.querySelector("#current-year").textContent =
    new Date().getFullYear();

// DISPLAY LAST MODIFIED DATE
document.querySelector("#last-modified").textContent =
    document.lastModified;