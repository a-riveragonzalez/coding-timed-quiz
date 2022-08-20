// define variables
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-game-button");

var timer;
var timerCount;

//function for timer (interval)
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

// function for startQuiz
function startQuiz(){
    startTimer();
}


//set listener to start quiz button
startButton.addEventListener("click", startQuiz);
