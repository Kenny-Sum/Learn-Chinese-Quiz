const questionOne = {
    question : "Is the earth round, flat, square or rectangle?",
    answer : [
        { text: "round", correct: true},
        { text: "flat", correct: false},
        { text: "square", correct:false},
        { text: "rectangle", correct:false}
    ]
};

const questionTwo = {
    question : "What is the colour blue?",
    answer : [
        { text: "green", correct: false},
        { text: "yellow", correct: false},
        { text: "red", correct:false},
        { text: "blue", correct:true}
    ]
};

const element = document.getElementById("question_section");
element.textContent = questionOne.question;

const elementAnswerOne = document.getElementById("answerOne");
elementAnswerOne.textContent = questionOne.answer[0].text;

const elementAnswerTwo = document.getElementById("answerTwo");
elementAnswerTwo.textContent = questionOne.answer[1].text;

const elementAnswerThree = document.getElementById("answerThree");
elementAnswerThree.textContent = questionOne.answer[2].text;

const elementAnswerFour = document.getElementById("answerFour");
elementAnswerFour.textContent = questionOne.answer[3].text;


elementAnswerOne.addEventListener('click', function() {
    const answer = document.getElementById("next_section");
    if (questionOne.answer[0].correct === true) {
        alert("true")
        answer.textContent = "true"
    }
});

elementAnswerTwo.addEventListener('click', function() {
    const answer = document.getElementById("next_section");
    if (questionOne.answer[1].correct === false) {
        alert("false")
        answer.textContent = "false"
    }
});

elementAnswerThree.addEventListener('click', function() {
    const answer = document.getElementById("next_section");
    if (questionOne.answer[2].correct === false) {
        alert("false")
        answer.textContent = "false"
    }
});

elementAnswerFour.addEventListener('click', function() {
    const answer = document.getElementById("next_section");
    if (questionOne.answer[3].correct === false) {
        alert("false")
        answer.textContent = "false"
    }
});
