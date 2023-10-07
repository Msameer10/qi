const quizData = [
{
quizName: "Quiz 1",
timeLimit: 150,
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
quizName: "Electronics",
timeLimit: 200,
questions: [
    {
        question: "What does LED stand for in electronics?",
        options: ["Light Emitting Diode", "Low Energy Device", "Long Electrical Delay", "Light Emitting Device"],
        answer: "Light Emitting Diode",
        explanation: "LED stands for Light Emitting Diode."
    },
    {
        question: "What is the basic unit of resistance in electronics?",
        options: ["Watt", "Ampere", "Ohm", "Volt"],
        answer: "Ohm",
        explanation: "The basic unit of resistance in electronics is the Ohm (Ω)."
    },
    {
        question: "Which component stores electrical energy in an electronic circuit?",
        options: ["Resistor", "Transistor", "Inductor", "Capacitor"],
        answer: "Capacitor",
        explanation: "A capacitor is used to store electrical energy in an electronic circuit."
    },
    {
        question: "What is the process of converting analog signals into digital data called?",
        options: ["Amplification", "Modulation", "Analog Conversion", "Analog-to-Digital Conversion"],
        answer: "Analog-to-Digital Conversion",
        explanation: "The process of converting analog signals into digital data is called Analog-to-Digital Conversion (ADC)."
    },
    {
        question: "Which electronic component amplifies or increases the strength of electrical signals?",
        options: ["Resistor", "Inductor", "Capacitor", "Transistor"],
        answer: "Transistor",
        explanation: "A transistor is used to amplify or increase the strength of electrical signals in electronic circuits."
    },
    {
        question: "What is the purpose of a diode in electronics?",
        options: ["To store energy", "To amplify signals", "To control voltage", "To allow current flow in one direction"],
        answer: "To allow current flow in one direction",
        explanation: "A diode allows current to flow in one direction while blocking it in the opposite direction."
    },
    {
        question: "What is the SI unit of electrical current?",
        options: ["Ohm", "Volt", "Ampere", "Watt"],
        answer: "Ampere",
        explanation: "The SI unit of electrical current is the Ampere (A)."
    },
    {
        question: "Which electronic component is commonly used to control the flow of current in a circuit?",
        options: ["Capacitor", "Inductor", "Resistor", "Transistor"],
        answer: "Transistor",
        explanation: "A transistor is commonly used to control the flow of current in electronic circuits."
    },
    {
        question: "What is the primary function of a resistor in an electronic circuit?",
        options: ["Amplify signals", "Store electrical energy", "Control current flow", "Generate magnetic fields"],
        answer: "Control current flow",
        explanation: "The primary function of a resistor in an electronic circuit is to control the flow of current."
    },
    {
        question: "What type of component is used to store data in digital electronic devices?",
        options: ["Transistor", "Capacitor", "Resistor", "Memory Chip"],
        answer: "Memory Chip",
        explanation: "Memory chips are used to store data in digital electronic devices."
    },
    {
        question: "What is the basic unit of capacitance in electronics?",
        options: ["Ampere", "Ohm", "Watt", "Farad"],
        answer: "Farad",
        explanation: "The basic unit of capacitance in electronics is the Farad (F)."
    },
    {
        question: "In digital electronics, what does CPU stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Program Unit"],
        answer: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit in digital electronics."
    },
    {
        question: "What does PCB stand for in electronics?",
        options: ["Printed Circuit Board", "Programmable Control Board", "Power Control Block", "Processor Circuit Base"],
        answer: "Printed Circuit Board",
        explanation: "PCB stands for Printed Circuit Board in electronics."
    },
    {
        question: "What type of component is commonly used to store a small amount of data that persists even when the power is turned off?",
        options: ["Transistor", "Capacitor", "Resistor", "EEPROM"],
        answer: "EEPROM",
        explanation: "Electrically Erasable Programmable Read-Only Memory (EEPROM) is used to store small amounts of persistent data."
    },
    {
        question: "Which electronic component is used to change the voltage level of an AC signal?",
        options: ["Transformer", "Transistor", "Capacitor", "Resistor"],
        answer: "Transformer",
        explanation: "A transformer is used to change the voltage level of an AC signal in electronics."
    },
    {
        question: "What is the process of converting digital data into analog signals called?",
        options: ["Digital Conversion", "Modulation", "Analog Transformation", "Amplification"],
        answer: "Modulation",
        explanation: "The process of converting digital data into analog signals is called modulation."
    },
    {
        question: "Which electronic component is used to create a temporary storage location for data in microprocessors?",
        options: ["Capacitor", "Inductor", "Memory Chip", "Transistor"],
        answer: "Memory Chip",
        explanation: "Memory chips are used to create temporary storage locations for data in microprocessors."
    },
    {
        question: "What is the purpose of a fuse in an electrical circuit?",
        options: ["To store energy", "To control voltage", "To protect against overcurrent", "To amplify signals"],
        answer: "To protect against overcurrent",
        explanation: "Fuses are used in electrical circuits to protect against overcurrent and prevent damage to components."
    },
    {
        question: "What is the SI unit of electrical voltage?",
        options: ["Watt", "Ampere", "Ohm", "Volt"],
        answer: "Volt",
        explanation: "The SI unit of electrical voltage is the Volt (V)."
    },
    {
        question: "What does AC stand for in the context of electrical power?",
        options: ["Alternating Current", "Amplified Current", "Analog Control", "Active Circuit"],
        answer: "Alternating Current",
        explanation: "AC stands for Alternating Current in the context of electrical power."
    },
    {
        question: "What is the basic unit of frequency in electronics?",
        options: ["Watt", "Ampere", "Hertz", "Ohm"],
        answer: "Hertz",
        explanation: "The basic unit of frequency in electronics is the Hertz (Hz)."
    },
    {
        question: "What does DC stand for in the context of electrical power?",
        options: ["Direct Circuit", "Digital Control", "Dynamic Current", "Direct Current"],
        answer: "Direct Current",
        explanation: "DC stands for Direct Current in the context of electrical power."
    },
    {
        question: "Which electronic component is used to amplify and switch electronic signals?",
        options: ["Resistor", "Transistor", "Capacitor", "Inductor"],
        answer: "Transistor",
        explanation: "Transistors are used to amplify and switch electronic signals in circuits."
    },
    {
        question: "What type of component is commonly used to store data in a volatile form that is lost when the power is turned off?",
        options: ["Transistor", "Capacitor", "Resistor", "RAM"],
        answer: "RAM",
        explanation: "Random Access Memory (RAM) is used to store data in a volatile form that is lost when the power is turned off."
    },
    {
        question: "What is the purpose of an inductor in an electronic circuit?",
        options: ["Amplify signals", "Store electrical energy", "Control current flow", "Generate magnetic fields"],
        answer: "Generate magnetic fields",
        explanation: "Inductors are used to generate magnetic fields in electronic circuits."
    }
]


},
{
    quizName: "Random",
    timeLimit: 30, // Correct time limit for the "Random" quiz
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
{
    quizName: "The Big Bang Theory",
    timeLimit: 60,
    questions: [
    {
        question: "Who is known for his catchphrase 'Bazinga!'?",
        options: ["Sheldon Cooper", "Howard Wolowitz", "Rajesh Koothrappali", "Leonard Hofstadter"],
        answer: "Sheldon Cooper",
        explanation: "Sheldon Cooper is known for his catchphrase 'Bazinga!'"
    },
    {
        question: "What is the name of the actress who plays Penny?",
        options: ["Kaley Cuoco", "Mayim Bialik", "Melissa Rauch", "Sara Gilbert"],
        answer: "Kaley Cuoco",
        explanation: "Kaley Cuoco plays the character Penny."
    },
    {
        question: "Which character has a Ph.D. in astrophysics?",
        options: ["Penny", "Rajesh Koothrappali", "Sheldon Cooper", "Howard Wolowitz"],
        answer: "Rajesh Koothrappali",
        explanation: "Rajesh Koothrappali has a Ph.D. in astrophysics."
    },
    {
        question: "What is the name of Howard's wife?",
        options: ["Amy", "Emily", "Bernadette", "Leslie"],
        answer: "Bernadette",
        explanation: "Bernadette is the name of Howard's wife."
    },
    {
        question: "What is Sheldon's favorite spot to sit on the couch?",
        options: ["The middle cushion", "The left end", "The right end", "Anywhere"],
        answer: "The left end",
        explanation: "Sheldon's favorite spot on the couch is the left end."
    },
    {
        question: "Which comic book character is a favorite of Sheldon?",
        options: ["Superman", "Batman", "Spider-Man", "Wonder Woman"],
        answer: "Batman",
        explanation: "Sheldon's favorite comic book character is Batman."
    },
    {
        question: "What is the name of the university where the main characters work?",
        options: ["Caltech", "MIT", "Stanford", "Harvard"],
        answer: "Caltech",
        explanation: "The main characters work at Caltech."
    },
    {
        question: "What is Raj's inability to speak to women unless he's drunk called?",
        options: ["Shy Syndrome", "Mute Mode", "Silent Disorder", "Selective Mutism"],
        answer: "Selective Mutism",
        explanation: "Raj's inability to speak to women unless he's drunk is called Selective Mutism."
    },
    {
        question: "What is the name of Howard's aerospace company?",
        options: ["AerospaceTech", "Rocket Science Inc.", "Wolowitz Industries", "Caltech Aerospace"],
        answer: "Wolowitz Industries",
        explanation: "Howard's aerospace company is called Wolowitz Industries."
    },
    {
        question: "What is the title of the theme song for 'The Big Bang Theory'?",
        options: ["'Science Is Fun'", "'Geeky Groove'", "'Nerds Rule'", "'The History of Everything'"],
        answer: "'The History of Everything'",
        explanation: "The theme song for 'The Big Bang Theory' is titled 'The History of Everything.'"
    },
    {
        question: "What is Penny's last name?",
        options: ["Smith", "Johnson", "Hofstadter", "Unknown"],
        answer: "Unknown",
        explanation: "Penny's last name is not revealed in the series."
    },
    {
        question: "What is Sheldon's favorite video game?",
        options: ["Call of Duty", "World of Warcraft", "Halo", "Minecraft"],
        answer: "World of Warcraft",
        explanation: "Sheldon's favorite video game is World of Warcraft."
    },
    {
        question: "What is the name of Raj's dog?",
        options: ["Buddy", "Cinnamon", "Rover", "Comet"],
        answer: "Cinnamon",
        explanation: "Raj's dog is named Cinnamon."
    },
    {
        question: "Which character is an engineer who designs spacecraft?",
        options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
        answer: "Howard Wolowitz",
        explanation: "Howard Wolowitz is an engineer who designs spacecraft."
    },
    {
        question: "What is the name of Sheldon's roommate before Leonard?",
        options: ["Barry Kripke", "Stuart Bloom", "Howard Wolowitz", "Dennis Kim"],
        answer: "Dennis Kim",
        explanation: "Dennis Kim was Sheldon's roommate before Leonard."
    },
    {
        question: "What is the name of Amy's boyfriend from the beginning of the series?",
        options: ["Stuart", "Wil Wheaton", "Zack", "Dave"],
        answer: "Zack",
        explanation: "Amy's boyfriend from the beginning of the series is Zack."
    },
    {
        question: "What is the name of Penny's ex-boyfriend who was a musician?",
        options: ["David", "Kurt", "Zack", "Dave"],
        answer: "Dave",
        explanation: "Penny's ex-boyfriend who was a musician is named Dave."
    },
    {
        question: "Which character has a twin sister named Missy?",
        options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
        answer: "Sheldon Cooper",
        explanation: "Sheldon Cooper has a twin sister named Missy."
    },
    {
        question: "What does Sheldon always knock three times before doing?",
        options: ["Entering rooms", "Sitting in his spot", "Speaking to Penny", "Playing video games"],
        answer: "Entering rooms",
        explanation: "Sheldon always knocks three times before entering rooms."
    },
    {
        question: "What does Penny do for a living at the beginning of the series?",
        options: ["Waitress", "Actress", "Scientist", "Teacher"],
        answer: "Waitress",
        explanation: "At the beginning of the series, Penny works as a waitress."
    },
    {
        question: "Which character is known for his love of doing magic?",
        options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
        answer: "Howard Wolowitz",
        explanation: "Howard Wolowitz is known for his love of doing magic tricks."
    },
    {
        question: "What is the name of the comic book store where the characters often hang out?",
        options: ["Nerd Haven", "Geek World", "Stuart's Comics", "Comic Galaxy"],
        answer: "Stuart's Comics",
        explanation: "The characters often hang out at Stuart's Comics, the comic book store."
    },
    {
        question: "Which character briefly worked as a waitress at The Cheesecake Factory?",
        options: ["Penny", "Bernadette", "Amy", "Emily"],
        answer: "Bernadette",
        explanation: "Bernadette briefly worked as a waitress at The Cheesecake Factory."
    },
    {
        question: "What is the name of Howard and Bernadette's son?",
        options: ["Michael", "David", "Halley", "George"],
        answer: "Halley",
        explanation: "Howard and Bernadette's son is named Halley."
    },
    {
        question: "What is the name of Sheldon's favorite online multiplayer game?",
        options: ["World of Warcraft", "Halo", "Call of Duty", "Counter-Strike"],
        answer: "World of Warcraft",
        explanation: "Sheldon's favorite online multiplayer game is World of Warcraft."
    },
    {
        question: "What is the title of the children's science show that Sheldon and Amy host?",
        options: ["Science Explorers", "Fun with Flags", "Physics Phun", "Geeky Adventures"],
        answer: "Fun with Flags",
        explanation: "Sheldon and Amy host a children's science show titled 'Fun with Flags.'"
    },
    {
        question: "What is the name of Leonard's high school bully who appears in a few episodes?",
        options: ["Will Wheaton", "Barry Kripke", "Leslie Winkle", "Jimmy Speckerman"],
        answer: "Jimmy Speckerman",
        explanation: "Leonard's high school bully who appears in a few episodes is Jimmy Speckerman."
    },
    {
        question: "Which character is known for his distinctive wardrobe, including his collection of colorful belt buckles?",
        options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
        answer: "Howard Wolowitz",
        explanation: "Howard Wolowitz is known for his distinctive wardrobe and colorful belt buckles."
    },
    {
        question: "What is the name of Penny's pharmaceutical sales job?",
        options: ["Pfizer Sales Rep", "Zynerma Pharmaceuticals", "Caltech Sales Associate", "Bernadette's Pharmaceuticals"],
        answer: "Pfizer Sales Rep",
        explanation: "Penny's pharmaceutical sales job was working as a Pfizer Sales Rep."
    },
    {
        question: "What is the name of Howard's space mission that goes to the International Space Station?",
        options: ["Apollo 13", "Discovery 7", "Expedition 42", "Voyager 1"],
        answer: "Expedition 42",
        explanation: "Howard's space mission that goes to the International Space Station is called 'Expedition 42.'"
    },
    {
        question: "Which character has a mother who is often heard but never seen on the show?",
        options: ["Sheldon Cooper", "Leonard Hofstadter", "Howard Wolowitz", "Rajesh Koothrappali"],
        answer: "Howard Wolowitz",
        explanation: "Howard Wolowitz's mother is often heard but never seen on the show."
    },
    {
        question: "Which character is an accomplished musician and plays various musical instruments throughout the series?",
        options: ["Penny", "Rajesh Koothrappali", "Sheldon Cooper", "Howard Wolowitz"],
        answer: "Rajesh Koothrappali",
        explanation: "Rajesh Koothrappali is an accomplished musician who plays various musical instruments throughout the series."
    }
]


},
{
    quizName: "The Ancient Greeks",
    timeLimit: 220,
    questions: [
    {
        question: "Who is considered the 'Father of History'?",
        options: ["Socrates", "Aristotle", "Homer", "Herodotus"],
        answer: "Herodotus",
        explanation: "Herodotus is often referred to as the 'Father of History' for his pioneering work in recording historical events."
    },
    {
        question: "Which ancient Greek philosopher is known for his method of questioning and his famous quote 'I know that I am intelligent because I know that I know nothing'?",
        options: ["Plato", "Socrates", "Aristotle", "Pythagoras"],
        answer: "Socrates",
        explanation: "Socrates, the philosopher, is known for his Socratic method of questioning and the famous quote about self-awareness."
    },
    {
        question: "Who was the ancient Greek mathematician known for the Pythagorean theorem?",
        options: ["Euclid", "Archimedes", "Thales", "Pythagoras"],
        answer: "Pythagoras",
        explanation: "Pythagoras is famous for the Pythagorean theorem, which relates to the sides of a right triangle."
    },
    {
        question: "Which ancient Greek playwright is known for his tragedies, including 'Oedipus Rex' and 'Antigone'?",
        options: ["Euripides", "Aeschylus", "Sophocles", "Aristophanes"],
        answer: "Sophocles",
        explanation: "Sophocles is known for his tragic plays, and 'Oedipus Rex' and 'Antigone' are among his famous works."
    },
    {
        question: "Who was the ancient Greek philosopher and student of Socrates who later became the teacher of Aristotle?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        answer: "Plato",
        explanation: "Plato was a student of Socrates and went on to become a philosopher and teacher of Aristotle."
    },
    {
        question: "Which ancient Greek mathematician is known as the 'Father of Geometry'?",
        options: ["Euclid", "Archimedes", "Thales", "Pythagoras"],
        answer: "Euclid",
        explanation: "Euclid is known as the 'Father of Geometry' for his work 'Elements,' which laid the foundation for geometry."
    },
    {
        question: "Who was the ancient Greek philosopher known for his writings on ethics and virtue, including 'Nicomachean Ethics'?",
        options: ["Socrates", "Plato", "Aristotle", "Epicurus"],
        answer: "Aristotle",
        explanation: "Aristotle is known for his writings on ethics, virtue, and a wide range of subjects in philosophy."
    },
    {
        question: "Which ancient Greek mathematician is famous for discovering the principle of buoyancy, known as Archimedes' principle?",
        options: ["Euclid", "Archimedes", "Thales", "Pythagoras"],
        answer: "Archimedes",
        explanation: "Archimedes is known for his contributions to mathematics, physics, and engineering, including Archimedes' principle."
    },
    {
        question: "Who is the ancient Greek poet credited with composing the epic poems 'The Iliad' and 'The Odyssey'?",
        options: ["Hesiod", "Aesop", "Homer", "Pindar"],
        answer: "Homer",
        explanation: "Homer is traditionally attributed to the authorship of the epic poems 'The Iliad' and 'The Odyssey.'"
    },
    {
        question: "Which ancient Greek philosopher founded the school of philosophy known as the 'Stoics' and emphasized the importance of virtue and reason?",
        options: ["Epicurus", "Zeno of Citium", "Chrysippus", "Diogenes of Sinope"],
        answer: "Zeno of Citium",
        explanation: "Zeno of Citium founded the Stoic school of philosophy, emphasizing virtue, reason, and living in accordance with nature."
    },
    {
        question: "What were the ancient Greek city-states collectively known as?",
        options: ["Hellenic Alliance", "Grecian Federation", "Hellenistic League", "Greek Polis"],
        answer: "Greek Polis",
        explanation: "The ancient Greek city-states were collectively known as the Greek Polis (plural: Poleis)."
    },
    {
        question: "Which ancient Greek hero is known for his role in the Trojan War and the 'Iliad'?",
        options: ["Achilles", "Odysseus", "Hector", "Perseus"],
        answer: "Achilles",
        explanation: "Achilles is a famous Greek hero known for his role in the Trojan War and as a central character in the 'Iliad' by Homer."
    },
    {
        question: "What is the name of the ancient Greek coin, often used as currency in the Mediterranean region?",
        options: ["Talent", "Drachma", "Stater", "Obol"],
        answer: "Drachma",
        explanation: "The drachma was the ancient Greek currency used in various city-states and regions."
    },
    {
        question: "Which ancient Greek festival, held every four years in Olympia, featured athletic competitions and the lighting of the Olympic flame?",
        options: ["Pythian Games", "Isthmian Games", "Panathenaic Games", "Olympic Games"],
        answer: "Olympic Games",
        explanation: "The Olympic Games, held in Olympia, were one of the most famous ancient Greek festivals, featuring athletic competitions."
    },
    {
        question: "What is the name of the ancient Greek theater where plays by playwrights like Sophocles and Euripides were performed?",
        options: ["Amphitheater", "Stadium", "Odeon", "Theater of Dionysus"],
        answer: "Theater of Dionysus",
        explanation: "The Theater of Dionysus in Athens was where ancient Greek plays, including tragedies and comedies, were performed."
    },
    {
        question: "Who is the ancient Greek god of the sea and earthquakes?",
        options: ["Zeus", "Poseidon", "Hades", "Apollo"],
        answer: "Poseidon",
        explanation: "Poseidon is the ancient Greek god associated with the sea and earthquakes."
    },
    {
        question: "Which ancient Greek philosopher is known for his philosophy of cynicism and his simple lifestyle?",
        options: ["Aristotle", "Epicurus", "Diogenes of Sinope", "Heraclitus"],
        answer: "Diogenes of Sinope",
        explanation: "Diogenes of Sinope is known for founding the philosophy of cynicism and living a simple and ascetic lifestyle."
    },
    {
        question: "What is the name of the ancient Greek military formation, consisting of heavily armed infantrymen in a close, rectangular formation?",
        options: ["Hoplite Phalanx", "Centuria", "Tetrarchy", "Hetairoi"],
        answer: "Hoplite Phalanx",
        explanation: "The hoplite phalanx was a key military formation in ancient Greece, composed of heavily armed infantrymen in a close, rectangular formation."
    },
    {
        question: "Which ancient Greek mathematician and inventor is known for his work on the lever, pulley, and screw, among other inventions?",
        options: ["Pythagoras", "Euclid", "Archimedes", "Thales"],
        answer: "Archimedes",
        explanation: "Archimedes made significant contributions to mathematics and engineering, including inventions like the lever and pulley."
    },
    {
        question: "What is the term for the fortified hilltop or citadel in an ancient Greek city, often housing temples and important buildings?",
        options: ["Acropolis", "Agora", "Stoa", "Pnyx"],
        answer: "Acropolis",
        explanation: "The Acropolis was a fortified hilltop in ancient Greek cities, featuring important temples and structures."
    },
    {
        question: "Who is the ancient Greek goddess of wisdom, warfare, and strategic warfare?",
        options: ["Hera", "Athena", "Aphrodite", "Artemis"],
        answer: "Athena",
        explanation: "Athena is the ancient Greek goddess associated with wisdom, warfare, and strategic warfare."
    },
    {
        question: "What is the ancient Greek term for the concept of excellence, virtue, and living a balanced and harmonious life?",
        options: ["Arete", "Eudaimonia", "Hubris", "Nemesis"],
        answer: "Arete",
        explanation: "Arete represents the concept of excellence, virtue, and the pursuit of a balanced and harmonious life in ancient Greek culture."
    },
    {
        question: "Who is the ancient Greek hero known for his cleverness and cunning, especially during the Trojan War?",
        options: ["Perseus", "Hector", "Achilles", "Odysseus"],
        answer: "Odysseus",
        explanation: "Odysseus is an ancient Greek hero known for his cleverness and cunning strategies, particularly during the Trojan War."
    },
    {
        question: "Which ancient Greek philosopher is known for his teachings on pleasure as the highest good and the avoidance of pain?",
        options: ["Epicurus", "Zeno of Citium", "Chrysippus", "Diogenes of Sinope"],
        answer: "Epicurus",
        explanation: "Epicurus founded the philosophy of Epicureanism, emphasizing the pursuit of pleasure and the avoidance of pain."
    },
    {
        question: "What is the term for the Greek city-state's marketplace, often serving as a center of economic, social, and political activity?",
        options: ["Agora", "Acropolis", "Stoa", "Pnyx"],
        answer: "Agora",
        explanation: "The Agora was the marketplace of the Greek city-state, serving as a hub for economic, social, and political interactions."
    },
    {
        question: "Which ancient Greek historian is known for his writings on the Peloponnesian War between Athens and Sparta?",
        options: ["Herodotus", "Thucydides", "Xenophon", "Plutarch"],
        answer: "Thucydides",
        explanation: "Thucydides is known for his historical account of the Peloponnesian War, providing insights into the conflict between Athens and Sparta."
    },
    {
        question: "What is the ancient Greek term for the concept of human flourishing, happiness, and living a life of virtue and well-being?",
        options: ["Arete", "Eudaimonia", "Hubris", "Nemesis"],
        answer: "Eudaimonia",
        explanation: "Eudaimonia represents the concept of human flourishing, happiness, and living a life of virtue and well-being in Greek philosophy."
    },
    {
        question: "Who is the ancient Greek playwright known for his comedies, including 'Lysistrata' and 'The Clouds'?",
        options: ["Euripides", "Aeschylus", "Sophocles", "Aristophanes"],
        answer: "Aristophanes",
        explanation: "Aristophanes is known for his comedic plays, including 'Lysistrata' and 'The Clouds.'"
    },
    {
        question: "What is the term for the process of purifying and cleansing oneself, often before entering a sacred space or participating in religious rituals in ancient Greece?",
        options: ["Catharsis", "Purgation", "Ritualization", "Purification"],
        answer: "Purification",
        explanation: "Purification is the process of cleansing and purifying oneself before entering sacred spaces or engaging in religious rituals in ancient Greece."
    },
    {
        question: "Who is the ancient Greek philosopher known for his paradoxes and the saying 'You cannot step into the same river twice'?",
        options: ["Heraclitus", "Parmenides", "Empedocles", "Anaximander"],
        answer: "Heraclitus",
        explanation: "Heraclitus is known for his philosophical paradoxes and the idea that you cannot step into the same river twice."
    }
]

},
{
    quizName: "Islamic History",
    timeLimit: 150,
    questions: [
    {
        question: "Who was the last prophet?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Muhammad"],
        answer: "Muhammad",
        explanation: "Muhammad is regarded as the founder of Islam and the last prophet."
    },
    {
        question: "Which battle in 624 CE was a significant early battle in Islamic history and resulted in a Muslim victory?",
        options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Karbala"],
        answer: "Battle of Badr",
        explanation: "The Battle of Badr in 624 CE was a significant early battle in Islamic history and resulted in a Muslim victory."
    },
    {
        question: "What is the term for the migration of Muhammad and his followers from Mecca to Medina in 622 CE?",
        options: ["Hijra", "Shahada", "Salat", "Zakat"],
        answer: "Hijra",
        explanation: "The Hijra refers to the migration of Muhammad and his followers from Mecca to Medina in 622 CE."
    },
    {
        question: "Who was the first caliph (successor) after the death of Prophet Muhammad?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan"],
        answer: "Abu Bakr",
        explanation: "Abu Bakr was the first caliph and the closest companion of Prophet Muhammad."
    },
    {
        question: "Which caliph is known for the compilation of the Quran into a single book during his reign?",
        options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan", "Abu Bakr"],
        answer: "Uthman ibn Affan",
        explanation: "Caliph Uthman ibn Affan is known for the compilation of the Quran into a single book."
    },
    {
        question: "Which famous city was conquered by the Muslims in 637 CE, marking a significant victory in Islamic history?",
        options: ["Mecca", "Jerusalem", "Damascus", "Baghdad"],
        answer: "Jerusalem",
        explanation: "Jerusalem was conquered by the Muslims in 637 CE, marking a significant victory."
    },
    {
        question: "What is the term for the religious and legal system in Islam, often referred to as Islamic law?",
        options: ["Sunnah", "Ijma", "Fiqh", "Sharia"],
        answer: "Sharia",
        explanation: "Sharia is the religious and legal system in Islam, often governing matters of faith and practice."
    },
    {
        question: "Who was the founder of the Umayyad Caliphate, which became one of the early Islamic empires?",
        options: ["Ali ibn Abi Talib", "Umar ibn al-Khattab", "Uthman ibn Affan", "Muawiya I"],
        answer: "Muawiya I",
        explanation: "Muawiya I is considered the founder of the Umayyad Caliphate."
    },
    {
        question: "Who is known as the 'Sword of Islam' for his military campaigns during the early Islamic expansion?",
        options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Khalid ibn al-Walid", "Abu Bakr"],
        answer: "Khalid ibn al-Walid",
        explanation: "Khalid ibn al-Walid is known as the 'Sword of Islam' for his military prowess."
    },
    {
        question: "Who is known for his compilation of hadith (sayings and actions of Prophet Muhammad) in the collection known as Sahih al-Bukhari?",
        options: ["Imam al-Shafi'i", "Imam Abu Hanifa", "Imam Malik", "Imam al-Bukhari"],
        answer: "Imam al-Bukhari",
        explanation: "Imam al-Bukhari is known for his compilation of hadith in Sahih al-Bukhari, a highly respected collection."
    },
    {
        question: "Who was the famous Islamic scholar and historian known for his work 'The History of the Prophets and Kings'?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Al-Masudi"],
        answer: "Al-Masudi",
        explanation: "Al-Masudi is known for his historical work 'The History of the Prophets and Kings.'"
    },
    {
        question: "Which Islamic empire is known for its vast territorial expansion across three continents, including Spain, India, and Africa?",
        options: ["Mamluk Sultanate", "Safavid Empire", "Abbasid Caliphate", "Umayyad Caliphate"],
        answer: "Umayyad Caliphate",
        explanation: "The Umayyad Caliphate is known for its extensive territorial expansion across Spain, India, and Africa."
    },
    {
        question: "Who was the Islamic scholar and philosopher known for his work 'The Incoherence of the Philosophers'?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Al-Masudi"],
        answer: "Ibn Rushd (Averroes)",
        explanation: "Ibn Rushd, known as Averroes in the West, is known for his work 'The Incoherence of the Philosophers.'"
    },
    {
        question: "Which Islamic dynasty ruled the Indian subcontinent and is known for its architectural achievements, including the Taj Mahal?",
        options: ["Ottoman Empire", "Mughal Empire", "Seljuk Empire", "Safavid Empire"],
        answer: "Mughal Empire",
        explanation: "The Mughal Empire ruled the Indian subcontinent and is famous for the construction of the Taj Mahal."
    },
    {
        question: "Which Islamic empire is known for its contributions to science, medicine, and mathematics during the Golden Age of Islam?",
        options: ["Mamluk Sultanate", "Safavid Empire", "Abbasid Caliphate", "Umayyad Caliphate"],
        answer: "Abbasid Caliphate",
        explanation: "The Abbasid Caliphate is known for its contributions to science, medicine, and mathematics during the Golden Age of Islam."
    },
    {
        question: "Who was the Islamic scholar and polymath known for his contributions to various fields, including optics, mathematics, and astronomy?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Ibn al-Haytham"],
        answer: "Ibn al-Haytham",
        explanation: "Ibn al-Haytham, also known as Alhazen, made significant contributions to optics, mathematics, and astronomy."
    },
    {
        question: "Which Islamic empire is known for its distinct architectural style, including the extensive use of tiles and calligraphy in its buildings?",
        options: ["Mamluk Sultanate", "Safavid Empire", "Abbasid Caliphate", "Umayyad Caliphate"],
        answer: "Safavid Empire",
        explanation: "The Safavid Empire is known for its distinctive architectural style, including the use of tiles and calligraphy."
    },
    {
        question: "Who was the Islamic scholar and philosopher known for his work 'The Book of Healing'?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Al-Masudi"],
        answer: "Ibn Rushd (Averroes)",
        explanation: "Ibn Rushd, known as Averroes in the West, is known for his work 'The Book of Healing.'"
    },
    {
        question: "Which Islamic empire is known for its military achievements, including the conquest of Constantinople in 1453?",
        options: ["Ottoman Empire", "Mughal Empire", "Seljuk Empire", "Safavid Empire"],
        answer: "Ottoman Empire",
        explanation: "The Ottoman Empire is known for its military conquests, including the capture of Constantinople in 1453."
    },
    {
        question: "Which Islamic scholar and polymath is known for his work 'Muqaddimah' (Prolegomena) and contributions to historiography?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Al-Masudi"],
        answer: "Ibn Khaldun",
        explanation: "Ibn Khaldun is known for his work 'Muqaddimah' and contributions to the field of historiography."
    },
    {
        question: "Which Islamic empire ruled over Egypt and Syria and is known for its military campaigns during the Crusades?",
        options: ["Mamluk Sultanate", "Safavid Empire", "Abbasid Caliphate", "Umayyad Caliphate"],
        answer: "Mamluk Sultanate",
        explanation: "The Mamluk Sultanate ruled over Egypt and Syria and played a role in the Crusades."
    },
    {
        question: "Who was the Islamic scholar and philosopher known for his contributions to ethics and political philosophy in his work 'The Virtuous City'?",
        options: ["Ibn Khaldun", "Ibn Rushd (Averroes)", "Al-Farabi", "Al-Masudi"],
        answer: "Al-Farabi",
        explanation: "Al-Farabi is known for his contributions to ethics and political philosophy in 'The Virtuous City.'"
    },
    {
        question: "Which Islamic empire is known for its contributions to astronomy and the construction of the Ulugh Beg Observatory?",
        options: ["Ottoman Empire", "Mughal Empire", "Seljuk Empire", "Timurid Empire"],
        answer: "Timurid Empire",
        explanation: "The Timurid Empire is known for its contributions to astronomy and the Ulugh Beg Observatory."
    }
]


},
{
    quizName: "Physics I",
    timeLimit: 200,
    questions: [
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Watt", "Joule", "Pascal"],
        answer: "Newton",
        explanation: "The SI unit of force is the Newton (N)."
    },
    {
        question: "What is the acceleration due to gravity on the surface of the Earth?",
        options: ["9.8 m/s²", "6.2 m/s²", "11.3 m/s²", "5.5 m/s²"],
        answer: "9.8 m/s²",
        explanation: "The acceleration due to gravity on the Earth's surface is approximately 9.8 m/s²."
    },
    {
        question: "What is the law that states 'Every action has an equal and opposite reaction'?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Newton's Law of Gravitation"],
        answer: "Newton's Third Law",
        explanation: "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction."
    },
    {
        question: "What is the term for the resistance of an object to a change in its state of motion?",
        options: ["Velocity", "Acceleration", "Inertia", "Friction"],
        answer: "Inertia",
        explanation: "Inertia is the property of an object to resist changes in its state of motion."
    },
    {
        question: "What is the SI unit of electric charge?",
        options: ["Ohm", "Coulomb", "Volt", "Ampere"],
        answer: "Coulomb",
        explanation: "The SI unit of electric charge is the Coulomb (C)."
    },
    {
        question: "What is the energy of motion called?",
        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
        answer: "Kinetic energy",
        explanation: "The energy associated with the motion of an object is called kinetic energy."
    },
    {
        question: "Which type of electromagnetic wave has the shortest wavelength?",
        options: ["Microwaves", "X-rays", "Radio waves", "Infrared waves"],
        answer: "X-rays",
        explanation: "X-rays have the shortest wavelength among these options."
    },
    {
        question: "What is the unit of electrical resistance?",
        options: ["Ampere", "Coulomb", "Ohm", "Volt"],
        answer: "Ohm",
        explanation: "The Ohm (Ω) is the SI unit of electrical resistance."
    },
    {
        question: "What is the law that states 'The total energy of an isolated system remains constant'?",
        options: ["Newton's First Law", "Newton's Second Law", "Law of Conservation of Energy", "Newton's Third Law"],
        answer: "Law of Conservation of Energy",
        explanation: "The Law of Conservation of Energy states that the total energy of an isolated system remains constant over time."
    },
    {
        question: "What is the unit of electric potential difference?",
        options: ["Watt", "Joule", "Volt", "Ampere"],
        answer: "Volt",
        explanation: "The Volt (V) is the SI unit of electric potential difference."
    },
    {
        question: "Which law of thermodynamics states that 'Energy cannot be created or destroyed, only converted from one form to another'?",
        options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"],
        answer: "First Law of Thermodynamics",
        explanation: "The First Law of Thermodynamics, also known as the Law of Conservation of Energy, states that energy cannot be created or destroyed."
    },
    {
        question: "What is the unit of electric current?",
        options: ["Watt", "Joule", "Volt", "Ampere"],
        answer: "Ampere",
        explanation: "The Ampere (A) is the SI unit of electric current."
    },
    {
        question: "What is the term for the bending of light as it passes from one medium to another?",
        options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
        answer: "Refraction",
        explanation: "Refraction is the bending of light as it passes from one medium to another."
    },
    {
        question: "What is the SI unit of work and energy?",
        options: ["Watt", "Joule", "Volt", "Ampere"],
        answer: "Joule",
        explanation: "The Joule (J) is the SI unit of work and energy."
    },
    {
        question: "Which fundamental force is responsible for holding the nucleus of an atom together?",
        options: ["Gravitational force", "Electromagnetic force", "Weak nuclear force", "Strong nuclear force"],
        answer: "Strong nuclear force",
        explanation: "The strong nuclear force is responsible for holding the nucleus of an atom together."
    },
    {
        question: "What is the term for the force that opposes the motion of objects through a fluid, such as air or water?",
        options: ["Friction", "Tension", "Gravity", "Inertia"],
        answer: "Friction",
        explanation: "Friction is the force that opposes the motion of objects through a fluid or along a surface."
    },
    {
        question: "What is the SI unit of power?",
        options: ["Newton", "Watt", "Joule", "Pascal"],
        answer: "Watt",
        explanation: "The SI unit of power is the Watt (W)."
    },
    {
        question: "What is the term for the rate of change of velocity of an object with respect to time?",
        options: ["Velocity", "Acceleration", "Inertia", "Friction"],
        answer: "Acceleration",
        explanation: "Acceleration is the rate of change of velocity of an object with respect to time."
    },
    {
        question: "Which law of thermodynamics states that 'Heat energy flows naturally from hotter objects to colder objects'?",
        options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"],
        answer: "Second Law of Thermodynamics",
        explanation: "The Second Law of Thermodynamics states that heat energy flows naturally from hotter objects to colder objects."
    },
    {
        question: "What is the SI unit of frequency?",
        options: ["Hertz", "Watt", "Joule", "Pascal"],
        answer: "Hertz",
        explanation: "The SI unit of frequency is the Hertz (Hz)."
    },
    {
        question: "What is the term for the force that opposes the relative motion or tendency of such motion of two surfaces in contact?",
        options: ["Gravity", "Inertia", "Friction", "Tension"],
        answer: "Friction",
        explanation: "Friction is the force that opposes the relative motion of two surfaces in contact."
    },
    {
        question: "What is the term for the force that pulls objects toward the center of the Earth?",
        options: ["Friction", "Tension", "Gravity", "Inertia"],
        answer: "Gravity",
        explanation: "Gravity is the force that pulls objects toward the center of the Earth."
    },
    {
        question: "What is the term for a measure of an object's resistance to changes in its rotational motion?",
        options: ["Velocity", "Acceleration", "Inertia", "Friction"],
        answer: "Inertia",
        explanation: "Inertia is a measure of an object's resistance to changes in its rotational motion."
    },
    {
        question: "What is the term for the transfer of thermal energy between two objects due to a temperature difference?",
        options: ["Conduction", "Convection", "Radiation", "Refraction"],
        answer: "Conduction",
        explanation: "Conduction is the transfer of thermal energy between two objects due to a temperature difference."
    },
    {
    question: "What is the term for the phenomenon where a vibrating object produces sound waves in the air?",
    options: ["Resonance", "Refraction", "Diffraction", "Acoustics"],
    answer: "Acoustics",
    explanation: "Acoustics is the study of sound, and it involves the phenomenon where a vibrating object produces sound waves in the air."
    }
]


},
{
    quizName: "Chemistry I",
    timeLimit: 200,
    questions: [
    {
        question: "What is the chemical symbol for the element oxygen?",
        options: ["O", "O2", "OX", "OI"],
        answer: "O",
        explanation: "The chemical symbol for oxygen is O."
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O2", "HO", "H2O", "H3O"],
        answer: "H2O",
        explanation: "The chemical formula for water is H2O, indicating two hydrogen atoms and one oxygen atom."
    },
    {
        question: "What is the process by which a gas changes directly into a solid without first becoming a liquid?",
        options: ["Condensation", "Sublimation", "Evaporation", "Melting"],
        answer: "Sublimation",
        explanation: "Sublimation is the phase transition where a substance changes from a gas directly to a solid."
    },
    {
        question: "What is the smallest unit of an element that retains the chemical properties of that element?",
        options: ["Molecule", "Compound", "Atom", "Ion"],
        answer: "Atom",
        explanation: "An atom is the smallest unit of an element that retains its chemical properties."
    },
    {
        question: "What is the chemical formula for methane, a primary component of natural gas?",
        options: ["CO2", "CH4", "H2O", "N2"],
        answer: "CH4",
        explanation: "The chemical formula for methane is CH4, indicating one carbon atom bonded to four hydrogen atoms."
    },
    {
        question: "What is the process of a substance changing from a liquid to a gas at its boiling point throughout the liquid?",
        options: ["Condensation", "Sublimation", "Evaporation", "Melting"],
        answer: "Evaporation",
        explanation: "Evaporation is the process of a substance changing from a liquid to a gas at its boiling point throughout the liquid."
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Carbon Dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Methane (CH4)"],
        answer: "Nitrogen (N2)",
        explanation: "Nitrogen (N2) is the most abundant gas in Earth's atmosphere, making up about 78% of it."
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Ge", "Fe"],
        answer: "Au",
        explanation: "The chemical symbol for gold is Au."
    },
    {
        question: "What is the process of a gas changing into a liquid called?",
        options: ["Condensation", "Sublimation", "Evaporation", "Freezing"],
        answer: "Condensation",
        explanation: "Condensation is the process by which a gas changes into a liquid."
    },
    {
        question: "Which element is the most abundant in the Earth's crust?",
        options: ["Oxygen (O)", "Carbon (C)", "Silicon (Si)", "Aluminum (Al)"],
        answer: "Oxygen (O)",
        explanation: "Oxygen (O) is the most abundant element in the Earth's crust."
    },
    {
        question: "What is the chemical formula for table salt (sodium chloride)?",
        options: ["H2O", "NaCl", "CO2", "CH4"],
        answer: "NaCl",
        explanation: "The chemical formula for table salt (sodium chloride) is NaCl."
    },
    {
        question: "What is the process by which plants convert carbon dioxide, water, and sunlight into glucose and oxygen?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis is the process by which plants convert carbon dioxide, water, and sunlight into glucose and oxygen."
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["CO", "CO3", "CO2", "C2O"],
        answer: "CO2",
        explanation: "The chemical formula for carbon dioxide is CO2."
    },
    {
        question: "Which element is commonly used as a fuel in balloons and airships due to its low density?",
        options: ["Helium (He)", "Hydrogen (H)", "Oxygen (O)", "Neon (Ne)"],
        answer: "Helium (He)",
        explanation: "Helium (He) is commonly used as a fuel in balloons and airships due to its low density and non-flammability."
    },
    {
        question: "What is the pH value of a neutral solution?",
        options: ["0", "7", "14", "10"],
        answer: "7",
        explanation: "The pH value of a neutral solution is 7."
    },
    {
        question: "What is the chemical formula for carbon monoxide, a poisonous gas?",
        options: ["CO2", "CO3", "CO", "C2O"],
        answer: "CO",
        explanation: "The chemical formula for carbon monoxide is CO."
    },
    {
        question: "Which gas is commonly known as laughing gas and is used as an anesthetic?",
        options: ["Oxygen (O2)", "Nitrogen (N2)", "Carbon Dioxide (CO2)", "Nitrous Oxide (N2O)"],
        answer: "Nitrous Oxide (N2O)",
        explanation: "Nitrous Oxide (N2O) is commonly known as laughing gas and is used as an anesthetic."
    },
    {
        question: "What is the chemical formula for sulfuric acid, a strong mineral acid?",
        options: ["H2SO3", "H2O2", "SO4", "H2SO4"],
        answer: "H2SO4",
        explanation: "The chemical formula for sulfuric acid is H2SO4."
    },
    {
        question: "What is the chemical symbol for carbon?",
        options: ["O", "C", "Ca", "Co"],
        answer: "C",
        explanation: "The chemical symbol for carbon is C."
    },
    {
        question: "What is the chemical formula for hydrogen peroxide, a common disinfectant?",
        options: ["H2O", "NaOH", "H2O2", "CH3OH"],
        answer: "H2O2",
        explanation: "The chemical formula for hydrogen peroxide is H2O2."
    }
]

},
{
    quizName: "Biology I",
    timeLimit: 200,
    questions: [
    {
        question: "What is the basic structural and functional unit of life?",
        options: ["Cell", "Molecule", "Tissue", "Organ"],
        answer: "Cell",
        explanation: "The cell is the basic structural and functional unit of life."
    },
    {
        question: "Which organelle is known as the 'powerhouse' of the cell and produces energy?",
        options: ["Nucleus", "Mitochondrion", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondrion",
        explanation: "The mitochondrion is often called the 'powerhouse' of the cell because it produces energy in the form of ATP."
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to produce glucose and oxygen."
    },
    {
        question: "What molecule carries genetic information in cells?",
        options: ["RNA", "Protein", "Carbohydrate", "DNA"],
        answer: "DNA",
        explanation: "DNA (Deoxyribonucleic Acid) carries genetic information in cells."
    },
    {
        question: "What is the name of the process by which cells divide to create new cells?",
        options: ["Respiration", "Digestion", "Mitosis", "Fermentation"],
        answer: "Mitosis",
        explanation: "Mitosis is the process of cell division that results in two genetically identical daughter cells."
    },
    {
        question: "What is the fluid-filled sac in animal cells that stores water, waste products, and other cellular materials?",
        options: ["Mitochondrion", "Lysosome", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Lysosome",
        explanation: "Lysosomes are membrane-bound organelles in animal cells that contain enzymes for digestion and waste removal."
    },
    {
        question: "Which gas is essential for respiration and is taken in by organisms during breathing?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Oxygen",
        explanation: "Oxygen is essential for respiration and is taken in by organisms during breathing."
    },
    {
        question: "What is the process by which cells break down glucose to produce energy?",
        options: ["Photosynthesis", "Mitosis", "Respiration", "Fermentation"],
        answer: "Respiration",
        explanation: "Respiration is the process by which cells break down glucose to produce energy (ATP)."
    },
    {
        question: "What is the green pigment that captures light energy for photosynthesis in plant cells?",
        options: ["Chlorophyll", "Melanin", "Hemoglobin", "Keratin"],
        answer: "Chlorophyll",
        explanation: "Chlorophyll is the green pigment in plant cells responsible for capturing light energy during photosynthesis."
    },
    {
        question: "What is the process by which an organism's DNA is copied to create a complementary strand of RNA?",
        options: ["Replication", "Translation", "Transcription", "Mutation"],
        answer: "Transcription",
        explanation: "Transcription is the process by which DNA is used as a template to create a complementary RNA strand."
    },
    {
        question: "What type of RNA carries the genetic code from the nucleus to the ribosomes for protein synthesis?",
        options: ["mRNA", "tRNA", "rRNA", "siRNA"],
        answer: "mRNA",
        explanation: "mRNA (messenger RNA) carries the genetic code from the nucleus to the ribosomes for protein synthesis."
    },
    {
        question: "Which type of cell division produces gametes (sperm and egg cells) with half the number of chromosomes?",
        options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
        answer: "Meiosis",
        explanation: "Meiosis is the type of cell division that produces gametes with half the number of chromosomes (haploid cells)."
    },
    {
        question: "What is the main function of the ribosomes in a cell?",
        options: ["Energy production", "Protein synthesis", "Waste removal", "Lipid synthesis"],
        answer: "Protein synthesis",
        explanation: "Ribosomes are responsible for protein synthesis in a cell."
    },
    {
        question: "What is the outermost layer of animal cells that provides structure and regulates what enters and exits the cell?",
        options: ["Nucleus", "Cytoplasm", "Cell Membrane", "Cell Wall"],
        answer: "Cell Membrane",
        explanation: "The cell membrane is the outermost layer of animal cells that regulates the passage of substances in and out of the cell."
    },
    {
        question: "Which of the following is NOT a macromolecule in cells: protein, lipid, carbohydrate, or nucleotide?",
        options: ["Protein", "Lipid", "Carbohydrate", "Nucleotide"],
        answer: "Nucleotide",
        explanation: "Nucleotide is not a macromolecule; it is the building block of nucleic acids like DNA and RNA."
    },
    {
        question: "What is the term for the movement of water across a semi-permeable membrane from an area of high concentration to low concentration?",
        options: ["Diffusion", "Osmosis", "Active Transport", "Filtration"],
        answer: "Osmosis",
        explanation: "Osmosis is the movement of water across a semi-permeable membrane from high to low concentration."
    },
    {
        question: "What is the name of the process by which cells engulf and digest large particles or other cells?",
        options: ["Diffusion", "Osmosis", "Endocytosis", "Exocytosis"],
        answer: "Endocytosis",
        explanation: "Endocytosis is the process by which cells engulf and digest large particles or other cells."
    },
    {
        question: "Which of the following is an example of an autotrophic organism: a lion, a mushroom, a tree, or a human?",
        options: ["Lion", "Mushroom", "Tree", "Human"],
        answer: "Tree",
        explanation: "A tree is an example of an autotrophic organism because it can produce its own food through photosynthesis."
    },
    {
        question: "What is the function of the nucleus in a eukaryotic cell?",
        options: ["Energy production", "Protein synthesis", "Storage of genetic material", "Digestion"],
        answer: "Storage of genetic material",
        explanation: "The nucleus of a eukaryotic cell stores the genetic material (DNA) of the cell."
    },
    {
        question: "Which of the following is a characteristic of prokaryotic cells: membrane-bound nucleus, no membrane-bound organelles, multicellular, or complex internal structure?",
        options: ["Membrane-bound nucleus", "No membrane-bound organelles", "Multicellular", "Complex internal structure"],
        answer: "No membrane-bound organelles",
        explanation: "Prokaryotic cells lack membrane-bound organelles and a membrane-bound nucleus."
    },
    {
        question: "What is the name of the process by which plants release oxygen and remove carbon dioxide during the day?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis in plants involves the release of oxygen and removal of carbon dioxide during the day."
    },
    {
        question: "Which organelle is responsible for detoxifying harmful substances in liver cells?",
        options: ["Mitochondrion", "Lysosome", "Ribosome", "Smooth Endoplasmic Reticulum"],
        answer: "Smooth Endoplasmic Reticulum",
        explanation: "The smooth endoplasmic reticulum is involved in detoxification in liver cells."
    },
    {
        question: "What is the primary function of the Golgi apparatus in a cell?",
        options: ["Protein synthesis", "Energy production", "Waste removal", "Protein modification and packaging"],
        answer: "Protein modification and packaging",
        explanation: "The Golgi apparatus is responsible for modifying and packaging proteins for transport within the cell or secretion."
    },
    {
        question: "Which of the following is a monosaccharide (simple sugar): glucose, cellulose, glycogen, or starch?",
        options: ["Glucose", "Cellulose", "Glycogen", "Starch"],
        answer: "Glucose",
        explanation: "Glucose is a monosaccharide and a simple sugar."
    },
    {
        question: "What is the process by which an organism gradually changes over time through natural selection?",
        options: ["Evolution", "Adaptation", "Mutation", "Hybridization"],
        answer: "Evolution",
        explanation: "Evolution is the process by which organisms gradually change over time, driven by natural selection and genetic variation."
    }
]

},
{
    quizName: "Anatomy",
    timeLimit: 60,
    questions: [
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Skin", "Liver"],
        answer: "Skin",
        explanation: "The skin is the body's largest organ, serving as a protective barrier and regulating temperature."
    },
    {
        question: "Which bone is often referred to as the 'funny bone' and can cause a tingling sensation when bumped?",
        options: ["Femur", "Radius", "Tibia", "Humerus"],
        answer: "Humerus",
        explanation: "The humerus bone in the upper arm is often called the 'funny bone' and can cause a tingling sensation when struck."
    },
    {
        question: "What is the medical term for the voice box?",
        options: ["Esophagus", "Larynx", "Pharynx", "Trachea"],
        answer: "Larynx",
        explanation: "The larynx, commonly known as the voice box, is responsible for voice production and protecting the airway during swallowing."
    },
    {
        question: "Which part of the human brain is responsible for regulating vital functions such as breathing and heart rate?",
        options: ["Cerebellum", "Frontal Lobe", "Hippocampus", "Medulla Oblongata"],
        answer: "Medulla Oblongata",
        explanation: "The medulla oblongata, located in the brainstem, controls vital functions such as breathing, heart rate, and blood pressure."
    },
    {
        question: "What is the name of the small, finger-like projections in the small intestine that increase its surface area for nutrient absorption?",
        options: ["Villi", "Cilia", "Papillae", "Fimbriae"],
        answer: "Villi",
        explanation: "Villi are tiny, finger-like projections in the small intestine that increase its surface area for efficient nutrient absorption."
    },
    {
        question: "Which gland in the human body regulates metabolism and energy production?",
        options: ["Thyroid Gland", "Adrenal Gland", "Pancreas", "Pituitary Gland"],
        answer: "Thyroid Gland",
        explanation: "The thyroid gland plays a key role in regulating metabolism and energy production in the body."
    },
    {
        question: "What is the medical term for the thigh bone?",
        options: ["Tibia", "Femur", "Fibula", "Patella"],
        answer: "Femur",
        explanation: "The femur is the thigh bone, the longest and strongest bone in the human body."
    },
    {
        question: "Which blood vessels carry oxygenated blood away from the heart to the body's tissues?",
        options: ["Veins", "Arteries", "Capillaries", "Venules"],
        answer: "Arteries",
        explanation: "Arteries carry oxygenated blood away from the heart to supply the body's tissues with oxygen and nutrients."
    },
    {
        question: "What is the name of the spiral-shaped, inner ear structure responsible for hearing and balance?",
        options: ["Cochlea", "Semicircular Canals", "Eardrum", "Ossicles"],
        answer: "Cochlea",
        explanation: "The cochlea is the spiral-shaped structure in the inner ear that plays a crucial role in hearing."
    },
    {
        question: "Which muscle is known as the 'heart muscle' and is responsible for pumping blood throughout the body?",
        options: ["Biceps Brachii", "Quadriceps", "Skeletal Muscle", "Cardiac Muscle"],
        answer: "Cardiac Muscle",
        explanation: "Cardiac muscle, found in the heart, is responsible for pumping blood throughout the circulatory system."
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

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  // Show the quiz container
  quizContainer.style.display = "block";
  quizResults.style.display = "none";

  // Get the time limit for the current quiz
  const timeLimit = currentQuiz.timeLimit;

  // Start the timer for hard difficulty only if there's a time limit
  if (currentDifficulty === "hard" && timeLimit) {
    startTimer(timeLimit);
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
function startTimer(timeLimit) {
  let secondsLeft = timeLimit; // Use the provided time limit
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

