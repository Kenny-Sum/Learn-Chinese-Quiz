// Create a buttom element.
const buttom_element = document.getElementById("bottom_section");

// Create a new <button> element.
const  button = document.createElement("button");

// Make the button read 'Next'.
button.textContent = "Next";

// Set the button id to nextBtn.
button.id = "nextBtn";

// Append btn to the container button_section.
document.getElementById("bottom_section").appendChild(button);

