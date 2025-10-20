const element = document.getElementById("question_section");
element.textContent = "Is the earth round, flat, square or rectangle?";

const elementAnswerOne = document.getElementById("answerOne");
elementAnswerOne.textContent = "round";

const elementAnswerTwo = document.getElementById("answerTwo");
elementAnswerTwo.textContent = "flat";

const elementAnswerThree = document.getElementById("answerThree");
elementAnswerThree.textContent = "square";

const elementAnswerFour = document.getElementById("answerFour");
elementAnswerFour.textContent = "rectangle";


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
    const answer = document.getElementById("next_section");
    answer.textContent = "wrong"
});