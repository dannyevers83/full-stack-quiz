// Question data
const questions = [
  {
    text: "What controls a webpage's appearance?",
    answers: ["HTML", "CSS", "PostgreSQL"],
    correctIndex: 1,
  },
  {
    text: "Where does an Express backend run?",
    answers: ["Inside CSS", "Inside the database", "On the server"],
    correctIndex: 2,
  },
  {
    text: "What does a database do?",
    answers: ["Style buttons", "Stores and retrieves data", "Displays HTML"],
    correctIndex: 1,
  },
  {
    text: "What does an API allow the frontend to do?",
    answers: [
      "Change the screen’s brightness",
      "Communicate with the backend",
      "Install a browser",
    ],
    correctIndex: 1,
  },
];

// Page elements
const progressElement = document.querySelector("#progress");
const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const feedbackElement = document.querySelector("#feedback");
const nextButton = document.querySelector("#next");
const restartButton = document.querySelector("#restart");

// State
let currentQuestionIndex = 0;

// Function
function showQuestion(question) {
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionElement.textContent = question.text;
  answersElement.replaceChildren();
  feedbackElement.textContent = "";

  nextButton.disabled = true;

  for (const answer of question.answers) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (answer === question.answers[question.correctIndex]) {
        feedbackElement.textContent = "Correct!";
        nextButton.disabled = false;

        const answerButtons = answersElement.querySelectorAll("button");
        for (const answerButton of answerButtons) {
          answerButton.disabled = true;
        }

        nextButton.focus();
      } else {
        feedbackElement.textContent = "Not correct. Try again.";
      }
    });

    answersElement.append(button);
  }
}

// Event listeners
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    showQuestion(questions[currentQuestionIndex]);
    questionElement.focus();
  } else {
    progressElement.textContent = "";
    questionElement.textContent = "Quiz completed!";
    answersElement.replaceChildren();
    feedbackElement.textContent = `You answered all ${questions.length} questions correctly.`;
    nextButton.hidden = true;
    restartButton.hidden = false;
    restartButton.focus();
  }
});

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  nextButton.hidden = false;
  restartButton.hidden = true;
  showQuestion(questions[currentQuestionIndex]);
  questionElement.focus();
});

// Startup
showQuestion(questions[currentQuestionIndex]);
