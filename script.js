const quizData = [
{
quizName: "Quiz 1",
questions: [
    {
        question: "What ancient writing system used pictorial symbols and was primarily associated with ancient Egypt?",
        options: ["Cuneiform", "Hieroglyphics", "Runes"],
        answer: "Hieroglyphics",
        explanation: "Hieroglyphics is the ancient writing system that used pictorial symbols and was primarily associated with ancient Egypt."
    },
    {
        question: "Who is considered the father of modern medicine?",
        options: ["Hippocrates", "Aristotle", "Socrates", "Plato"],
        answer: "Hippocrates",
        explanation: "Hippocrates is considered the father of modern medicine."
    },
    {
        question: "Which ancient conqueror is known for creating one of the largest empires in history by the time of his death?",
        options: ["Julius Caesar", "Alexander the Great", "Genghis Khan", "Napoleon Bonaparte"],
        answer: "Alexander the Great",
        explanation: "Alexander the Great is known for creating one of the largest empires in history by the time of his death."
    },
    {
        question: "What was the capital city of the Roman Empire?",
        options: ["Athens", "Alexandria", "Rome", "Carthage"],
        answer: "Rome",
        explanation: "Rome was the capital city of the Roman Empire."
    },
    {
        question: "Which Islamic dynasty ruled the Islamic Caliphate during the 'Golden Age of Islam'?",
        options: ["Umayyads", "Fatimids", "Almoravids", "Abbasids"],
        answer: "Abbasids",
        explanation: "The Abbasids ruled the Islamic Caliphate during the 'Golden Age of Islam.'"
    },
    {
        question: "Who led the Norman invasion of England in 1066 and became King of England?",
        options: ["William the Conqueror", "Richard the Lionheart", "Henry VIII"],
        answer: "William the Conqueror",
        explanation: "William the Conqueror led the Norman invasion of England in 1066 and became King of England."
    },
    {
        question: "What was the real name of Genghis Khan, the founder of the Mongol Empire?",
        options: ["Kublai", "Temüjin", "Ogedei", "Batu"],
        answer: "Temüjin",
        explanation: "Temüjin was the real name of Genghis Khan, the founder of the Mongol Empire."
    },
    {
        question: "Which Ottoman ruler is known for his conquest of Constantinople in 1453?",
        options: ["Suleiman", "Selim I", "Mehmed II", "Osman I"],
        answer: "Mehmed II",
        explanation: "Mehmed II is known for his conquest of Constantinople in 1453."
    },
    {
        question: "Who was the famous Mughal emperor known for building the Taj Mahal?",
        options: ["Akbar the Great", "Shah Jahan", "Aurangzeb", "Jahangir"],
        answer: "Shah Jahan",
        explanation: "Shah Jahan was the famous Mughal emperor known for building the Taj Mahal."
    },
    {
        question: "Which notorious pirate, known for his black flag and the Jolly Roger, terrorized the Caribbean during the Golden Age of Piracy?",
        options: ["Blackbeard", "Captain Kidd", "Bartholomew Roberts", "Anne Bonny"],
        answer: "Blackbeard",
        explanation: "Blackbeard, known for his black flag and the Jolly Roger, terrorized the Caribbean during the Golden Age of Piracy."
    },
    {
        question: "Which event in 1789 marked the beginning of the French Revolution?",
        options: ["Storming of the Bastille", "Reign of Terror", "Execution of Louis XVI", "Tennis Court Oath"],
        answer: "Storming of the Bastille",
        explanation: "The Storming of the Bastille marked the beginning of the French Revolution in 1789."
    },
    {
        question: "Which treaty officially ended World War I in 1919?",
        options: ["Treaty of Tordesillas", "Treaty of Versailles", "Treaty of Utrecht", "Treaty of Brest-Litovsk", "Treaty of Levant"],
        answer: "Treaty of Versailles",
        explanation: "The Treaty of Versailles officially ended World War I in 1919."
    },
    {
        question: "What ancient Mesoamerican civilization is known for its impressive stepped pyramids, such as El Castillo?",
        options: ["Aztecs", "Incas", "Olmecs", "Mayans"],
        answer: "Mayans",
        explanation: "The Mayans are known for their impressive stepped pyramids, such as El Castillo."
    },
    {
        question: "How many major Crusades took place between the 11th and 13th centuries?",
        options: ["3", "5", "7", "9"],
        answer: "7",
        explanation: "Seven major Crusades took place between the 11th and 13th centuries."
    },
    {
        question: "What was the capital city of the Eastern Roman Empire (Byzantine Empire)?",
        options: ["Athens", "Constantinople", "Alexandria", "Rome"],
        answer: "Constantinople",
        explanation: "Constantinople was the capital city of the Eastern Roman Empire (Byzantine Empire)."
    },
    {
        question: "Julius Caesar was assassinated on the Ides of March in which year?",
        options: ["44 BC", "27 BC", "14 AD"],
        answer: "44 BC",
        explanation: "Julius Caesar was assassinated on the Ides of March in the year 44 BC."
    },
    {
        question: "Which event in 1945 marked the end of World War II in Europe?",
        options: ["D-Day", "Battle of Stalingrad", "Hiroshima and Nagasaki bombings", "Signing of the Treaty of Berlin"],
        answer: "Hiroshima and Nagasaki bombings",
        explanation: "The Hiroshima and Nagasaki bombings marked the end of World War II in Europe in 1945."
    },
    {
        question: "What important calendar system did the ancient Mayans develop and use?",
        options: ["Gregorian Calendar", "Solar Calendar", "Mayan Long Count Calendar"],
        answer: "Mayan Long Count Calendar",
        explanation: "The ancient Mayans developed and used the Mayan Long Count Calendar."
    },
    {
        question: "Who was the Byzantine Emperor known for commissioning the construction of the Hagia Sophia?",
        options: ["Theodosius I", "Constantine the Great", "Leo III", "Justinian I"],
        answer: "Theodosius I",
        explanation: "Theodosius I, the Byzantine Emperor, commissioned the construction of the Hagia Sophia."
    },
    {
        question: "Who were Julius Caesar's two main political allies and co-triumvirs?",
        options: ["Brutus and Cassius", "Mark Antony and Crassus", "Mark Antony and Pompey"],
        answer: "Mark Antony and Crassus",
        explanation: "Mark Antony and Crassus were Julius Caesar's two main political allies and co-triumvirs."
    },
    {
        question: "What is the estimated construction period for the Great Pyramid of Giza, during the Fourth Dynasty of Egypt?",
        options: ["10 years", "40 years", "20 years", "30 years"],
        answer: "30 years",
        explanation: "The estimated construction period for the Great Pyramid of Giza, during the Fourth Dynasty of Egypt, was 30 years."
    },
    {
        question: "Who is the legendary founder of ancient China and the first emperor of the Qin Dynasty?",
        options: ["Confucius", "Laozi", "Sun Tzu", "Qin Shi Huang"],
        answer: "Qin Shi Huang",
        explanation: "Qin Shi Huang is the legendary founder of ancient China and the first emperor of the Qin Dynasty."
    },
    {
        question: "Which Italian artist is famous for painting the 'Mona Lisa' and 'The Last Supper'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Picasso"],
        answer: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci is the Italian artist famous for painting the 'Mona Lisa' and 'The Last Supper.'"
    },
    {
        question: "In which industry did the Industrial Revolution begin in the late 18th century?",
        options: ["Textiles", "Agriculture", "Mining", "Transportation"],
        answer: "Textiles",
        explanation: "The Industrial Revolution began in the late 18th century in the textiles industry."
    },
    {
        question: "What term describes the period of geopolitical tension and rivalry between the United States and the Soviet Union after World War II?",
        options: ["The Great War", "The Iron Curtain", "The Space Race", "The Cold War"],
        answer: "The Cold War",
        explanation: "The term 'The Cold War' describes the period of geopolitical tension and rivalry between the United States and the Soviet Union after World War II."
    },
    {
        question: "Who led the conquest of Iberian Peninsula during Abbasid Caliphate?",
        options: ["Khalid ibn Al-Walid", "Tariq bin Zayed", "Salah ad-Din"],
        answer: "Tariq bin Zayed",
        explanation: "Tariq bin Zayed led the conquest of the Iberian Peninsula during the Abbasid Caliphate."
    },
    {
        question: "Which ancient Greek historian is often called the 'Father of History'?",
        options: ["Thucydides", "Plutarch", "Herodotus"],
        answer: "Herodotus",
        explanation: "Herodotus is often called the 'Father of History' among ancient Greek historians."
    },
    {
        question: "Who was the female pharaoh of ancient Egypt who ruled during the New Kingdom period and is known for her famous temple at Deir el-Bahri?",
        options: ["Cleopatra", "Hatshepsut", "Nefertiti"],
        answer: "Hatshepsut",
        explanation: "Hatshepsut was the female pharaoh of ancient Egypt who ruled during the New Kingdom period and is known for her famous temple at Deir el-Bahri."
    },
    {
        question: "Who was the founder of the Achaemenid Empire (Persian Empire) and is known for his vast territorial conquests?",
        options: ["Darius the Great", "Cyrus the Great", "Xerxes I", "Artaxerxes I"],
        answer: "Cyrus the Great",
        explanation: "Cyrus the Great was the founder of the Achaemenid Empire (Persian Empire) and is known for his vast territorial conquests."
    },
    {
        question: "Who 'unified' Wessex, Mercia and Northumbria under the banner of England for the first time?",
        options: ["Æthelstan", "Alfred the Great", "Edward I", "Æthelwulf"],
        answer: "Æthelstan",
        explanation: "Æthelstan 'unified' Wessex, Mercia, and Northumbria under the banner of England for the first time."
    }
]

},
{
quizName: "Science I",
questions: [
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Gl", "Ag"],
        answer: "Au",
        explanation: "The chemical symbol for gold is Au."
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: "Mars",
        explanation: "Mars is known as the 'Red Planet' due to its reddish appearance."
    },
    {
        question: "What is the atomic number of carbon?",
        options: ["6", "12", "14", "8"],
        answer: "6",
        explanation: "The atomic number of carbon is 6."
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide",
        explanation: "Plants absorb carbon dioxide from the atmosphere during photosynthesis."
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Watt", "Volt", "Ampere", "Ohm"],
        answer: "Ampere",
        explanation: "The SI unit of electric current is the Ampere."
    },
    {
        question: "Which of the following is a greenhouse gas?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
        answer: "Carbon dioxide",
        explanation: "Carbon dioxide is a greenhouse gas that contributes to the greenhouse effect."
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        answer: "Skin",
        explanation: "The skin is the largest organ in the human body."
    },
    {
        question: "Which gas is responsible for the blue color of the Earth's sky?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Ozone"],
        answer: "Nitrogen",
        explanation: "The blue color of the Earth's sky is primarily due to the scattering of sunlight by nitrogen molecules."
    },
    {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O",
        explanation: "The chemical formula for water is H2O."
    },
    {
        question: "Which subatomic particle carries a positive electric charge?",
        options: ["Neutron", "Proton", "Electron", "Photon"],
        answer: "Proton",
        explanation: "Protons carry a positive electric charge."
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis is the process by which plants make their own food using sunlight."
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "In", "I"],
        answer: "Fe",
        explanation: "The chemical symbol for iron is Fe."
    },
    {
        question: "What is the unit of measurement for frequency?",
        options: ["Watt", "Hertz", "Volt", "Ampere"],
        answer: "Hertz",
        explanation: "The unit of measurement for frequency is the Hertz (Hz)."
    },
    {
        question: "What is the study of the Earth's atmosphere and weather patterns called?",
        options: ["Geology", "Biology", "Meteorology", "Astronomy"],
        answer: "Meteorology",
        explanation: "Meteorology is the study of the Earth's atmosphere and weather patterns."
    },
    {
        question: "Which gas do humans inhale for respiration?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen",
        explanation: "Humans inhale oxygen for respiration."
    },
    {
        question: "What is the chemical formula for methane?",
        options: ["CH4", "CO2", "H2O", "NH3"],
        answer: "CH4",
        explanation: "The chemical formula for methane is CH4."
    },
    {
        question: "Which planet in our solar system has the most moons?",
        options: ["Earth", "Jupiter", "Saturn", "Uranus"],
        answer: "Jupiter",
        explanation: "Jupiter has the most moons in our solar system."
    },
    {
        question: "What is the process by which heat is transferred through direct contact of particles?",
        options: ["Convection", "Conduction", "Radiation", "Reflection"],
        answer: "Conduction",
        explanation: "Conduction is the process by which heat is transferred through direct contact of particles."
    },
    {
        question: "Which element is the most abundant in Earth's crust?",
        options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
        answer: "Oxygen",
        explanation: "Oxygen is the most abundant element in Earth's crust."
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "So", "Sn", "Sd"],
        answer: "Na",
        explanation: "The chemical symbol for sodium is Na."
    },
    {
        question: "What is the unit of measurement for electric resistance?",
        options: ["Watt", "Volt", "Ampere", "Ohm"],
        answer: "Ohm",
        explanation: "The unit of measurement for electric resistance is the Ohm."
    },
    {
        question: "What is the process by which water vapor changes into liquid water called?",
        options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
        answer: "Condensation",
        explanation: "Condensation is the process by which water vapor changes into liquid water."
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        answer: "Carbon dioxide",
        explanation: "Carbon dioxide is responsible for the greenhouse effect on Earth."
    },
    {
        question: "What is the SI unit of energy?",
        options: ["Watt", "Joule", "Volt", "Ampere"],
        answer: "Joule",
        explanation: "The SI unit of energy is the Joule."
    },
    {
        question: "Which gas is released during photosynthesis as a byproduct?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen",
        explanation: "Oxygen is released during photosynthesis as a byproduct."
    },
    {
        question: "What is the chemical formula for sulfuric acid?",
        options: ["SO2", "H2SO4", "HCl", "NaOH"],
        answer: "H2SO4",
        explanation: "The chemical formula for sulfuric acid is H2SO4."
    },
    {
        question: "What is the study of the interactions between living organisms and their environment called?",
        options: ["Geology", "Biology", "Ecology", "Chemistry"],
        answer: "Ecology",
        explanation: "The study of the interactions between living organisms and their environment is called ecology."
    },
    {
        question: "What is the unit of measurement for electric voltage?",
        options: ["Watt", "Hertz", "Volt", "Ampere"],
        answer: "Volt",
        explanation: "The unit of measurement for electric voltage is the Volt."
    },
    {
        question: "Which gas is used for extinguishing fires due to its non-reactive properties?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        answer: "Argon",
        explanation: "Argon is used for extinguishing fires due to its non-reactive properties."
    },
    {
        question: "Which subatomic particle orbits the nucleus of an atom?",
        options: ["Neutron", "Proton", "Electron", "Photon"],
        answer: "Electron",
        explanation: "Electrons orbit the nucleus of an atom."
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Venus, making it one of the hottest planets in our solar system?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
        answer: "Carbon dioxide",
        explanation: "Carbon dioxide is responsible for the greenhouse effect on Venus."
    },
    {
        question: "What is the chemical formula for ammonia?",
        options: ["CO2", "H2O", "O2", "NH3"],
        answer: "NH3",
        explanation: "The chemical formula for ammonia is NH3."
    },
    {
        question: "Which planet is known for its beautiful rings made primarily of ice particles?",
        options: ["Earth", "Jupiter", "Saturn", "Uranus"],
        answer: "Saturn",
        explanation: "Saturn is known for its beautiful rings made primarily of ice particles."
    },
    {
        question: "What is the process by which heat is transferred in the form of electromagnetic waves, such as from the Sun to the Earth?",
        options: ["Convection", "Conduction", "Radiation", "Reflection"],
        answer: "Radiation",
        explanation: "Radiation is the process by which heat is transferred in the form of electromagnetic waves."
    },
    {
        question: "Which element is commonly used as a coolant in nuclear reactors?",
        options: ["Iron", "Silicon", "Oxygen", "Helium"],
        answer: "Helium",
        explanation: "Helium is commonly used as a coolant in nuclear reactors."
    },
    {
        question: "What is the chemical symbol for potassium?",
        options: ["K", "Po", "Pt", "Pb"],
        answer: "K",
        explanation: "The chemical symbol for potassium is K."
    },
    {
        question: "What is the unit of measurement for electric power?",
        options: ["Watt", "Joule", "Volt", "Ampere"],
        answer: "Watt",
        explanation: "The unit of measurement for electric power is the Watt."
    },
    {
        question: "Which gas is released during respiration as a byproduct?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon dioxide",
        explanation: "Carbon dioxide is released during respiration as a byproduct."
    }
]

},
{
quizName: "Random",
questions: [
    {
        question: "Using which platform, can you board the Hogwarts Express?",
        options: ["9 2/4", "9 3/4", "9 1/4"],
        answer: "9 3/4",
        explanation: "You can board the Hogwarts Express using platform 9 3/4 in the Harry Potter series."
    },
    {
        question: "Where was the 2014 FIFA World Cup Final held?",
        options: ["Rio", "Brasilia", "Sao Paulo", "Salvador"],
        answer: "Rio",
        explanation: "The 2014 FIFA World Cup Final was held in Rio de Janeiro, Brazil."
    },
    {
        question: "What was the medieval name of the city now known as Istanbul?",
        options: ["Petra", "Ankara", "Constantinople", "Antioch"],
        answer: "Constantinople",
        explanation: "The medieval name of the city now known as Istanbul was Constantinople."
    },
    {
        question: "What was the name of the project led by Robert J. Oppenheimer during World War II?",
        options: ["Apollo", "Brooklyn", "Manhattan", "Overlord"],
        answer: "Manhattan",
        explanation: "The project led by Robert J. Oppenheimer during World War II was the Manhattan Project."
    },
    {
        question: "As of 2023, which is the highest-rated movie on IMDb?",
        options: ["The Shawshank Redemption", "The Godfather", "Forrest Gump", "The Dark Knight", "The Lord of the Rings: The Return of the King"],
        answer: "The Shawshank Redemption",
        explanation: "As of 2023, 'The Shawshank Redemption' is the highest-rated movie on IMDb."
    },
    {
        question: "Which of the following terms doesn't even remotely signify 'King'?",
        options: ["Rex", "Emir", "Khan", "Pharaoh", "Sultan", "Tsar"],
        answer: "Emir",
        explanation: "Among the given terms, 'Emir' doesn't signify 'King.' It is a title used in Islamic leadership."
    }
]

},
// Add more quizzes with their respective questions
];

