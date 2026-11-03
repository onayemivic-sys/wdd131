// Get references to the input, button, and list elements.
const input = document.querySelector("#chapter");
const addButton = document.querySelector("#add");
const chapterList = document.querySelector("#list");

// Demonstration entry: this shows how to create and append a list item.
// It runs when the page loads; click-event behavior comes in the next activity.
const listItem = document.createElement("li");
listItem.textContent = "Alma 5";

const deleteButton = document.createElement("button");
deleteButton.type = "button";
deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", "Remove Alma 5");

listItem.append(deleteButton);
chapterList.append(listItem);