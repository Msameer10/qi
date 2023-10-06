let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

const quizzes = [
    {
        name: "Quiz 1", //Quiz 0
        questions: [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5"],
                correctAnswer: 1
            },
            {
                question: "What is 3 * 7?",
                options: ["14", "21", "28"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "Random", //Quiz 1
        questions: [
            {
                question: "Using which platform, can you board the Hogwarts Express?",
                options: ["9 2/4", "9 3/4", "9 1/4"],
                correctAnswer: 1
            },
            {
                question: "Where was the 2014 FIFA World Cup Final held?",
                options: ["Rio", "Brasilia", "Sao Paulo", "Salvador"],
                correctAnswer: 0
            },
            {
                question: "What was the medieval name of the city, Istanbul?",
                options: ["Petra", "Ankara", "Constantinople", "Antioch"],
                correctAnswer: 2
            }
        ]
    },
    // Add more quizzes as needed
];

function startQuiz(quizIndex) {
    currentQuiz = quizzes[quizIndex];
    currentQuestion = 0;
    score = 0;

    // Set the quiz name in the <h2> element
    const quizNameElement = document.getElementById('quiz-name');
    quizNameElement.textContent = currentQuiz.name;
    showNextQuestion();
    document.querySelector('.quiz-selection').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
}

function showNextQuestion() {
    if (currentQuestion < currentQuiz.questions.length) {
        const question = currentQuiz.questions[currentQuestion];
        const questionText = document.getElementById('question-text');
        const answerOptions = document.getElementById('answer-options');
        const questionCounter = document.getElementById('question-counter-text'); // New line
        
        questionCounter.textContent = `Question ${currentQuestion + 1} of ${currentQuiz.questions.length}`; // Update the question counter
        
        questionText.textContent = question.question;
        
        answerOptions.innerHTML = "";
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            answerOptions.appendChild(button);
        });
    } else {
        finishQuiz();
    }
}

function checkAnswer(selectedOptionIndex) {
    const question = currentQuiz.questions[currentQuestion];
    if (selectedOptionIndex === question.correctAnswer) {
        score++;
    }
    currentQuestion++;
    showNextQuestion();
}

function finishQuiz() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.result').style.display = 'block';
    
    const percentage = (score / currentQuiz.questions.length) * 100;
    const grade = calculateGrade(percentage);
    
    document.getElementById('result-text').textContent = `You Scored ${percentage.toFixed(1)}%`;
    document.getElementById('grade-text').textContent = `Your Grade is ${grade}`;
}

function calculateGrade(percentage) {
    if (percentage >= 80) {
        return 'A';
    } else if (percentage >= 60) {
        return 'B';
    } else if (percentage >= 40) {
        return 'C';
    } else {
        return 'F';
    }
}
