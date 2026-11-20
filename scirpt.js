const quizQuestions = [
  { topic: "ALGEBRA", question: "What is the value of x if 3x + 5 = 20?", options: ["x = 3", "x = 5", "x = 8", "x = 15"], answer: 1, explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3, so x = 5." },
  { topic: "NUMBER", question: "Write 0.00072 in standard form.", options: ["7.2 × 10⁻⁴", "72 × 10⁻⁵", "7.2 × 10⁴", "0.72 × 10⁻³"], answer: 0, explanation: "Move the decimal point 4 places right to get 7.2, so the power is −4." },
  { topic: "GEOMETRY", question: "Two angles in a triangle are 48° and 67°. Find the third angle.", options: ["55°", "65°", "75°", "115°"], answer: 1, explanation: "Angles in a triangle add to 180°. So 180° − 48° − 67° = 65°." },
  { topic: "MEASUREMENT", question: "A rectangle is 9 cm long and 4 cm wide. What is its area?", options: ["13 cm²", "26 cm²", "36 cm²", "72 cm²"], answer: 2, explanation: "Area of a rectangle = length × width = 9 × 4 = 36 cm²." },
  { topic: "RATIO", question: "Share ₦360 in the ratio 2 : 4. What is the smaller share?", options: ["₦60", "₦120", "₦180", "₦240"], answer: 1, explanation: "There are 2 + 4 = 6 parts. Each part is ₦360 ÷ 6 = ₦60, so 2 parts = ₦120." },
  { topic: "STATISTICS", question: "Find the mean of 4, 6, 8 and 10.", options: ["6", "7", "8", "28"], answer: 1, explanation: "Add the values (28), then divide by the 4 values: 28 ÷ 4 = 7." },
  { topic: "NUMBER", question: "Evaluate 3/4 + 1/8.", options: ["4/12", "5/8", "7/8", "1"], answer: 2, explanation: "Change 3/4 to 6/8. Then 6/8 + 1/8 = 7/8." },
  { topic: "ALGEBRA", question: "Simplify 5a + 3 − 2a + 4.", options: ["3a + 7", "7a + 7", "3a − 1", "7a − 1"], answer: 0, explanation: "Collect like terms: 5a − 2a = 3a and 3 + 4 = 7. The result is 3a + 7." },
  { topic: "PROBABILITY", question: "A fair coin is tossed once. What is the probability of getting heads?", options: ["0", "1/4", "1/2", "1"], answer: 2, explanation: "There is 1 heads outcome out of 2 equally likely outcomes, so the probability is 1/2." },
  { topic: "MEASUREMENT", question: "Convert 2.5 metres to centimetres.", options: ["25 cm", "205 cm", "250 cm", "2,500 cm"], answer: 2, explanation: "There are 100 centimetres in a metre, so 2.5 × 100 = 250 cm." }
];

const revisionSets = {
  "2022": [
    { topic: "Number", question: "A school has 240 learners. If 3/8 of them are in JSS3, how many JSS3 learners are there?", answer: "<strong>Answer: 90 learners.</strong> Calculate 3/8 × 240 = 3 × 30 = 90." },
    { topic: "Algebra", question: "Solve 4y − 7 = 21.", answer: "<strong>Answer: y = 7.</strong> Add 7 to both sides to get 4y = 28, then divide by 4." },
    { topic: "Geometry", question: "Find the perimeter of a square whose side is 8.5 cm.", answer: "<strong>Answer: 34 cm.</strong> A square has four equal sides, so perimeter = 4 × 8.5 = 34 cm." }
  ],
  "2023": [
    { topic: "Ratio", question: "The ratio of red counters to blue counters is 3 : 5. If there are 40 counters altogether, how many are red?", answer: "<strong>Answer: 15 red counters.</strong> There are 8 parts altogether. Each part is 40 ÷ 8 = 5, so red counters = 3 × 5." },
    { topic: "Measurement", question: "A cuboid is 5 cm long, 3 cm wide and 4 cm high. Find its volume.", answer: "<strong>Answer: 60 cm³.</strong> Volume = length × width × height = 5 × 3 × 4." },
    { topic: "Statistics", question: "Find the median of 3, 9, 5, 7 and 6.", answer: "<strong>Answer: 6.</strong> Arrange the values in order: 3, 5, 6, 7, 9. The middle value is 6." }
  ],
  "2024": [
    { topic: "Number", question: "Round 38,746 to the nearest thousand.", answer: "<strong>Answer: 39,000.</strong> The hundreds digit is 7, so round the thousands digit up." },
    { topic: "Algebra", question: "If a = 4, evaluate 2a² − 3.", answer: "<strong>Answer: 29.</strong> Substitute a = 4: 2 × 4² − 3 = 2 × 16 − 3 = 29." },
    { topic: "Geometry", question: "An angle on a straight line is split into 124° and angle p. Find p.", answer: "<strong>Answer: 56°.</strong> Angles on a straight line total 180°, so p = 180° − 124°." }
  ],
  "2025": [
    { topic: "Percentage", question: "A bag costs ₦8,000. Its price is reduced by 15%. What is the new price?", answer: "<strong>Answer: ₦6,800.</strong> 15% of ₦8,000 is ₦1,200. Subtract the discount: ₦8,000 − ₦1,200." },
    { topic: "Number", question: "Evaluate (−6) + 14 − 3.", answer: "<strong>Answer: 5.</strong> First, −6 + 14 = 8; then 8 − 3 = 5." },
    { topic: "Measurement", question: "A bus travels 150 km in 3 hours. Find its average speed.", answer: "<strong>Answer: 50 km/h.</strong> Average speed = distance ÷ time = 150 ÷ 3." }
  ],
  "2026": [
    { topic: "Algebra", question: "Factorise 6x + 18.", answer: "<strong>Answer: 6(x + 3).</strong> The highest common factor of 6x and 18 is 6; take it outside the bracket." },
    { topic: "Probability", question: "A bag has 3 green and 5 yellow balls. One ball is chosen at random. Find the probability it is green.", answer: "<strong>Answer: 3/8.</strong> There are 3 green balls out of 3 + 5 = 8 balls altogether." },
    { topic: "Geometry", question: "A right-angled triangle has shorter sides of 6 cm and 8 cm. Find the hypotenuse.", answer: "<strong>Answer: 10 cm.</strong> By Pythagoras, c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm." }
  ]
};

let currentQuestion = 0;
let answeredCount = 0;
const completedQuestions = new Set();
const questionTopic = document.getElementById("question-topic");
const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const feedback = document.getElementById("feedback");
const scoreLabel = document.getElementById("score-label");
const progressBar = document.getElementById("progress-bar");
const quizDots = document.getElementById("quiz-dots");

function renderQuestion() {
  const item = quizQuestions[currentQuestion];
  questionTopic.textContent = item.topic;
  questionCount.textContent = `QUESTION ${currentQuestion + 1} / ${quizQuestions.length}`;
  questionText.textContent = item.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  answerOptions.replaceChildren();

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => selectAnswer(index));
    answerOptions.append(button);
  });
  quizDots.textContent = `${"●".repeat(currentQuestion + 1)}${"○".repeat(quizQuestions.length - currentQuestion - 1)}`;
}