let currentQuiz = null;
let currentDifficulty = null;
let currentQuestionIndex = 0;
let userAnswers = []; // Store user's answers
let score = 0;
let timerInterval; // For the hard difficulty timer
const timerDuration = 60; // Time in seconds for hard difficulty

// Elements
const quizSelection = document.getElementById("quiz-selection");
const difficultySelection = document.getElementById("difficulty-selection");
const quizContainer = document.getElementById("quiz-container");
const quizResults = document.getElementById("quiz-results");

// Event listeners for quiz selection buttons
quizData.forEach((quiz, index) => {
    const quizBtn = document.getElementById(`quiz${index + 1}-btn`);
    quizBtn.addEventListener("click", () => selectQuiz(quiz));
});

// Event listeners for difficulty buttons
document.getElementById("easy-btn").addEventListener("click", () => selectDifficulty("easy"));
document.getElementById("hard-btn").addEventListener("click", () => selectDifficulty("hard"));

// Function to select a quiz
function selectQuiz(quiz) {
    currentQuiz = quiz;
    quizSelection.style.display = "none";
    difficultySelection.style.display = "block";
}

// Function to select a difficulty level
function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    difficultySelection.style.display = "none";
    
    // Start the quiz with the selected quiz and difficulty
    startQuiz();
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // Show the quiz container
    quizContainer.style.display = "block";
    quizResults.style.display = "none";

    // Start the timer for hard difficulty
    if (currentDifficulty === "hard") {
        startTimer();
    }

    // Display the first question (for both easy and hard difficulty)
    displayQuestion();
}

