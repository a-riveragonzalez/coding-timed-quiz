// define variables
var timerElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-game-button");
var startMenu = document.querySelector(".start-container");
var questionPrompt = document.querySelector(".q-prompt");
var optionA = document.querySelector("#A");
var optionB = document.querySelector("#B");
var optionC = document.querySelector("#C");
var optionD = document.querySelector("#D");

var timer;
var timerCount;

// todo loop . conditional if button click is the right one, else take points off clock
// holds the questions and answers
var questionList = [
  {
    questionText:"The condition in an if/else statement is enclosed with ______.",
    questionOptionA: "quotes",
    questionOptionB: "curly brackets",
    questionOptionC:"parenthesis",
    questionOptionD: "square brackets",
    questionAnswer: "C",
  },
  {
    questionText: "Commonly used data types DO NOT include:",
    questionOptionA: "strings",
    questionOptionB: "booleans",
    questionOptionC:"alerts",
    questionOptionD: "numbers",
    questionAnswer: "C",
  },
  {
    questionText:"String values must be enclosed within ________ when being assigned to variables.",
    questionOptionA: "commas",
    questionOptionB: "curly brackets",
    questionOptionC:"quotes",
    questionOptionD: "parenthesis", 
    questionAnswer: "C",
  },
];

var currentQuestion = 0; //starting point for our displayQuestions
var lastQuestion = questionList.length - 1; 

// function to make questions appear on screen
function displayQuiz() {
  questionPrompt.textContent=questionList[currentQuestion].questionText;
  console.log(questionPrompt);
  optionA.textContent=questionList[currentQuestion].questionOptionA;
  optionB.textContent=questionList[currentQuestion].questionOptionB;
  optionC.textContent=questionList[currentQuestion].questionOptionC;
  optionD.textContent=questionList[currentQuestion].questionOptionD;

  document.body.appendChild(questionPrompt);
  document.body.appendChild(optionA);
  document.body.appendChild(optionB);
  document.body.appendChild(optionC);
  document.body.appendChild(optionD);
}

// function so that starting menu disappears upon start click
function startMenuDisappear() {
  startMenu.setAttribute("style", "display: none");
}

//function for timer
function startTimer() {
  timerCount = 10;
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}


function checkAnswer() {
  var stateA = optionA.getAttribute("data-state");
  var stateB = optionA.getAttribute("data-state");
  var stateC = optionA.getAttribute("data-state");
  var stateD = optionA.getAttribute("data-state");

  console.log(stateA);
  console.log(quizAnswer);
}


// todo function after quiz: display win or lost screen. send to high scores

// function for startQuiz
function startQuiz() {
  startTimer();
  startMenuDisappear();
  displayQuiz();
}

//set listener to start quiz button
startButton.addEventListener("click", startQuiz);
