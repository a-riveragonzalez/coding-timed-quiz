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
    questionText:
      "The condition in an if/else statement is enclosed with ______.",
    questionOptions: 
      ["A. quotes","B. curly brackets","C. parenthesis","D. square brackets"],
    questionAnswer: "C",
  },
  {
    questionText: 
      "Commonly used data types DO NOT include:",
    questionOptions: 
      ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
    questionAnswer: "C",
  },
  {
    questionText:
      "String values must be enclosed within ________ when being assigned to variables.",
    questionOptions: 
      ["A. commas","B. curly brackets","C. quotes","D. parenthesis"],
    questionAnswer: "C",
  },
];

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

function compareAnswer() {
  console.log("i'm comparing answers")
  console.log(optionA);


}

// function to make questions appear on screen
function displayQuiz() {
  var quizQuestion = questionPrompt;
  var quizOption0 = optionA;
  var quizOption1 = optionB;
  var quizOption2 = optionC;
  var quizOption3 = optionD;
  var quizAnswer;
  
  
  for (i = 0; i < questionList.length; i++) {
    quizAnswer = questionList[i].questionAnswer

    quizQuestion.textContent = questionList[i].questionText;
    quizOption0.textContent = questionList[i].questionOptions[0];
    quizOption1.textContent = questionList[i].questionOptions[1];
    quizOption2.textContent = questionList[i].questionOptions[2];
    quizOption3.textContent = questionList[i].questionOptions[3];

    quizOption0.addEventListener("click", compareAnswer);
    quizOption1.addEventListener("click", compareAnswer);
    quizOption2.addEventListener("click", compareAnswer);
    quizOption3.addEventListener("click", compareAnswer);

    // todo make event listener to buttons (how can i make them listen to all of them?)
    compareAnswer();
    // todo if button pressed is = to quiz answer, then correct(next question)
    // todo else it is wrong (next question)
  }

  // ?lets check if this works gah 

  document.body.appendChild(quizQuestion);
  document.body.appendChild(quizOption0);
  document.body.appendChild(quizOption1);
  document.body.appendChild(quizOption2);
  document.body.appendChild(quizOption3);
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