function selectAnswer(selectedIndex) {
  const item = quizQuestions[currentQuestion];
  const buttons = [...answerOptions.querySelectorAll("button")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    else if (index === selectedIndex) button.classList.add("incorrect");
  });

  if (!completedQuestions.has(currentQuestion)) {
    completedQuestions.add(currentQuestion);
    answeredCount += 1;
    scoreLabel.textContent = `${answeredCount} of ${quizQuestions.length} answered`;
    progressBar.style.width = `${(answeredCount / quizQuestions.length) * 100}%`;
  }

  const isCorrect = selectedIndex === item.answer;
  feedback.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedback.textContent = `${isCorrect ? "That's right!" : "Not quite—here's how to work it out."} ${item.explanation}`;
}

function renderRevisionSet(year) {
  document.getElementById("set-title").textContent = `${year} revision set`;
  const items = revisionSets[year];
  document.getElementById("set-count").textContent = `${items.length} QUESTIONS`;
  const list = document.getElementById("revision-list");
  list.replaceChildren();

  items.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "revision-card";
    const meta = document.createElement("div");
    meta.className = "revision-card-top";
    const number = document.createElement("span");
    number.textContent = `QUESTION 0${index + 1}`;
    const topic = document.createElement("span");
    topic.textContent = `• ${item.topic.toUpperCase()}`;
    meta.append(number, topic);
    const heading = document.createElement("h4");
    heading.textContent = item.question;
    const reveal = document.createElement("button");
    reveal.type = "button";
    reveal.className = "reveal-answer";
    reveal.textContent = "Show worked answer +";
    reveal.setAttribute("aria-expanded", "false");
    const answer = document.createElement("div");
    answer.className = "worked-answer";
    answer.hidden = true;
    answer.innerHTML = item.answer;
    reveal.addEventListener("click", () => {
      answer.hidden = !answer.hidden;
      reveal.textContent = answer.hidden ? "Show worked answer +" : "Hide worked answer −";
      reveal.setAttribute("aria-expanded", String(!answer.hidden));
    });
    article.append(meta, heading, reveal, answer);
    list.append(article);
  });
}

document.getElementById("next-question").addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % quizQuestions.length;
  renderQuestion();
});
document.getElementById("year-picker").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-year]");
  if (!button) return;
  document.querySelectorAll(".year-button").forEach((yearButton) => {
    const active = yearButton === button;
    yearButton.classList.toggle("active", active);
    yearButton.setAttribute("aria-pressed", String(active));
  });
  renderRevisionSet(button.dataset.year);
});
document.querySelectorAll(".topic-card > a").forEach((link) => {
  link.addEventListener("click", () => {
    const topic = link.dataset.topic.toUpperCase().split(" ")[0];
    const quizTopic = topic === "SHAPE" ? "GEOMETRY" : topic;
    const match = quizQuestions.findIndex((item) => item.topic.startsWith(quizTopic));
    if (match !== -1) {
      currentQuestion = match;
      renderQuestion();
    }
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});
document.querySelectorAll(".year-button").forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
});
renderQuestion();
renderRevisionSet("2022");
