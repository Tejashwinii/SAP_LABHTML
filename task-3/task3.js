const questions = [
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 1
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: 0
    },
    {
        question: "Which method converts JSON to JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "convertJSON()"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("scoreText");

loadQuestion();

function loadQuestion() {
    selectedOption = null;
    optionsEl.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;

        div.onclick = () => selectOption(div, index);
        optionsEl.appendChild(div);
    });
}

function selectOption(element, index) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.classList.remove("selected"));

    element.classList.add("selected");
    selectedOption = index;
}

function nextQuestion() {
    if (selectedOption === null) return;

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
}
