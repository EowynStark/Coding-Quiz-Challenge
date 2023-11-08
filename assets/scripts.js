var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".countdown-timer");

var question1 = "Primitive types of data include: undefined, numbers, boolean, string. True or False?";
var question2 = "An array is a collection of manta rays. True or False?";
var question3 = "'array.pop()' removes an item from an array. True or False?";
var question4 = "You can call a function by using 'console.log(functionName)'. True or False?";
var answer1 = "True";
var answer2 = "False";
var answer3 = "True";
var answer4 = "False";


// listen for a click of the start button to begin quiz
startButton.addEventListener("click", startQuiz, timedQuiz);

// create a function to render the quiz
function startQuiz(){
   
   
}    

// create a function to render a quiz timer (interval)
    // timer subtracts on a wrong answer
    // timer activates game over when time runs out or questions exhausted
function timedQuiz (){
    var timeLeft = 1000 ;
    var timeCountdown = setInterval(function(){
        if (timeLeft > 1) {
            timerElement.textContent = timeleft + " seconds left";
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

// create a function to render the high scores (local storage get)

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