"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const express = require("express");
const swaggerOptions_1 = require("./swaggerOptions");
const app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
app.use('/api-docs', swaggerOptions_1.swaggerUi.serve, swaggerOptions_1.swaggerUi.setup(swaggerOptions_1.specs));
app.get('/api/liveness', (req, res) => {
    res.send('OK !!!');
});
let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let classesAvailable = [
    {
        id: newId(), title: 'Python for Everybody', author: "University of Michigan", platform: "Coursera",
        chapters: [
            {
                chapterID: 1,
                text: "Introduction to Python: Basics of programming, Python syntax, data types, variables, and basic operations."
            },
            {
                chapterID: 2,
                text: "Control Structures: Understanding loops, conditionals, and flow control in Python."
            },
            {
                chapterID: 3,
                text: "Functions and Modules: Defining functions, working with modules, and organizing code."
            },
            {
                chapterID: 4,
                text: "Data Structures: Lists, tuples, dictionaries, and sets in Python."
            },
            {
                chapterID: 5,
                text: "File Handling: Reading from and writing to files using Python."
            },
            {
                chapterID: 6,
                text: "Error Handling and Exceptions: Handling errors and exceptions gracefully in Python programs."
            },
            {
                chapterID: 7,
                text: "Introduction to Object-Oriented Programming (OOP): Classes, objects, and inheritance."
            },
            {
                chapterID: 8,
                text: "Working with APIs: Making API requests, processing data from web APIs."
            },
            {
                chapterID: 9,
                text: "Data Analysis with Python: Introduction to data manipulation, analysis, and visualization libraries."
            }
        ],
        questions: [
            {
                question: "What are the basic data types in Python?",
                answer: "The basic data types in Python include integers, floats, strings, booleans, and complex numbers."
            },
            {
                question: "How do you define a function in Python?",
                answer: "In Python, you can define a function using the 'def' keyword followed by the function name and parameters."
            },
            {
                question: "What is the purpose of using exceptions in Python?",
                answer: "Exceptions are used to handle errors and exceptional situations in Python programs, allowing graceful error handling."
            },
            {
                question: "What is OOP in Python?",
                answer: "OOP stands for Object-Oriented Programming. It's a programming paradigm that uses 'objects' to design applications and organize code."
            },
            {
                question: "How can Python be used for data analysis?",
                answer: "Python offers various libraries like Pandas, NumPy, and Matplotlib for data manipulation, analysis, and visualization."
            }
        ]
    },
    {
        id: newId(), title: 'The Web Developer Bootcamp', author: "Colt Steele", platform: "Udemy",
        chapters: [
            {
                chapterID: 1,
                text: "Introduction to HTML and HTML5: Learn the basics of web development using HTML."
            },
            {
                chapterID: 2,
                text: "CSS and CSS3: Explore styling and layout techniques with CSS."
            },
            {
                chapterID: 3,
                text: "JavaScript Basics: Understand the fundamentals of JavaScript programming."
            },
            {
                chapterID: 4,
                text: "DOM Manipulation: Work with the Document Object Model for interactive web pages."
            },
            {
                chapterID: 5,
                text: "Backend Development with Node.js: Learn server-side JavaScript using Node.js."
            },
            {
                chapterID: 6,
                text: "Express.js and RESTful APIs: Build web applications using Express.js and RESTful APIs."
            },
            {
                chapterID: 7,
                text: "Databases and MongoDB: Explore database concepts and MongoDB for data storage."
            },
            {
                chapterID: 8,
                text: "Authentication and Security: Implement user authentication and security measures."
            },
            {
                chapterID: 9,
                text: "Frontend Frameworks (e.g., React): Dive into popular frontend frameworks for web development."
            },
            {
                chapterID: 10,
                text: "Final Projects: Apply learned skills in building real-world web applications."
            }
        ],
        questions: [
            {
                question: "What is responsive web design?",
                answer: "Responsive web design ensures web pages display well on various devices and screen sizes."
            },
            {
                question: "What are closures in JavaScript?",
                answer: "Closures are functions that remember the lexical scope in which they were defined."
            },
            {
                question: "Explain the concept of AJAX.",
                answer: "AJAX allows asynchronous communication between the client and server, enabling dynamic content loading."
            },
            {
                question: "What is the purpose of a CSS preprocessor like Sass?",
                answer: "CSS preprocessors enhance CSS by adding features like variables and nested rules for easier styling."
            },
            {
                question: "How does JavaScript differ from Java?",
                answer: "JavaScript is a scripting language primarily used for web development, while Java is a general-purpose programming language."
            },
            {
                question: "What are the benefits of using a frontend framework like React?",
                answer: "React helps in building interactive and reusable UI components for web applications."
            },
        ]
    },
    {
        id: newId(), title: 'CS50\'s Introduction to Computer Science', author: "Harvard University", platform: "edX",
        chapters: [
            {
                chapterID: 1,
                text: "Introduction to Computer Science: Overview of computer science concepts and history."
            },
            {
                chapterID: 2,
                text: "Algorithms and Data Structures: Fundamentals of algorithms and data organization."
            },
            {
                chapterID: 3,
                text: "C Programming: Basics of the C programming language."
            },
            {
                chapterID: 4,
                text: "Memory and Pointers: Understanding memory management and pointers in programming."
            },
            {
                chapterID: 5,
                text: "Web Development: Introduction to web development concepts and technologies."
            },
            {
                chapterID: 6,
                text: "Python Programming: Basics of programming using Python."
            },
            {
                chapterID: 7,
                text: "SQL and Databases: Basics of database management using SQL."
            },
            {
                chapterID: 8,
                text: "Artificial Intelligence: Introduction to AI concepts and applications."
            },
            {
                chapterID: 9,
                text: "Final Project: Implement a significant computer science project."
            }
        ],
        questions: [
            {
                question: "What are data structures?",
                answer: "Data structures are ways to organize and store data for efficient access and modification."
            },
            {
                question: "What is the difference between an array and a linked list?",
                answer: "An array stores elements in contiguous memory, while a linked list uses nodes with pointers to connect elements."
            },
            {
                question: "Explain the concept of pointers in C programming.",
                answer: "Pointers are variables that store memory addresses, allowing indirect access to memory locations."
            },
            {
                question: "What is the purpose of using SQL?",
                answer: "SQL is used to manage and manipulate data stored in relational databases."
            },
            {
                question: "What are the main principles of artificial intelligence?",
                answer: "AI involves creating algorithms that mimic human intelligence, such as problem-solving and learning."
            },
            {
                question: "Explain the concept of a web server.",
                answer: "A web server is software that serves web pages and responds to requests from clients."
            },
        ]
    },
    {
        id: newId(), title: 'Data Science Specialization', author: "Johns Hopkins University", platform: "Coursera",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Data Science: Overview of data science concepts and methodologies.'
            },
            {
                chapterID: 2,
                text: 'Data Analysis with Python: Using Python for data manipulation, analysis, and visualization.'
            },
            {
                chapterID: 3,
                text: 'Machine Learning Fundamentals: Introduction to machine learning algorithms and models.'
            },
            {
                chapterID: 4,
                text: 'Big Data and Hadoop: Understanding big data concepts and Hadoop framework.'
            },
            {
                chapterID: 5,
                text: 'Data Visualization Techniques: Exploring tools and techniques for effective data visualization.'
            },
            {
                chapterID: 6,
                text: 'Deep Learning and Neural Networks: Delving into deep learning concepts and neural network architectures.'
            },
            {
                chapterID: 7,
                text: 'Natural Language Processing: Application of algorithms for processing and understanding human language.'
            },
            {
                chapterID: 8,
                text: 'Time Series Analysis: Analyzing time-dependent data and forecasting techniques.'
            },
            {
                chapterID: 9,
                text: 'Capstone Project: Applying learned skills to solve a real-world data science problem.'
            }
        ],
        questions: [
            {
                question: 'What is the CRISP-DM model in data science?',
                answer: 'CRISP-DM (Cross-Industry Standard Process for Data Mining) is a framework for data mining and analytics projects.'
            },
            {
                question: 'Explain the concept of feature engineering.',
                answer: 'Feature engineering involves creating new features or modifying existing ones to improve model performance.'
            },
            {
                question: 'What is overfitting in machine learning?',
                answer: 'Overfitting occurs when a model learns from noise in the training data, reducing its ability to generalize to new data.'
            },
            {
                question: 'How does deep learning differ from traditional machine learning?',
                answer: 'Deep learning uses neural networks with many layers to learn hierarchical representations from data.'
            },
            {
                question: 'What is the importance of data visualization in data science?',
                answer: 'Data visualization helps in understanding patterns, trends, and relationships in data.'
            },
            // Feel free to add more questions and answers here
        ]
    },
    {
        id: newId(), title: 'Data Analyst Nanodegree', author: "Udacity", platform: "Udacity",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Data Analysis: Overview of data analysis process and tools.'
            },
            {
                chapterID: 2,
                text: 'Data Wrangling: Techniques for cleaning and preparing data for analysis.'
            },
            {
                chapterID: 3,
                text: 'Exploratory Data Analysis: Methods to explore and visualize datasets.'
            },
            {
                chapterID: 4,
                text: 'Statistical Analysis: Understanding statistical methods for drawing insights from data.'
            },
            {
                chapterID: 5,
                text: 'Hypothesis Testing and Inference: Principles of hypothesis testing and drawing inferences.'
            },
            {
                chapterID: 6,
                text: 'Machine Learning for Data Analysis: Introduction to machine learning algorithms.'
            },
            {
                chapterID: 7,
                text: 'Data Visualization and Storytelling: Techniques to communicate insights through visualization.'
            },
            {
                chapterID: 8,
                text: 'Practical Project: Applying learned skills to real-world data analysis projects.'
            }
        ],
        questions: [
            {
                question: 'What is the importance of data wrangling in the data analysis process?',
                answer: 'Data wrangling involves cleaning, transforming, and organizing data for effective analysis.'
            },
            {
                question: 'Explain the difference between correlation and causation.',
                answer: 'Correlation indicates a relationship between variables, while causation implies one variable directly influences another.'
            },
            {
                question: 'Why is exploratory data analysis important?',
                answer: 'EDA helps in understanding data patterns, identifying outliers, and forming hypotheses.'
            },
            {
                question: 'What are the steps involved in hypothesis testing?',
                answer: 'Hypothesis testing involves defining hypotheses, selecting a significance level, conducting tests, and drawing conclusions.'
            },
            {
                question: 'How does machine learning contribute to data analysis?',
                answer: 'Machine learning algorithms can uncover patterns, make predictions, and automate decision-making in data analysis.'
            },
            // Feel free to add more questions and answers here
        ]
    },
    {
        id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare",
        chapters: [
            {
                chapterID: 1,
                text: 'Fundamentals of Graphic Design: Basics of layout, typography, and color theory.'
            },
            {
                chapterID: 2,
                text: 'Illustration Techniques: Exploring different illustration styles and techniques.'
            },
            {
                chapterID: 3,
                text: 'UX/UI Design Principles: Understanding user experience and interface design concepts.'
            },
            {
                chapterID: 4,
                text: 'Logo Design and Branding: Creating logos and building brand identities.'
            },
            {
                chapterID: 5,
                text: 'Prototyping and Wireframing: Techniques for creating prototypes and wireframes.'
            },
            {
                chapterID: 6,
                text: 'Design Software Tools: Using industry-standard software like Adobe Illustrator, Photoshop, and Sketch.'
            },
            {
                chapterID: 7,
                text: 'Responsive Design: Designing for various devices and screen sizes.'
            },
            {
                chapterID: 8,
                text: 'Project-based Learning: Applying design skills to real-world projects.'
            }
        ],
        questions: [
            {
                question: 'What is the role of typography in graphic design?',
                answer: 'Typography involves the art and technique of arranging type to make written language legible and visually appealing.'
            },
            {
                question: 'Explain the concept of user personas in UX/UI design.',
                answer: 'User personas represent fictional characters that embody different user types and behaviors for design considerations.'
            },
            {
                question: 'Why is prototyping important in the design process?',
                answer: 'Prototyping allows designers to test and iterate on ideas before investing significant resources into development.'
            },
            {
                question: 'How does color theory influence design decisions?',
                answer: 'Color theory guides designers in choosing colors that evoke specific emotions and create visual harmony.'
            },
            {
                question: 'What are the key principles of responsive design?',
                answer: 'Responsive design aims to create web pages that adapt and provide an optimal viewing experience across various devices and screen sizes.'
            },
            // Feel free to add more questions and answers here
        ]
    },
    {
        id: newId(), title: 'Digital Illustration for Editorial Projects', author: "Cristina Matallana", platform: "Domestika",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Digital Illustration: Overview of digital illustration tools and techniques.'
            },
            {
                chapterID: 2,
                text: 'Concept Development: Exploring ideation and concept creation for editorial illustrations.'
            },
            {
                chapterID: 3,
                text: 'Storyboarding and Composition: Structuring illustrations for editorial projects.'
            },
            {
                chapterID: 4,
                text: 'Color and Mood: Using color palettes to convey emotions and narratives.'
            },
            {
                chapterID: 5,
                text: 'Illustration Software: Mastering illustration software for creating digital artwork.'
            },
            {
                chapterID: 6,
                text: 'Editorial Illustration Styles: Exploring different styles for editorial illustration.'
            },
            {
                chapterID: 7,
                text: 'Digital Painting Techniques: Techniques for creating depth and texture in illustrations.'
            },
            {
                chapterID: 8,
                text: 'Portfolio Development: Building a portfolio of editorial illustration projects.'
            }
        ],
        questions: [
            {
                question: 'What is the role of storyboarding in digital illustration?',
                answer: 'Storyboarding helps in planning and organizing the visual narrative flow of editorial illustrations.'
            },
            {
                question: 'How do colors impact the mood of an editorial illustration?',
                answer: 'Colors influence emotions and help convey the intended message or atmosphere in editorial illustrations.'
            },
            {
                question: 'Explain the concept of composition in digital illustration.',
                answer: 'Composition involves arranging elements within the illustration to create visual harmony and guide the viewer.'
            },
            {
                question: 'Why is it important for illustrators to develop a unique style?',
                answer: 'A unique style helps illustrators stand out and create a recognizable identity in the industry.'
            },
            {
                question: 'What tools are commonly used for digital painting in illustration?',
                answer: 'Digital artists often use software like Adobe Photoshop, Procreate, or Clip Studio Paint for digital painting.'
            },
            // Add more questions and answers related to the course content
        ]
    },
    {
        id: newId(), title: 'Project Management Foundations', author: "Bonnie Biafore", platform: "LinkedIn Learning",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Project Management: Overview of project management principles and methodologies.'
            },
            {
                chapterID: 2,
                text: 'Project Initiation: Understanding project initiation processes and defining project objectives.'
            },
            {
                chapterID: 3,
                text: 'Project Planning: Techniques for creating comprehensive project plans and schedules.'
            },
            {
                chapterID: 4,
                text: 'Resource Management: Managing project resources effectively.'
            },
            {
                chapterID: 5,
                text: 'Risk Management: Identifying and mitigating risks throughout the project lifecycle.'
            },
            {
                chapterID: 6,
                text: 'Project Execution and Control: Managing project tasks, monitoring progress, and making adjustments.'
            },
            {
                chapterID: 7,
                text: 'Stakeholder Communication: Communicating with stakeholders and managing expectations.'
            },
            {
                chapterID: 8,
                text: 'Project Closure: Closing out a project and conducting post-project evaluations.'
            }
        ],
        questions: [
            {
                question: 'What are the key components of a project management plan?',
                answer: 'A project management plan includes scope, schedule, cost, quality, resource, communication, risk, and procurement management plans.'
            },
            {
                question: 'How does resource leveling contribute to project management?',
                answer: 'Resource leveling ensures optimal resource utilization and minimizes overallocation in project scheduling.'
            },
            {
                question: 'Why is stakeholder engagement crucial in project management?',
                answer: 'Engaging stakeholders ensures their involvement, support, and alignment with project goals and outcomes.'
            },
            {
                question: 'Explain the difference between project risk and issue.',
                answer: 'A risk is a potential future problem, while an issue is a current problem that needs to be addressed in the project.'
            },
            {
                question: 'What is the significance of a project post-mortem?',
                answer: 'A project post-mortem helps in analyzing project successes, failures, and lessons learned for future improvements.'
            },
            // Feel free to add more questions and answers here
        ]
    },
    {
        id: newId(), title: 'Financial Markets', author: "Yale University", platform: "Coursera",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Financial Markets: Overview of different financial markets and their functions.'
            },
            {
                chapterID: 2,
                text: 'Stock Markets and Equity Investments: Understanding stocks, exchanges, and investment strategies.'
            },
            {
                chapterID: 3,
                text: 'Bond Markets and Fixed Income Securities: Exploring bonds and debt market instruments.'
            },
            {
                chapterID: 4,
                text: 'Derivatives and Risk Management: Introduction to derivative instruments and risk mitigation strategies.'
            },
            {
                chapterID: 5,
                text: 'Forex and International Markets: Understanding foreign exchange and global market operations.'
            },
            {
                chapterID: 6,
                text: 'Investment Strategies and Portfolio Management: Strategies for building and managing investment portfolios.'
            },
            {
                chapterID: 7,
                text: 'Behavioral Finance: Examining psychological influences on financial decision-making.'
            },
            {
                chapterID: 8,
                text: 'Regulations and Ethics in Financial Markets: Understanding regulatory frameworks and ethical considerations.'
            }
        ],
        questions: [
            {
                question: 'What factors influence stock prices in financial markets?',
                answer: 'Stock prices are influenced by company performance, economic indicators, investor sentiment, and market trends.'
            },
            {
                question: 'Explain the concept of diversification in investment portfolios.',
                answer: 'Diversification involves spreading investments across various assets to reduce risk exposure.'
            },
            {
                question: 'How do derivatives work in risk management?',
                answer: 'Derivatives are financial contracts used to hedge against or speculate on price fluctuations in underlying assets.'
            },
            {
                question: 'Why is understanding behavioral finance important for investors?',
                answer: 'Behavioral finance studies psychological biases that impact financial decisions, aiding investors in making better choices.'
            },
            {
                question: 'What role do regulations play in ensuring market stability?',
                answer: 'Regulations are designed to maintain market integrity, protect investors, and prevent systemic risks.'
            },
            // Add more questions and answers related to financial markets and investments
        ]
    },
    {
        id: newId(), title: 'Offers courses in numerous languages for beginners to advanced learners', author: "?", platform: "Duolingo",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Language Learning: Getting started with basic vocabulary and phrases.'
            },
            {
                chapterID: 2,
                text: 'Grammar and Sentence Structure: Learning the foundational grammar rules of the language.'
            },
            {
                chapterID: 3,
                text: 'Listening and Speaking Skills: Practicing listening comprehension and oral communication.'
            },
            {
                chapterID: 4,
                text: 'Reading and Writing Proficiency: Enhancing reading and writing abilities in the language.'
            },
            {
                chapterID: 5,
                text: 'Intermediate Level: Building more advanced language skills and vocabulary.'
            },
            {
                chapterID: 6,
                text: 'Advanced Language Proficiency: Mastering complex grammar and conversational nuances.'
            },
            {
                chapterID: 7,
                text: 'Cultural Understanding: Exploring cultural aspects associated with the language.'
            },
            {
                chapterID: 8,
                text: 'Specialized Topics and Dialects: Delving into specific subjects or regional dialects.'
            }
        ],
        questions: [
            {
                question: 'How does practicing with native speakers improve language learning?',
                answer: 'Practicing with native speakers helps in improving pronunciation, fluency, and cultural understanding.'
            },
            {
                question: 'What are the benefits of learning multiple languages?',
                answer: 'Learning multiple languages enhances cognitive abilities, cultural appreciation, and career opportunities.'
            },
            {
                question: 'How does immersion aid in language acquisition?',
                answer: 'Immersion in the language environment accelerates learning by forcing active communication and comprehension.'
            },
            {
                question: 'Explain the importance of cultural context in language learning.',
                answer: 'Understanding cultural context aids in using the language appropriately and understanding idiomatic expressions.'
            },
            {
                question: 'How does consistent practice contribute to language fluency?',
                answer: 'Consistent practice reinforces learning and helps in retaining vocabulary and grammar rules.'
            },
            // Feel free to add more questions and answers here
        ]
    },
    {
        id: newId(), title: 'Language courses in a variety of languages', author: "?", platform: "Rosetta Stone",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Language Learning: Basic vocabulary and phrases for beginners.'
            },
            {
                chapterID: 2,
                text: 'Grammar and Sentence Structure: Foundational grammar rules and sentence formation.'
            },
            {
                chapterID: 3,
                text: 'Listening and Speaking Skills: Practice sessions for improving speaking and listening abilities.'
            },
            {
                chapterID: 4,
                text: 'Reading and Writing Proficiency: Developing reading and writing skills in the language.'
            },
            {
                chapterID: 5,
                text: 'Intermediate Level: Building advanced language skills and expanding vocabulary.'
            },
            {
                chapterID: 6,
                text: 'Advanced Language Proficiency: Mastering complex grammar rules and idiomatic expressions.'
            },
            {
                chapterID: 7,
                text: 'Cultural Context and Conversations: Understanding cultural nuances and practical conversations.'
            },
            {
                chapterID: 8,
                text: 'Specialized Topics and Dialects: Exploring specific subjects or regional dialects.'
            }
        ],
        questions: [
            {
                question: 'How does immersion aid in language learning?',
                answer: 'Immersion in the language environment accelerates learning by forcing active communication and comprehension.'
            },
            {
                question: 'What are the benefits of learning multiple languages?',
                answer: 'Learning multiple languages enhances cognitive abilities, cultural appreciation, and career opportunities.'
            },
            {
                question: 'Explain the importance of cultural context in language learning.',
                answer: 'Understanding cultural context aids in using the language appropriately and understanding idiomatic expressions.'
            },
            {
                question: 'How does consistent practice contribute to language fluency?',
                answer: 'Consistent practice reinforces learning and helps in retaining vocabulary and grammar rules.'
            },
            {
                question: 'How does technology facilitate language learning?',
                answer: 'Technology provides interactive tools and resources that enhance language learning experiences.'
            },
            // Feel free to add more questions and answers related to language learning
        ]
    },
    {
        id: newId(), title: 'Lessons from notable figures in various fields (e.g., writing, acting, cooking)', author: "?", platform: "MasterClass",
        chapters: [
            {
                chapterID: 1,
                text: 'Crafting a Novel: Writing techniques and storytelling with a renowned author.'
            },
            {
                chapterID: 2,
                text: 'Mastering the Art of Acting: Acting methods and character development with a famous actor.'
            },
            {
                chapterID: 3,
                text: 'Culinary Masterclass: Cooking skills and gastronomy from a celebrated chef.'
            },
            {
                chapterID: 4,
                text: 'Creative Expression in Art: Artistic techniques and creativity from a renowned artist.'
            },
            {
                chapterID: 5,
                text: 'Entrepreneurial Strategies: Business insights and strategies from successful entrepreneurs.'
            },
            {
                chapterID: 6,
                text: 'Musical Composition and Performance: Music composition and performance tips from a legendary musician.'
            },
            {
                chapterID: 7,
                text: 'Leadership and Innovation: Leadership principles and innovation lessons from industry leaders.'
            },
            {
                chapterID: 8,
                text: 'Mindfulness and Well-being: Mental health and mindfulness practices from a wellness expert.'
            }
        ],
        questions: [
            {
                question: 'How do writing techniques vary among different authors?',
                answer: 'Different authors employ various writing styles, structures, and approaches to storytelling.'
            },
            {
                question: 'What role does improvisation play in acting?',
                answer: 'Improvisation helps actors react authentically and spontaneously in a given situation or character.'
            },
            {
                question: 'How important is presentation in culinary arts?',
                answer: 'Presentation enhances the dining experience by making dishes visually appealing.'
            },
            {
                question: 'What are the key elements of effective leadership?',
                answer: 'Effective leadership involves vision, communication, empathy, and strategic decision-making.'
            },
            {
                question: 'How does mindfulness contribute to overall well-being?',
                answer: 'Mindfulness practices help reduce stress, improve focus, and promote mental well-being.'
            },
            // Feel free to add more questions and answers related to lessons from notable figures
        ]
    },
    {
        id: newId(), title: 'Learning How to Learn', author: "McMaster University", platform: "Coursera",
        chapters: [
            {
                chapterID: 1,
                text: 'Understanding the Learning Process: Insights into how the brain acquires and retains information.'
            },
            {
                chapterID: 2,
                text: 'Effective Study Techniques: Strategies for efficient and impactful learning.'
            },
            {
                chapterID: 3,
                text: 'Memory Techniques and Retention: Methods to improve memory retention and recall.'
            },
            {
                chapterID: 4,
                text: 'Overcoming Procrastination: Techniques to manage procrastination and enhance productivity.'
            },
            {
                chapterID: 5,
                text: 'Metacognition and Self-Regulated Learning: Developing awareness of one\'s learning process and improving self-regulation.'
            },
            {
                chapterID: 6,
                text: 'Mindfulness and Concentration: Practices to enhance focus and concentration during learning.'
            },
            {
                chapterID: 7,
                text: 'Learning Styles and Adaptability: Recognizing different learning styles and adapting strategies accordingly.'
            },
            {
                chapterID: 8,
                text: 'Continuous Learning and Growth: Cultivating a mindset for lifelong learning and personal development.'
            }
        ],
        questions: [
            {
                question: 'How does understanding the learning process enhance learning outcomes?',
                answer: 'Understanding how the brain learns helps in adopting effective learning strategies and techniques.'
            },
            {
                question: 'What role does practice play in memory retention?',
                answer: 'Regular practice reinforces memory pathways, leading to improved retention and recall.'
            },
            {
                question: 'How does metacognition contribute to effective learning?',
                answer: 'Metacognition involves monitoring one’s own thinking and learning processes, leading to more efficient learning.'
            },
            {
                question: 'What are some practical techniques to overcome procrastination?',
                answer: 'Techniques include breaking tasks into smaller steps, setting deadlines, and using time management strategies.'
            },
            {
                question: 'Why is continuous learning important in today’s fast-paced world?',
                answer: 'Continuous learning allows individuals to adapt to changing environments and acquire new skills for career growth.'
            },
            // Add more questions and answers related to effective learning strategies
        ]
    },
    {
        id: newId(), title: 'Math, science, economics, and engineering courses for all ages', author: "?", platform: "Khan Academy",
        chapters: [
            {
                chapterID: 1,
                text: 'Foundations of Mathematics: Fundamental concepts and operations in mathematics.'
            },
            {
                chapterID: 2,
                text: 'Introduction to Science: Basics of physics, chemistry, biology, and earth sciences.'
            },
            {
                chapterID: 3,
                text: 'Principles of Economics: Understanding economic principles and systems.'
            },
            {
                chapterID: 4,
                text: 'Engineering Fundamentals: Introduction to engineering disciplines and principles.'
            },
            {
                chapterID: 5,
                text: 'Advanced Mathematics: Topics like calculus, algebra, geometry, and statistics.'
            },
            {
                chapterID: 6,
                text: 'Specialized Sciences: Advanced topics in physics, chemistry, biology, and environmental sciences.'
            },
            {
                chapterID: 7,
                text: 'Applied Economics: Practical applications of economic theories in various sectors.'
            },
            {
                chapterID: 8,
                text: 'Engineering Innovations: Exploring cutting-edge engineering advancements and innovations.'
            }
        ],
        questions: [
            {
                question: 'What are the practical applications of calculus in real-life scenarios?',
                answer: 'Calculus is used in physics, engineering, economics, and various fields to solve problems involving rates of change and accumulation.'
            },
            {
                question: 'How do economic principles influence decision-making in business?',
                answer: 'Economic principles help businesses analyze costs, demand, pricing, and market strategies for decision-making.'
            },
            {
                question: 'Why is understanding scientific methodology crucial in scientific research?',
                answer: 'Scientific methodology ensures systematic and reliable experimentation and analysis in research.'
            },
            {
                question: 'What are the key engineering principles applied in modern technologies?',
                answer: 'Engineering principles like design thinking, problem-solving, and innovation drive advancements in technology.'
            },
            {
                question: 'How does statistical analysis contribute to scientific and economic research?',
                answer: 'Statistical analysis aids in drawing conclusions and making predictions based on empirical data in various fields.'
            },
            // Feel free to add more questions and answers related to these multidisciplinary fields
        ]
    },
    {
        id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare",
        chapters: [
            {
                chapterID: 1,
                text: 'Introduction to Graphic Design: Basics of design principles, typography, and color theory.'
            },
            {
                chapterID: 2,
                text: 'Illustration Fundamentals: Techniques for creating digital illustrations and artworks.'
            },
            {
                chapterID: 3,
                text: 'User Experience (UX) Design: Understanding user behavior and creating user-centered designs.'
            },
            {
                chapterID: 4,
                text: 'User Interface (UI) Design: Designing interactive interfaces for digital products.'
            },
            {
                chapterID: 5,
                text: 'Advanced Graphic Design: Exploring advanced techniques and creative concepts in design.'
            },
            {
                chapterID: 6,
                text: 'Digital Illustration Techniques: Advanced methods for creating digital artworks and illustrations.'
            },
            {
                chapterID: 7,
                text: 'Prototyping and Wireframing: Creating prototypes and wireframes for UX/UI design.'
            },
            {
                chapterID: 8,
                text: 'Design Thinking and Problem-solving: Applying design thinking methodologies to solve problems.'
            }
        ],
        questions: [
            {
                question: 'What role does color theory play in graphic design?',
                answer: 'Color theory influences emotions, perception, and readability in design compositions.'
            },
            {
                question: 'How does user research contribute to UX design?',
                answer: 'User research helps in understanding user needs, behaviors, and preferences for designing user-friendly products.'
            },
            {
                question: 'Explain the difference between UI and UX design.',
                answer: 'UI focuses on the visual aspects of the design, while UX encompasses the overall user experience and interaction.'
            },
            {
                question: 'What are some key principles of effective typography?',
                answer: 'Principles include readability, hierarchy, contrast, and appropriate font choices for different contexts.'
            },
            {
                question: 'How can prototyping enhance the design process?',
                answer: 'Prototyping allows for testing and refining designs before implementation, saving time and resources.'
            },
            // Add more questions and answers related to graphic design, illustration, and UX/UI design
        ]
    },
    {
        id: newId(), title: 'Free lecture notes, exams, and videos from MIT courses', author: "?", platform: "MIT OpenCourseWare",
        chapters: [
            {
                chapterID: 1,
                text: 'Mathematics: Lecture notes, problem sets, and video lectures from MIT math courses.'
            },
            {
                chapterID: 2,
                text: 'Science and Engineering: Course materials and videos from various science and engineering disciplines.'
            },
            {
                chapterID: 3,
                text: 'Computer Science: Lecture notes, assignments, and video lectures from MIT CS courses.'
            },
            {
                chapterID: 4,
                text: 'Humanities and Social Sciences: Course materials and videos from diverse humanities and social science courses.'
            },
            {
                chapterID: 5,
                text: 'Business and Management: Lecture notes and videos from MIT business and management courses.'
            },
            {
                chapterID: 6,
                text: 'Artificial Intelligence and Machine Learning: Materials from MIT AI and ML courses.'
            },
            {
                chapterID: 7,
                text: 'Advanced Topics: Advanced course materials and videos from specialized disciplines.'
            },
            {
                chapterID: 8,
                text: 'Self-Paced Learning: Resources for self-paced learning and independent study.'
            }
        ],
        questions: [
            {
                question: 'How does MIT OpenCourseWare benefit learners?',
                answer: 'MIT OCW offers free access to high-quality educational resources, enabling self-paced learning and knowledge acquisition.'
            },
            {
                question: 'What types of materials are available on MIT OCW?',
                answer: 'Lecture notes, assignments, exams, videos, and supplementary materials from various MIT courses are available.'
            },
            {
                question: 'Why is open access to educational resources important?',
                answer: 'Open access promotes inclusivity and lifelong learning opportunities for individuals worldwide.'
            },
            {
                question: 'How can learners utilize MIT OCW for self-study?',
                answer: 'Learners can access course materials, watch lectures, attempt assignments, and self-assess their understanding.'
            },
            {
                question: 'What subjects or disciplines are covered in MIT OCW?',
                answer: 'MIT OCW covers a wide array of subjects, including STEM fields, humanities, business, and more.'
            },
            // Add more questions and answers related to MIT OpenCourseWare and its offerings
        ]
    },
];
let pickedClasses = [];
app.get('/api/availableClasses', (req, res) => {
    res.send(classesAvailable);
});
app.get('/api/pickedClasses', (req, res) => {
    res.send(pickedClasses);
});
app.get('/api/pickedClass/:id', (req, res) => {
    const id = +req.params.id;
    const idx = pickedClasses.findIndex(p => p.id === id);
    if (idx !== -1) {
        res.status(200).send(pickedClasses[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.post('/api/add-to-picked', (req, res) => {
    const pickedClass = req.body;
    if (pickedClass !== undefined) {
        pickedClasses.push(pickedClass);
        res.status(200).send({ message: `success, Class ID = ${pickedClass.id} added` });
    }
    else {
        res.status(404).send({ message: `Error adding : ${pickedClass.id}` });
    }
});
app.delete('/api/remove-from-picked/:id', (req, res) => {
    const classIdToRemove = +req.params.id;
    const index = pickedClasses.findIndex((Class) => Class.id === classIdToRemove);
    if (index !== -1) {
        pickedClasses.splice(index, 1);
        res.status(200).send({ message: `Class with ID ${classIdToRemove} removed from personal.` });
    }
    else {
        res.status(404).send({ error: `Class with ID ${classIdToRemove} not found in personal.` });
    }
});
app.put('/api/updateCoef/:idClass/question/:idQuestion', (req, res) => {
    const idClass = +req.params.idClass;
    const idx = pickedClasses.findIndex(p => p.id === idClass);
    const idQuestion = +req.params.idQuestion - 1;
    const coef = req.body;
    if (idx !== -1 && pickedClasses[idx].questions[idQuestion]) {
        pickedClasses[idx].questions[idQuestion].learnedCoef = coef;
        res.status(200).send(pickedClasses[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${idClass}`);
    }
});
app.put('/api/modify-chapter/:id', (req, res) => {
    const id = +req.params.id;
    const idx = classesAvailable.findIndex(p => p.id === id);
    if (idx !== -1) {
        //modifier contenu du chapitre
        res.status(200).send(classesAvailable[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
console.log('starting...');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/**
 * @swagger
 * /api/availableClasses:
 *      get:
 *          summary: Get all available classes
 *          description : Get all available classes
 *          responses:
 *              200:
 *                  description: All available classes are retrieved
 *              400:
 *                  description: Problem retrieving all available classes
 */
/**
 * @swagger
 * /api/pickedClasses:
 *      get:
 *          summary : Get all picked classes
 *          description : Get all picked classes
 *          responses:
 *              200:
 *                  description: All picked classes are retrieved
 *              400:
 *                  description: Problem retrieving all picked classes
 */
/**
 * @swagger
 * /api/pickedClass/{id}:
 *   get:
 *     summary: Get a specific picked class by ID
 *     description: Retrieve details of a picked class by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the picked class to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response with the picked class details
 *       404:
 *         description: Picked class with the provided ID not found
 */
/**
 * @swagger
 * /api/add-to-picked:
 *   post:
 *     summary: Add a class to the picked classes list
 *     description: Add a class to the picked classes list
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *           example:
 *             id: 1
 *             title: "Your Class Title"
 *             author: "Author Name"
 *             platform: "Platform Name"
 *             description: "Description of the class"
 *             difficulty: 3
 *     responses:
 *       200:
 *         description: Successful response with a message indicating the class was added
 *       404:
 *         description: Error response when the request body is invalid or missing
 *
 *
 */
/**
 * @swagger
 * /api/remove-from-picked/{id}:
 *   delete:
 *     summary: Remove a class from the picked classes list by ID
 *     description: Delete a class from the picked classes list based on its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the class to remove from the picked classes list
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response with a message indicating the class was removed
 *       404:
 *         description: Class with the provided ID not found in the picked classes list
 */ 
//# sourceMappingURL=app.js.map