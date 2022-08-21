// define variables
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-game-button");
var startMenu = document.querySelector(".start-container");


var timer;
var timerCount;

// todo loop . display questtext. add buttons, conditional if button click is the right one, else take points off clock
// holds the questions and answers 
var questionList = [
    {
        questionText: "The condition in an if/else statement is enclosed with ______.", 
        questionOptions: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        questionAnswer: "3. parenthesis"

    },
    {
        questionText: "Commonly used data types DO NOT include:", 
        questionOptions: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        questionAnswer: "3. alerts"

    },
    {
        questionText: "String values must be enclosed within ________ when being assigned to variables.", 
        questionOptions: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        questionAnswer: "3. alerts"

    }
]

// function so that starting menu disappears upon start click
function startMenuDisappear(){
    startMenu.setAttribute("style", "display: none");
}

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

// function to make questions appear on screen
function displayQuiz(){
    
}


// function for startQuiz
function startQuiz(){
    startTimer();
    startMenuDisappear();
    displayQuiz();
}


//set listener to start quiz button
startButton.addEventListener("click", startQuiz);
