// Create a buttom element.
    const buttom_element = document.getElementById("bottom_section");

// Create button function.
function createBtn() {
    // Creates a heading showing if the answer is right or wrong.
    buttom_element.innerHTML = ""; // removes all html elements within container.
    const heading = document.createElement("h3"); // Create a new <h3> element
    heading.textContent = "Correct or Wrong"; // Writes the new heading with text.
    buttom_element.appendChild(heading); // appends the heading to the bottom_element container. 

    // Creates a button that has the inner text 'Next'.
    const  button = document.createElement("button"); // Create a new <button> element.
    button.textContent = "Next"; // Make the button read 'Next'.
    button.id = "nextBtn";// Set the button id to nextBtn.
    buttom_element.appendChild(button); // Append btn to the container button_section.
}

// selects all elements that matches the css selector 'answer'.
const answers = document.querySelectorAll(".answer");

// Selects all element that contains the class name 'answer'.
answers.forEach((answer) => {
    answer.addEventListener("click", createBtn); // adds a create btn element.
});


