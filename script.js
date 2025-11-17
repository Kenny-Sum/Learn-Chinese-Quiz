import { questionList } from './question.js';

console.log(questionList);

const layout_element = document.getElementById("layout");

// Create a buttom element linking to bottom section ID.
const buttom_element = document.getElementById("bottom_section");

// Create a question element linking to question section ID.
const question_element = document.getElementById("question_section");

// Create answerOne element linking to answerOne ID.
const answerOne_element = document.getElementById("answerOne");

// Create answerTwo element linking to answerOne ID.
const answerTwo_element = document.getElementById("answerTwo");

// Create answerThree element linking to answerOne ID.
const answerThree_element = document.getElementById("answerThree");

// Create answerFour element linking to answerOne ID.
const answerFour_element = document.getElementById("answerFour");

// selects all elements that matches the css selector 'answer'.
const answers = document.querySelectorAll(".answer");

let questionNum = 0; // Sets the question number to 0. 

let score = 0;

// Create button function.
function createBtn() {

    // Creates a button that has the inner text 'Next'.
    const  button = document.createElement("button"); // Create a new <button> element.
    button.textContent = "Next"; // Make the button read 'Next'.
    button.id = "nextBtn";// Set the button id to nextBtn.
    buttom_element.appendChild(button); // Append btn to the container button_section.

    const nextBtn_element = document.getElementById("nextBtn");

    nextBtn_element.addEventListener("click", () => {

        questionNum ++; // next question. 

        if (questionNum >= (questionList.length)) {
            layout_element.innerHTML = ""; // cleans the whole page.

            // Centers the text at the center of the page.
            layout_element.style.display = 'flex';
            layout_element.style.justifyContent = 'center';
            layout_element.style.alignItems = 'center';

            const heading = document.createElement("h1");
            heading.textContent = "Congrats! you have finished the Quiz! Your score is : " + score + "/" + questionList.length;
            heading.style.textAlign = "center";
            layout_element.appendChild(heading);
        };

        // removes colour from all btns.
        answers.forEach(btn => {
            btn.style.backgroundColor = 'white';
        });

        startQuiz();
    });
}

function changeQuestion(){
    // Changes the context of question and answers. 
    question_element.innerHTML = ""; // removes all html element within question_section container.
    const questionHeading = document.createElement("h3"); // create a new <h3> element.
    question_element.appendChild(questionHeading); // appends the heading to the question_element container. 
    questionHeading.textContent = questionList[questionNum].question; // Set the question container to match current question.  

    answerOne_element.textContent = questionList[questionNum].options[0]; // Set the answer One container text to the first answer.
    answerTwo_element.textContent = questionList[questionNum].options[1]; // Set the answer Two container text to the second answer.
    answerThree_element.textContent = questionList[questionNum].options[2]; // Set the answer Three container text to the third answer.
    answerFour_element.textContent = questionList[questionNum].options[3]; // Set the answer Four container text to the fourth answer.

    buttom_element.textContent = "Find the right Answer.";
};

function disableBtn(){
    answers.forEach(btn => {
        btn.disabled = true // Disable each button.
    });
};

function enableBtn(){
    answers.forEach(btn => {
        btn.disabled = false;  // Re-enable each button
        btn.style.backgroundColor = ''; // Reset color
        btn.style.color = '';           // Reset text
    });
};


function handleAnswerClick(btn) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = questionList[questionNum].answer;

    // Reset bottom area
    buttom_element.innerHTML = "";

    if (selectedAnswer === correctAnswer) {
        score ++; // Increases score number by one.
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white'; // Color the text white.
        // Creates a heading showing if the answer is right.
        buttom_element.innerHTML = ""; // removes all html elements within container.
        const heading = document.createElement("h3"); // Create a new <h3> element
        heading.textContent = "Correct!"; // Writes the new heading with text.
        buttom_element.appendChild(heading); // appends the heading to the bottom_element container.
    } else {
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white'; // Color the text white.
        // Creates a heading showing if the answer is wrong.
        buttom_element.innerHTML = ""; // removes all html elements within container.
        const heading = document.createElement("h3"); // Create a new <h3> element
        heading.textContent = "Wrong! The right answer is : " + correctAnswer; // Writes the new heading with text.
        buttom_element.appendChild(heading); // appends the heading to the bottom_element container.
    }

    disableBtn();
    createBtn();
}

function initAnswerListeners(){
    answers.forEach(btn => {
        btn.onclick = () => handleAnswerClick(btn); // replaces addEventListener
    });
}

// This function starts the quiz. 
function startQuiz() { 

    // Changes the context of question and answers. 
    changeQuestion();
    
    initAnswerListeners();

    enableBtn();

};

startQuiz();
