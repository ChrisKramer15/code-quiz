//Declaring Variables, pulling from Id's
var questions = document.getElementById("question");
var answerOne = document.getElementById("choiceA");
var answerTwo = document.getElementById("choiceB");
var answerThree = document.getElementById("choiceC");
var answerFour = document.getElementById("choiceD");
var scores = document.getElementById("scores");
var questionHolder = document.getElementById("questionContain");
var counterEnd = 0;
var score = 0;
var questionNum = 0;
var counter = 100;

var questions = [
  {
    question: "What language changes webpage styles?",
    answerA: "HTML",
    answerB: "CSS",
    answerC: "ExpressJS",
    answerD: "mongoDB",
    correct: "B",
  },
  {
    question: "Is a for loop the only way to loop through code?",
    answerA: "No idea",
    answerB: "True",
    answerC: "False",
    answerD: "I only use three loops",
    correct: "C",
  },
  {
    question: "Angular and Vue are cool, but what gives a better 'reaction'?",
    answerA: "ReactJS",
    answerB: "Angular?  Vue?",
    answerC: "No idea!  I quit coding!",
    answerD: "Angular 2 is the only way to go",
    correct: "A",
  },
  {
    question:
      "Parameters and Arguments are the same exact thing, just a different name.",
    answerA: "True",
    answerB: "False",
    answerC: "I'm hardware side, no idea.",
    answerD: "I argue with parameters",
    correct: "B",
  },
  {
    question: "What is jQuery?",
    answerA: "A .NET framework",
    answerB: "Styling, like CSS or Bulma",
    answerC: "A ReactJS tool",
    answerD: "A javascript library",
    correct: "D",
  },
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var compareCount = 0;
var interval;

$("#begin-btn").on("click", function () {
  $("#questionContain").removeClass("visibility");

  interval = setInterval(function () {
    counter--;
    if (counter == 0) {
      gameOver();
    }
    $("#time").text("Timer: " + counter);
  }, 1000);
});

function gameOver() {
  clearInterval(interval);
  var initials = prompt("Enter your initials!", "");
  localStorage.setItem(initials, counter);
  $("#timer").html("<h3>Game Over!</h3>");
  $("#questionContain").addClass("visibility");
  $("#scores").html(`<h3>High Scores: ${initials} scored ${counter}</h3>`);
}
function renderQuestion() {
  var q = questions[runningQuestion];
  questionNum++;
  question.innerHTML = "<p>" + q.question + "</p>";
  answerOne.innerHTML = q.answerA;
  answerTwo.innerHTML = q.answerB;
  answerThree.innerHTML = q.answerC;
  answerFour.innerHTML = q.answerD;
}

function checkAnswer(answer) {
  compareCount++;
  if (answer === questions[runningQuestion].correct) {
    score++;
  } else {
    counter -= 10;
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  }
  if (compareCount == questions.length) {
    gameOver();
  }
}
