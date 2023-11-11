var startButton = document.querySelector(".start-button");
var timerElement = document.getElementById('countdown-timer');
var questionDisplay = document.getElementById('quiz-container');
var answerDisplay = document.getElementById('answer-container');
var scoreElement = document.getElementById('current-score');
var scoreBoardElement = document.getElementById('past-score');


var timeLeft = 120;
var timeCountdown;
var score = 0;

var questionsIndex= 0;
var questions = [
    {
        question: "From the following which is NOT a Primitive Data type?",
        answers: ["boolean", "number", "string", "array"],
        correctAnswer: "array",
    },
    {
        question: "What do you call a variable that includes a list of items as its value?",
        answers: ["array", "list", "function", "console"],
        correctAnswer: "array",
    },
    {
        question: "What method do you use to remove a specific list item from an array?",
        answers: [".flat()", ".push()", ".pop()", ".concat()"],
        correctAnswer: ".pop()",
    },
    {
        question: "What data type returns only 'true' or 'false' as a value?",
        answers: ["number", "boolean", "string", "undefined"],
        correctAnswer: "boolean",
    },
];

// listen for a click of the start button to begin quiz
startButton.addEventListener("click", startQuiz);

// function to begin the quiz and timer
function startQuiz(){
   timedQuiz();
   question1();
}    
// function to load first question
function question1(){
    var question1 = questions[questionsIndex];
    questionDisplay.textContent = question1.question;

    question1.answers.forEach((choice) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = question1.answers;
        answerButton.addEventListener("click", () => checkAnswer(choice));
        questionDisplay.appendChild(answerButton);
    });
}
// create a function to check answer (detract from timer if wrong)
function checkAnswer(userChoice) {
    var question1 = questions[questionsIndex];
    
    if (userChoice === question1.correctAnswer){
        score++;
        scoreBoard();
    }else {
        timeLeft--;
    }
    question2();
}

// function moves onto next question in list
function question2(){
    questionsIndex++;
    
    if (questionsIndex < questions.length) {
        question1();
    } else {
        clearInterval(timedQuiz);
        timerElement.textContent = "GAME OVER";
    }
}

// rendering a quiz timer
function timedQuiz (){
    timeCountdown = setInterval(function(){
        if (timeLeft > 1) {
            timerElement.textContent = timeLeft + " seconds left";
            timeLeft--;
        } else if (timeLeft === 1){
            timerElement.textContent = timeLeft + " second left";
            timeLeft--;
        } else {
            timerElement.textContent = "GAME OVER";
            clearInterval(timedQuiz);
            // insert function call for scoreboard
        }
    },1000);
}   
// create a function to retain the quiz scores (local storage set)
function scoreBoard(){
    scoreElement.textContent = score;
    localStorage.setItem(score)
}

// create a function to render the high scores (local storage get)
function pastScores(){
    scoreBoardElement.textContent = localStorage.getItem(score)
}
/* remove before publishing
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score 
remove before publishing */