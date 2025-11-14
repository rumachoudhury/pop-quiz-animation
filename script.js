/* ==========================
   - Change questions, answers, timer
   - Update placeholder image if needed
========================== */
const quizData = {
  question: "Which gas is most abundant in Earth's atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Nitrogen", correct: true },
    { text: "Carbon Dioxide", correct: false },
    { text: "Hydrogen", correct: false },
  ],
  timer: 10, // seconds
};

// DOM elements
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");

// Set question text
questionEl.textContent = quizData.question;

// Set answer options dynamically
quizData.answers.forEach((answer) => {
  const li = document.createElement("li");
  li.textContent = answer.text;
  li.addEventListener("click", () => checkAnswer(answer.correct, li));
  answersEl.appendChild(li);
});

// Countdown timer
let timeLeft = quizData.timer;
const countdown = setInterval(() => {
  timeLeft--;
  timerEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert("Time's up!");
  }
}, 1000);

// Check if answer is correct
function checkAnswer(isCorrect, liElement) {
  if (isCorrect) {
    liElement.style.backgroundColor = "green";
    alert("Correct!");
  } else {
    liElement.style.backgroundColor = "red";
    alert("Wrong!");
  }
  clearInterval(countdown);
}

/* ==========================
1. Change quiz question:
   quizData.question = "Your question here";

2. Change answers:
   quizData.answers = [
       { text: "Answer 1", correct: false },
       { text: "Answer 2", correct: true },
       ...
   ];

3. Adjust timer:
   quizData.timer = 10;

4. Replace placeholder image:
   <img src="placeholder.png"> with your image
========================= */
