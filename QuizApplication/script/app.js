/* Questions data */
const data = [
  {
    id: 1,
    question: "Which device is required for the Internet connection?",
    answers: [
      { answer: "Joystick", isCorrect: false },
      { answer: "Modem", isCorrect: true },
      { answer: "CD Drive", isCorrect: false },
      { answer: "NIC Card", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "You can organize files by storing them in__________?",
    answers: [
      { answer: "archives", isCorrect: false },
      { answer: "folders", isCorrect: true },
      { answer: "indexes", isCorrect: false },
      { answer: "lists", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "Coded entries which are used to gain access to a computer system are called__________?",
    answers: [
      { answer: "Entry codes", isCorrect: false },
      { answer: "Passwords", isCorrect: true },
      { answer: "Security commands", isCorrect: false },
      { answer: "Code words", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "The first computers were programmed using___________?",
    answers: [
      { answer: "Assembly language", isCorrect: false },
      { answer: "Machine language", isCorrect: true },
      { answer: "Source code", isCorrect: false },
      { answer: "Object code", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Who is the father of Computer science?",
    answers: [
      { answer: "Allen Turing", isCorrect: true },
      { answer: "Charles Babbage", isCorrect: false },
      { answer: "Simur Cray", isCorrect: false },
      { answer: "Augusta Adaming", isCorrect: false },
    ],
  },
];

/* DOM Selector */

const quizScreen = document.querySelector(".quizBank");
const resultScreen = document.querySelector(".resutlBoard");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submitBtn = document.querySelector(".submit");
const playBtn = document.querySelector(".resutlBoard button");

let quizIndex = 0;
let correctAns = 0;
let wrongAns = 0;
let total = 0;
let selectedAnswer;

/* Play Again */
const playAgain = () => {
  quizIndex = 0;
  correctAns = 0;
  wrongAns = 0;
  total = 0;
  showQuestion(quizIndex);
};

playBtn.addEventListener("click", () => {
  resultScreen.style.display = "none";
  quizScreen.style.display = "block";
  playAgain();
});

/* Show Result */
const showResult = () => {
  resultScreen.style.display = "block";
  quizScreen.style.display = "none";

  resultScreen.querySelector(".correct").textContent = `
    Correct Answer: ${correctAns}
  `;
  resultScreen.querySelector(".wrong").textContent = `
    Wrong Answer: ${wrongAns}
  `;
  resultScreen.querySelector(".score").textContent = `
    Total Score: ${(correctAns - wrongAns) * 10}
  `;
};

/* Quiz Generator Function */
const showQuestion = (qNumber) => {
  if (quizIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
        <input type="radio" id=${index} value=${item.isCorrect} name="answer">
        <label for=${index}>${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

/* Selecting Option */
const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

/* Submit Quiz */
const submitAnswer = () => {
  submitBtn.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctAns++ : wrongAns++;
      quizIndex++;
      showQuestion(quizIndex);
    } else alert("Select an answer");
  });
};

showQuestion(quizIndex);
submitAnswer();
