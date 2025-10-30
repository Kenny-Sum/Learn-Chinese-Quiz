// questionOne Dictionary contains the question, answers and which answer is correct, which has been listed as a key-value pair for each.
const questionOne = {
    question : "what is 2 + 2? ", // This key value pair represents the question.
    options : ["4", "5", "7", "9"], // This key value pair represents the options and list of answers.
    answer : "4" // This represents which  is the answer, the key is the name 'answer' and the value is the actual answer.
};

// questionTwo Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionTwo = {
    question : "When you mix colour yellow and blue, what do you get? ", // This key value pair represents the question.
    options : ["pink", "black", "green", "white"], // This key value pair represents the options and list of answers. 
    answer : "green" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionThree = {
    question : "你是哪__人? ", // This key value pair represents the question.
    options : ["你", "国", "green", "white"], // This key value pair represents the options and list of answers. 
    answer : "国" // This represents which index is the answer for the list of answers.
};

// List containing list of questions. 
const questionList = [questionOne, questionTwo, questionThree];

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

        // removes colour from all btns.
        answers.forEach(btn => {
            btn.style.backgroundColor = 'white';
        });

        startQuiz();
    });
}


// This function starts the quiz. 
function startQuiz() { 

    question_element.innerHTML = ""; // removes all html element within question_section container.
    const questionHeading = document.createElement("h3"); // create a new <h3> element.
    question_element.appendChild(questionHeading); // appends the heading to the question_element container. 
    questionHeading.textContent = questionList[questionNum].question; // Set the question container to match current question.  

    answerOne_element.textContent = questionList[questionNum].options[0]; // Set the answer One container text to the first answer.
    answerTwo_element.textContent = questionList[questionNum].options[1]; // Set the answer Two container text to the second answer.
    answerThree_element.textContent = questionList[questionNum].options[2]; // Set the answer Three container text to the third answer.
    answerFour_element.textContent = questionList[questionNum].options[3]; // Set the answer Four container text to the fourth answer.

    buttom_element.textContent = "Find the right Answer.";
    

    /* This loops through each button and adds an eventlistener (click). If button has correct answer it is coloured green if not then red. It also creates a next button. */
    answers.forEach(btn => {
        btn.addEventListener("click", () => {

            createBtn();
            // section can be condensed into a function.
            const selectedAnswer = btn.textContent;
            const correctAnswer = questionList[questionNum].answer;

            if (selectedAnswer === correctAnswer){
                btn.style.backgroundColor = 'green';

                // Creates a heading showing if the answer is right.
                buttom_element.innerHTML = ""; // removes all html elements within container.
                const heading = document.createElement("h3"); // Create a new <h3> element
                heading.textContent = "Correct!"; // Writes the new heading with text.
                buttom_element.appendChild(heading); // appends the heading to the bottom_element container.

                createBtn();
                
            } else {
                btn.style.backgroundColor = 'red';

                // Creates a heading showing if the answer is wrong.
                buttom_element.innerHTML = ""; // removes all html elements within container.
                const heading = document.createElement("h3"); // Create a new <h3> element
                heading.textContent = "Wrong!"; // Writes the new heading with text.
                buttom_element.appendChild(heading); // appends the heading to the bottom_element container.

                createBtn();
            };
            // condense.
        });
    });



}

startQuiz();
