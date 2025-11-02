// questionOne Dictionary contains the question, answers and which answer is correct, which has been listed as a key-value pair for each.
const questionOne = {
    question : "你是哪__人?", // This key value pair represents the question.
    options : ["你", "国", "名", "我"], // This key value pair represents the options and list of answers.
    answer : "国" // This represents which  is the answer, the key is the name 'answer' and the value is the actual answer.
};

// questionTwo Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionTwo = {
    question : "我是日本人, 你__?", // This key value pair represents the question.
    options : ["美", "呢", "国", "叫"], // This key value pair represents the options and list of answers. 
    answer : "呢" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionThree = {
    question : "我__美国人。", // This key value pair represents the question.
    options : ["朋友", "国", "叫", "是"], // This key value pair represents the options and list of answers. 
    answer : "是" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionFour = {
    question : "你叫___名字？。", // This key value pair represents the question.
    options : ["你", "中国", "什么", "是"], // This key value pair represents the options and list of answers. 
    answer : "什么" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionFive = {
    question : "我__欧文。", // This key value pair represents the question.
    options : ["学生", "国", "叫", "是"], // This key value pair represents the options and list of answers. 
    answer : "叫" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionSix = {
    question : "这是我的中国___。", // This key value pair represents the question.
    options : ["朋友", "国", "那个", "是"], // This key value pair represents the options and list of answers. 
    answer : "朋友" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionSeven = {
    question : "我__王，___王山。", // This key value pair represents the question.
    options : ["你", "国", "green", "姓, 我叫"], // This key value pair represents the options and list of answers. 
    answer : "姓, 我叫" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionEight = {
    question : "我__住留学生楼。", // This key value pair represents the question.
    options : ["也", "国", "green", "是"], // This key value pair represents the options and list of answers. 
    answer : "也" // This represents which index is the answer for the list of answers.
};

// questionThree Dictionary contains the question, answers and which answer is correct,  which has been listed as a key-value pair for each.
const questionNine = {
    question : "你住那个___？", // This key value pair represents the question.
    options : ["你", "国", "房间", "是"], // This key value pair represents the options and list of answers. 
    answer : "房间" // This represents which index is the answer for the list of answers.
};

// List containing list of questions. 
const questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine];

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
            const heading = document.createElement("h1");
            heading.textContent = "Congrats! you have finished the Quiz!";
            heading.style.textAlign = "center";
            layout_element.appendChild(heading);
            heading.style.textAlign = "center";
            heading.style.color = "blue";
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

function colourAnswerBtn(){
    /* This loops through each button and adds an eventlistener (click). If button has correct answer it is coloured green if not then red. It also creates a next button. */
    answers.forEach(btn => {
        btn.addEventListener("click", () => {

            // section can be condensed into a function.
            const selectedAnswer = btn.textContent;
            const correctAnswer = questionList[questionNum].answer;

            if (selectedAnswer === correctAnswer){
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
            };

            btn.style.color = 'black'; // Prevents the text from turning white after changing question.

            disableBtn()

            createBtn();
        });
    });
};


// This function starts the quiz. 
function startQuiz() { 

    // Changes the context of question and answers. 
    changeQuestion();
    
    colourAnswerBtn();

    enableBtn()

};

startQuiz();
