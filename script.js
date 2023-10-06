let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

const quizzes = [
    {
        name: "History", //Quiz 0
        questions: [
            {
                question: "What ancient writing system used pictorial symbols and was primarily associated with ancient Egypt?",
                options: ["Cuneiform", "Hieroglyphics", "Runes"],
                correctAnswer: 1
            },
            {
                question: "Who is considered the father of modern medicine?",
                options: ["Hippocrates", "Aristotle", "Socrates", "Plato"],
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
                options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Picasso"],
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
                question: "Who led the conquest of Iberian Peninsula during Abbasid Caliphate?",
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
                question: "Who 'unified' Wessex, Mercia and Northumbria under the banner of England for the first time?",
                options: ["Æthelstan", "Alfred the Great", "Edward I", "Æthelwulf"],
                correctAnswer: 0
            }
        ]
    },

    {
name: "Science I", //Quiz 1
questions: [
{
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Gl", "Ag"],
    correctAnswer: 1
},
{
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2
},
{
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "14", "8"],
    correctAnswer: 0
},
{
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1
},
{
    question: "What is the SI unit of electric current?",
    options: ["Watt", "Volt", "Ampere", "Ohm"],
    correctAnswer: 2
},
{
    question: "Which of the following is a greenhouse gas?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
    correctAnswer: 2
},
{
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswer: 2
},
{
    question: "Which gas is responsible for the blue color of the Earth's sky?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Ozone"],
    correctAnswer: 2
},
{
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    correctAnswer: 1
},
{
    question: "Which subatomic particle carries a positive electric charge?",
    options: ["Neutron", "Proton", "Electron", "Photon"],
    correctAnswer: 1
},
{
    question: "What is the process by which plants make their own food using sunlight?",
    options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
    correctAnswer: 2
},
{
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "I"],
    correctAnswer: 0
},
{
    question: "What is the unit of measurement for frequency?",
    options: ["Watt", "Hertz", "Volt", "Ampere"],
    correctAnswer: 1
},
{
    question: "What is the study of the Earth's atmosphere and weather patterns called?",
    options: ["Geology", "Biology", "Meteorology", "Astronomy"],
    correctAnswer: 2
},
{
    question: "Which gas do humans inhale for respiration?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 0
},
{
    question: "What is the chemical formula for methane?",
    options: ["CH4", "CO2", "H2O", "NH3"],
    correctAnswer: 0
},
{
    question: "Which planet in our solar system has the most moons?",
    options: ["Earth", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: 1
},
{
    question: "What is the process by which heat is transferred through direct contact of particles?",
    options: ["Convection", "Conduction", "Radiation", "Reflection"],
    correctAnswer: 1
},
{
    question: "Which element is the most abundant in Earth's crust?",
    options: ["Iron", "Silicon", "Oxygen", "Aluminum"],
    correctAnswer: 2
},
{
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "So", "Sn", "Sd"],
    correctAnswer: 0
},
{
    question: "What is the unit of measurement for electric resistance?",
    options: ["Watt", "Volt", "Ampere", "Ohm"],
    correctAnswer: 3
},
{
    question: "What is the process by which water vapor changes into liquid water called?",
    options: ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
    correctAnswer: 1
},
{
    question: "Which gas is responsible for the greenhouse effect on Earth?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    correctAnswer: 1
},
{
    question: "What is the SI unit of energy?",
    options: ["Watt", "Joule", "Volt", "Ampere"],
    correctAnswer: 1
},
{
    question: "Which gas is released during photosynthesis as a byproduct?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 0
},
{
    question: "What is the chemical formula for sulfuric acid?",
    options: ["SO2", "H2SO4", "HCl", "NaOH"],
    correctAnswer: 1
},
{
    question: "What is the study of the interactions between living organisms and their environment called?",
    options: ["Geology", "Biology", "Ecology", "Chemistry"],
    correctAnswer: 2
},
{
    question: "What is the unit of measurement for electric voltage?",
    options: ["Watt", "Hertz", "Volt", "Ampere"],
    correctAnswer: 2
},
{
    question: "Which gas is used for extinguishing fires due to its non-reactive properties?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    correctAnswer: 3
},
{
    question: "Which subatomic particle orbits the nucleus of an atom?",
    options: ["Neutron", "Proton", "Electron", "Photon"],
    correctAnswer: 2
},
{
    question: "Which gas is responsible for the greenhouse effect on Venus, making it one of the hottest planets in our solar system?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
    correctAnswer: 1
},
{
    question: "What is the chemical formula for ammonia?",
    options: ["CO2", "H2O", "O2", "NH3"],
    correctAnswer: 3
},
{
    question: "Which planet is known for its beautiful rings made primarily of ice particles?",
    options: ["Earth", "Jupiter", "Saturn", "Uranus"],
    correctAnswer: 2
},
{
    question: "What is the process by which heat is transferred in the form of electromagnetic waves, such as from the Sun to the Earth?",
    options: ["Convection", "Conduction", "Radiation", "Reflection"],
    correctAnswer: 2
},
{
    question: "Which element is commonly used as a coolant in nuclear reactors?",
    options: ["Iron", "Silicon", "Oxygen", "Helium"],
    correctAnswer: 3
},
{
    question: "What is the chemical symbol for potassium?",
    options: ["K", "Po", "Pt", "Pb"],
    correctAnswer: 0
},
{
    question: "What is the unit of measurement for electric power?",
    options: ["Watt", "Joule", "Volt", "Ampere"],
    correctAnswer: 0
},
{
    question: "Which gas is released during respiration as a byproduct?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1
},

]
},

    {
        name: "Random", //Quiz 2
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
{
name: "The Big Bang Theory", //Quiz 3
questions: [
{
    question: "Who is known for his catchphrase 'Bazinga!'?",
    options: ["Sheldon Cooper", "Howard Wolowitz", "Rajesh Koothrappali", "Leonard Hofstadter"],
    correctAnswer: 0
},
{
    question: "What is the name of the actress who plays Penny?",
    options: ["Kaley Cuoco", "Mayim Bialik", "Melissa Rauch", "Sara Gilbert"],
    correctAnswer: 0
},
{
    question: "Which character has a Ph.D. in astrophysics?",
    options: ["Penny", "Rajesh Koothrappali", "Sheldon Cooper", "Howard Wolowitz"],
    correctAnswer: 1
},
{
    question: "What is the name of Howard's wife?",
    options: ["Amy", "Emily", "Bernadette", "Leslie"],
    correctAnswer: 2
},
{
    question: "What is Sheldon's favorite spot to sit on the couch?",
    options: ["The middle cushion", "The left end", "The right end", "Anywhere"],
    correctAnswer: 1
},
{
    question: "Which comic book character is a favorite of Sheldon?",
    options: ["Superman", "Batman", "Spider-Man", "Wonder Woman"],
    correctAnswer: 1
},
{
    question: "What is the name of the university where the main characters work?",
    options: ["Caltech", "MIT", "Stanford", "Harvard"],
    correctAnswer: 0
},
{
    question: "What is Raj's inability to speak to women unless he's drunk called?",
    options: ["Shy Syndrome", "Mute Mode", "Silent Disorder", "Selective Mutism"],
    correctAnswer: 3
},
{
    question: "What is the name of Howard's aerospace company?",
    options: ["AerospaceTech", "Rocket Science Inc.", "Wolowitz Industries", "Caltech Aerospace"],
    correctAnswer: 2
},
{
    question: "What is the title of the theme song for 'The Big Bang Theory'?",
    options: ["'Science Is Fun'", "'Geeky Groove'", "'Nerds Rule'", "'The History of Everything'"],
    correctAnswer: 3
},
{
    question: "What is Penny's last name?",
    options: ["Smith", "Johnson", "Hofstadter", "Unknown"],
    correctAnswer: 3
},
{
    question: "What is Sheldon's favorite video game?",
    options: ["Call of Duty", "World of Warcraft", "Halo", "Minecraft"],
    correctAnswer: 1
},
{
    question: "What is the name of Raj's dog?",
    options: ["Buddy", "Cinnamon", "Rover", "Comet"],
    correctAnswer: 1
},
{
    question: "Which character is an engineer who designs spacecraft?",
    options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
    correctAnswer: 2
},
{
    question: "What is the name of Sheldon's roommate before Leonard?",
    options: ["Barry Kripke", "Stuart Bloom", "Howard Wolowitz", "Dennis Kim"],
    correctAnswer: 3
},
{
    question: "What is the name of Amy's boyfriend from the beginning of the series?",
    options: ["Stuart", "Wil Wheaton", "Zack", "Dave"],
    correctAnswer: 2
},
{
    question: "What is the name of Penny's ex-boyfriend who was a musician?",
    options: ["David", "Kurt", "Zack", "Dave"],
    correctAnswer: 3
},
{
    question: "Which character has a twin sister named Missy?",
    options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
    correctAnswer: 0
},
{
    question: "What does Sheldon always knock three times before doing?",
    options: ["Entering rooms", "Sitting in his spot", "Speaking to Penny", "Playing video games"],
    correctAnswer: 0
},
{
    question: "What does Penny do for a living at the beginning of the series?",
    options: ["Waitress", "Actress", "Scientist", "Teacher"],
    correctAnswer: 0
},
{
    question: "Which character is known for his love of doing magic?",
    options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
    correctAnswer: 2
},
{
    question: "What is the name of the comic book store where the characters often hang out?",
    options: ["Nerd Haven", "Geek World", "Stuart's Comics", "Comic Galaxy"],
    correctAnswer: 2
},
{
    question: "Which character briefly worked as a waitress at The Cheesecake Factory?",
    options: ["Penny", "Bernadette", "Amy", "Emily"],
    correctAnswer: 1
},
{
    question: "What is the name of Howard and Bernadette's son?",
    options: ["Michael", "David", "Halley", "George"],
    correctAnswer: 2
},
{
    question: "What is the name of Sheldon's favorite online multiplayer game?",
    options: ["World of Warcraft", "Halo", "Call of Duty", "Counter-Strike"],
    correctAnswer: 0
},
{
    question: "What is the title of the children's science show that Sheldon and Amy host?",
    options: ["Science Explorers", "Fun with Flags", "Physics Phun", "Geeky Adventures"],
    correctAnswer: 1
},
{
    question: "What is the name of Leonard's high school bully who appears in a few episodes?",
    options: ["Will Wheaton", "Barry Kripke", "Leslie Winkle", "Jimmy Speckerman"],
    correctAnswer: 3
},
{
    question: "Which character is known for his distinctive wardrobe, including his collection of colorful belt buckles?",
    options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
    correctAnswer: 2
},
{
    question: "What is the name of Penny's pharmaceutical sales job?",
    options: ["Pfizer Sales Rep", "Zynerma Pharmaceuticals", "Caltech Sales Associate", "Bernadette's Pharmaceuticals"],
    correctAnswer: 1
},
{
    question: "What is the name of Howard's space mission that goes to the International Space Station?",
    options: ["Apollo 13", "Discovery 7", "Expedition 42", "Voyager 1"],
    correctAnswer: 2
},
{
    question: "Which character has a mother who is often heard but never seen on the show?",
    options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
    correctAnswer: 2
},
{
    question: "Which character is an accomplished musician and plays various musical instruments throughout the series?",
    options: ["Penny", "Rajesh Koothrappali", "Sheldon Cooper", "Howard Wolowitz"],
    correctAnswer: 1
},

]
},
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
