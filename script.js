let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

const quizzes = [
    {
        name: "Quiz 1", //Quiz 0
        questions: [
            {
                question: "What ancient writing system used pictorial symbols and was primarily associated with ancient Egypt?",
                options: ["Cuneiform", "Hieroglyphics", "Runes"],
                correctAnswer: 1
            },
            {
                question: "Who is considered the father of modern medicine?",
                options: ["Hippocrates", "Aristotle", "Aristotle", "Plato"],
                correctAnswer: 0
            },
            {
                question: "Which ancient conqueror is known for creating one of the largest empires in history by the time of his death?",
                options: ["Julius Caesar", "Alexander the Great", "Genghis Khan", "Napoleon Bonaparte"],
                correctAnswer: 1
            },
            {
                question: "What was the capital city of the Roman Empire?",
                options: ["Athens", "Alexandria", "Rome", "Carthage"],
                correctAnswer: 2
            },
            {
                question: "Which Islamic dynasty ruled the Islamic Caliphate during the 'Golden Age of Islam'?",
                options: ["Umayyads", "Fatimids", "Almoravids", "Abbasids"],
                correctAnswer: 3
            },
            {
                question: "Who led the Norman invasion of England in 1066 and became King of England?",
                options: ["William the Conqueror", "Richard the Lionheart", "Henry VIII"],
                correctAnswer: 0
            },
            {
                question: "What was the real name of Genghis Khan, the founder of the Mongol Empire?",
                options: ["Kublai", "Temüjin", "Ogedei", "Batu"],
                correctAnswer: 1
            },
            {
                question: "Which Ottoman ruler is known for his conquest of Constantinople in 1453?",
                options: ["Suleiman", "Selim I", "Mehmed II", "Osman I"],
                correctAnswer: 2
            },
            {
                question: "Who was the famous Mughal emperor known for building the Taj Mahal?",
                options: ["Akbar the Great", "Shah Jahan", "Aurangzeb", "Jahangir"],
                correctAnswer: 1
            },
            {
                question: "Which notorious pirate, known for his black flag and the Jolly Roger, terrorized the Caribbean during the Golden Age of Piracy?",
                options: ["Blackbeard", "Captain Kidd", "Bartholomew Roberts", "Anne Bonny"],
                correctAnswer: 0
            },
            {
                question: "Which event in 1789 marked the beginning of the French Revolution?",
                options: ["Storming of the Bastille", "Reign of Terror", "Execution of Louis XVI", "Tennis Court Oath"],
                correctAnswer: 0
            },
            {
                question: "Which treaty officially ended World War I in 1919?",
                options: ["Treaty of Tordesillas", "Treaty of Versailles", "Treaty of Utrecht", "Treaty of Brest-Litovsk", "Treaty of Levant"],
                correctAnswer: 1
            },
            {
                question: "What ancient Mesoamerican civilization is known for its impressive stepped pyramids, such as El Castillo?",
                options: ["Aztecs", "Incas", "Olmecs", "Mayans"],
                correctAnswer: 3
            },
            {
                question: "How many major Crusades took place between the 11th and 13th centuries?",
                options: ["3", "5", "7", "9"],
                correctAnswer: 2
            },
            {
                question: "What was the capital city of the Eastern Roman Empire (Byzantine Empire)?",
                options: ["Athens", "Constantinople", "Alexandria", "Rome"],
                correctAnswer: 1
            },
            {
                question: "Julius Caesar was assassinated on the Ides of March in which year?",
                options: ["44 BC", "27 BC", "14 AD"],
                correctAnswer: 0
            },
            {
                question: "Which event in 1945 marked the end of World War II in Europe?",
                options: ["D-Day", "Battle of Stalingrad", "Hiroshima and Nagasaki bombings", "Signing of the Treaty of Berlin"],
                correctAnswer: 2
            },
            {
                question: "What important calendar system did the ancient Mayans develop and use?",
                options: ["Gregorian Calendar", "Solar Calendar", "Mayan Long Count Calendar"],
                correctAnswer: 2
            },
            {
                question: "Who was the Byzantine Emperor known for commissioning the construction of the Hagia Sophia?",
                options: ["Theodosius I", "Constantine the Great", "Leo III", "Justinian I"],
                correctAnswer: 0
            },
            {
                question: "Who were Julius Caesar's two main political allies and co-triumvirs?",
                options: ["Brutus and Cassius", "Mark Antony and Crassus", "Mark Antony and Pompey"],
                correctAnswer: 1
            },
            {
                question: "What is the estimated construction period for the Great Pyramid of Giza, during the Fourth Dynasty of Egypt?",
                options: ["10 years", "40 years", "20 years", "30 years"],
                correctAnswer: 3
            },
            {
                question: "Who is the legendary founder of ancient China and the first emperor of the Qin Dynasty?",
                options: ["Confucius", "Laozi", "Sun Tzu", "Qin Shi Huang"],
                correctAnswer: 3
            },
            {
                question: "Which Italian artist is famous for painting the \"Mona Lisa\" and \"The Last Supper\"?",
                options: ["Michelangelo", "Leonardo da Vinci"],
                correctAnswer: 1
            },
            {
                question: "In which industry did the Industrial Revolution begin in the late 18th century?",
                options: ["Textiles", "Agriculture", "Mining", "Transportation"],
                correctAnswer: 0
            },
            {
                question: "What term describes the period of geopolitical tension and rivalry between the United States and the Soviet Union after World War II?",
                options: ["The Great War", "The Iron Curtain", "The Space Race", "The Cold War"],
                correctAnswer: 3
            },
            {
                question: "Who led Abbasid\'s conquest of Iberian Peninsula?",
                options: ["Khalid ibn Al-Walid", "Tariq bin Zayed", "Salah ad-Din"],
                correctAnswer: 1
            },
            {
                question: "Which ancient Greek historian is often called the \"Father of History\"?",
                options: ["Thucydides", "Plutarch", "Herodotus"],
                correctAnswer: 2
            },
            {
                question: "Who was the female pharaoh of ancient Egypt who ruled during the New Kingdom period and is known for her famous temple at Deir el-Bahri?",
                options: ["Cleopatra", "Hatshepsut", "Nefertiti"],
                correctAnswer: 1
            },
            {
                question: "Who was the founder of the Achaemenid Empire (Persian Empire) and is known for his vast territorial conquests?",
                options: ["Darius the Great", "Cyrus the Great", "Xerxes I", "Artaxerxes I"],
                correctAnswer: 1
            },
            {
                question: "Who 'unified' England for the first time?",
                options: ["Æthelstan", "Alfred the Great", "Edward I", "Æthelwulf"],
                correctAnswer: 0
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
                question: "What was the medieval name of the city now known as Istanbul?",
                options: ["Petra", "Ankara", "Constantinople", "Antioch"],
                correctAnswer: 2
            },
            {
                question: "What was the name of the project led by Robert J. Oppenheimer during World War II",
                options: ["Apollo", "Brooklyn", "Manhattan", "Overlord"],
                correctAnswer: 2
            },
            {
                question: "As of 2023, which is the highest-rated movie on IMDb?",
                options: [" The Shawshank Redemption", "The God Father", "Forest Gump", "The Dark Knight", "The Lord of the Rings: The Return of the King"],
                correctAnswer: 0
            },
            {
                question: "Which of the following terms doesn't even remotely signify 'King'?",
                options: ["Rex", "Emir", "Khan", "Pharoh", "Sultan", "Tsar"],
                correctAnswer: 1
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
