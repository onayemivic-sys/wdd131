//get the last modified date of the html document
const lastModified = new Date(document.lastModified);

//find the footer element where the date will be displayed
const dateElement = document.querySelector('#lastModified');

//Display the formatted date in the footer
dateElement.textContent = lastModified.toLocaleString(undefined, {dateStyle:"long", timeStyle:"short"});