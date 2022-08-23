// define variables
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-game-button");
var backButton = document.querySelector("#go-back-button");
var startMenu = document.querySelector(".start-container");
var quizMenu = document.querySelector(".quiz-game");
var highScoreMenu = document.querySelector(".high-score-chart");
var questionPrompt = document.querySelector(".q-prompt");
var optionA = document.querySelector("#A");
var optionB = document.querySelector("#B");
var optionC = document.querySelector("#C");
var optionD = document.querySelector("#D");

var timer;
var timerCount;
var quizAnswer;

// todo loop . conditional if button click is the right one, else take points off clock
// holds the questions and answers
var questionList = [
  {
    questionText:"The condition in an if/else statement is enclosed with ______.",
    questionOptionA: "quotes",
    questionOptionB: "curly brackets",
    questionOptionC:"parenthesis",
    questionOptionD: "square brackets",
    questionAnswer: "parenthesis",
  },
  {
    questionText: "Commonly used data types DO NOT include:",
    questionOptionA: "strings",
    questionOptionB: "booleans",
    questionOptionC:"alerts",
    questionOptionD: "numbers",
    questionAnswer: "alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store:",
    questionOptionA: "strings and numbers",
    questionOptionB: "other arrays",
    questionOptionC:"booleans",
    questionOptionD: "All the above",
    questionAnswer: "All the above",
  },
  {
    questionText:"String values must be enclosed within ________ when being assigned to variables.",
    questionOptionA: "commas",
    questionOptionB: "curly brackets",
    questionOptionC:"quotes",
    questionOptionD: "parenthesis", 
    questionAnswer: "quotes",
  },
  {
    questionText:"A very useful tool used during development and debugging for printing content to the debugger is:",
    questionOptionA: "JavaScript",
    questionOptionB: "terminal/bash",
    questionOptionC:"for-loops",
    questionOptionD: "console.log", 
    questionAnswer: "console.log",
  }
];

var currentQuestion = 0; //starting point for our displayQuestions
var lastQuestion = questionList.length - 1; 

// function to make questions appear on screen
function displayQuiz() {
  quizMenu.setAttribute("style", "display: block");

  questionPrompt.textContent=questionList[currentQuestion].questionText;
  optionA.textContent=questionList[currentQuestion].questionOptionA;
  optionB.textContent=questionList[currentQuestion].questionOptionB;
  optionC.textContent=questionList[currentQuestion].questionOptionC;
  optionD.textContent=questionList[currentQuestion].questionOptionD;
}

function displayNextQuestion() {
  if (currentQuestion < lastQuestion){
    currentQuestion++;
    displayQuiz();
  }
}

// function so that starting menu disappears upon start click
function startMenuDisappear() {
  startMenu.setAttribute("style", "display: none");
}

//function to exit the high score menu
function goBack() {

}

//function for timer
function startTimer() {
  timerCount = 60;
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      timerCount=0;
      clearInterval(timer);
    }
  }, 1000);
}


function checkAnswer(event) {
  quizAnswer = questionList[currentQuestion].questionAnswer;

  if (event.target.matches("button") ){

    if (event.target.textContent === quizAnswer){
      displayNextQuestion();
    } else {
      timerCount = timerCount - 10;
      displayNextQuestion();
    }

  }


}


// todo function after quiz: display win or lost screen. send to high scores

// function for startQuiz
function startQuiz() {
  startTimer();
  startMenuDisappear();
  displayQuiz();
  quizMenu.addEventListener("click", checkAnswer);
}

//set listener to start quiz button
startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", goBack);