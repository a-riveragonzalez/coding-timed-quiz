// define variables
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-game-button");
var questionsElement = document.querySelector(".questions");
var answerButton = document.querySelector(".answer-options");

var timer;
var timerCount;

var questionList = {
    "I'm a question yo!" : ["a", "b", "c", 2],
    "I'm 2nd question bud!" : ["a", "b", "c", 0],  
}

console.log(questionList);

//function for timer
function startTimer(){
    timerCount = 10;
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0){
            clearInterval(timer);
        }

    }, 1000);
}

// todo make a function for putting the question in the screen
// ? do I need to add a variable for all the questions?

// function for startQuiz
function startQuiz(){
    startTimer();
}


//set listener to start quiz button
startButton.addEventListener("click", startQuiz);
