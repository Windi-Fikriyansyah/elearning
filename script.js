const questions = [{
        question: "What is 2 + 2?",
        options: ["4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin"],
        correctAnswer: "Paris"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scoreDetailsContainer = document.getElementById('score-details');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionTitle = document.getElementById('question');
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `<input type="radio" name="answer" value="${option}" id="option-${index}">
                                    <label for="option-${index}">${option}</label>`;
        optionsContainer.appendChild(optionElement);
    });
}

function showResult() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    const resultText = document.createElement('p');
    if (userAnswer === correctAnswer) {
        resultText.textContent = `Question ${currentQuestionIndex + 1}: Correct!`;
        resultText.classList.add('correct');
        score++;
    } else {
        resultText.textContent = `Question ${currentQuestionIndex + 1}: Incorrect! Correct answer: ${correctAnswer}`;
        resultText.classList.add('incorrect');
    }

    scoreDetailsContainer.appendChild(resultText);

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<h2>Your Score</h2>
                                 <div id="score-details"></div>
                                 <p>Correct Answers: ${score}</p>
                                 <p>Incorrect Answers: ${questions.length - score}</p>`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDetailsContainer.innerHTML = '';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
}

document.getElementById('answer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showResult();
});

showQuestion();