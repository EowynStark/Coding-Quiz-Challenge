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

// begins the quiz and timer
function startQuiz(){
   timedQuiz();
   question1();
}    
// load first question
function question1(){
    var question1 = questions[questionsIndex];
    questionDisplay.textContent = question1.question;

    question1.answers.forEach((choice) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = choice;
        answerButton.addEventListener("click", () => checkAnswer(choice));
        questionDisplay.appendChild(answerButton);
    });
}
//  checks answer (detract from timer if wrong)
function checkAnswer(userChoice) {
    var question1 = questions[questionsIndex];
    
    if (userChoice === question1.correctAnswer){
        score += 10;
        // question2();
    }else {
        timeLeft-= 30;
    }
    question2();
}

// moves on to next question in list
function question2(){
    questionsIndex++;
    
    if (questionsIndex < questions.length) {
        question1();
    } else {
        timerElement.textContent = "GAME OVER";
        clearInterval(timedQuiz);
        scoreBoard();
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
        }
    },1000);
}   
// intended to retain the quiz scores (local storage set) and collect user initials
function scoreBoard(){
    if (timeLeft == 0){
        scoringForm = document.createElement("form")
        scoringForm.id = "scoringForm";    
        initialScore = document.createElement("input");
        initialScore.type= "text";
        initialScore.name= "name";
        scoreBoardElement.appendChild(scoringForm);
        scoringForm.appendChild(initialScore);
        scoreElement.textContent = score;
        localStorage.setItem('scores', JSON.stringify(score + initialScore.value));
    }
    pastScores();
}

// intended to render the high scores (local storage get)
function pastScores(){
    if (initialScore){
        initialScore.value = JSON.parse(localStorage.getItem('scores'));
        scoringForm = document.createElement("form")
        scoringForm.id = "scoringForm";    
        initialScore = document.createElement("input");
        initialScore.type= "text";
        initialScore.name= "name";
        scoreBoardElement.appendChild(scoringForm);
        scoringForm.appendChild(initialScore);
    };
}