// Function to display questions
function displayQuestion() {
    const questionNumElement = document.getElementById("question-num");
    const totalQuestionsElement = document.getElementById("total-questions");
    const questionTextElement = document.getElementById("question-text");
    const optionsElement = document.getElementById("options");

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    questionNumElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    questionTextElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("btn", "btn-primary", "option-button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

// Function to check answers
function checkAnswer(selectedOption) {
    userAnswers.push(selectedOption);
    
    // Move to the next question or finish the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
        displayQuestion();
    } else {
        calculateScoreAndDisplayResults();
    }
}

// Function to calculate the score and display results
function calculateScoreAndDisplayResults() {
    clearInterval(timerInterval); // Stop the timer (if it's running)

    quizContainer.style.display = "none";
    quizResults.style.display = "block";

    // Calculate the score
    for (let i = 0; i < currentQuiz.questions.length; i++) {
        if (userAnswers[i] === currentQuiz.questions[i].answer) {
            score++;
        }
    }

    // Display the score
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your Score: ${score} out of ${currentQuiz.questions.length}`;

    // Display correct/incorrect answers and explanations
    const resultsList = document.createElement("ul");
    currentQuiz.questions.forEach((ques, index) => {
        const resultItem = document.createElement("p");
        resultItem.textContent = `Question ${index + 1}: `;
        if (userAnswers[index] === ques.answer) {
            resultItem.textContent += "Correct";
        } else {
            resultItem.textContent += "Incorrect";
            const explanation = document.createElement("p");
            explanation.textContent = `${ques.explanation}`;
            resultItem.appendChild(explanation);
        }
        resultsList.appendChild(resultItem);
    });

    quizResults.appendChild(resultsList);
}

// Function to start the timer for hard difficulty
function startTimer() {
    let secondsLeft = timerDuration;
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            calculateScoreAndDisplayResults();
        } else {
            timerElement.textContent = `Time left: ${secondsLeft} seconds`;
            secondsLeft--;
        }
    }, 1000);
}


// Get the paragraph element by its ID
const reloadParagraph = document.getElementById("reload-paragraph");

// Add a click event listener to the paragraph
reloadParagraph.addEventListener("click", () => {
    // Reload the page when the paragraph is clicked
    location.reload();
});

