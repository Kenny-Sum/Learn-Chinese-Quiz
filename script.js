const questionOne = {
    question : "Is the earth round, flat, square or rectangle?",
    answer : [
        { text: "round", correct: true},
        { text: "flat", correct: false},
        { text: "square", correct:false},
        { text: "rectangle", correct:false}
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
    alert("correct");
    const answer = document.getElementById("next_section");
    answer.textContent = "correct"
});

elementAnswerTwo.addEventListener('click', function() {
    alert("wrong");
    const answer = document.getElementById("next_section");
    answer.textContent = "wrong"
});

elementAnswerThree.addEventListener('click', function() {
    alert("wrong");
    const answer = document.getElementById("next_section");
    answer.textContent = "wrong"
});

elementAnswerFour.addEventListener('click', function() {
    alert("wrong");
    const nextSection = document.getElementById("next_section");
    nextSection.textContent = "wrong"
});
