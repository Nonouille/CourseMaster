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
    { id: newId(), title: 'Python for Everybody', author: "University of Michigan", platform: "Coursera" },
    { id: newId(), title: 'The Web Developer Bootcamp', author: "Colt Steele", platform: "Udemy" },
    { id: newId(), title: 'CS50\'s Introduction to Computer Science', author: "Harvard University", platform: "edX" },
    { id: newId(), title: 'Data Science Specialization', author: "Johns Hopkins University", platform: "Coursera" },
    { id: newId(), title: 'Data Analyst Nanodegree', author: "Udacity", platform: "Udacity" },
    { id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare" },
    { id: newId(), title: 'Digital Illustration for Editorial Projects', author: "Cristina Matallana", platform: "Domestika" },
    { id: newId(), title: 'Project Management Foundations', author: "Bonnie Biafore", platform: "LinkedIn Learning" },
    { id: newId(), title: 'Financial Markets', author: "Yale University", platform: "Coursera" },
    { id: newId(), title: 'Offers courses in numerous languages for beginners to advanced learners', author: "?", platform: "Duolingo" },
    { id: newId(), title: 'Language courses in a variety of languages', author: "?", platform: "Rosetta Stone" },
    { id: newId(), title: 'Lessons from notable figures in various fields (e.g., writing, acting, cooking)', author: "?", platform: "MasterClass" },
    { id: newId(), title: 'Learning How to Learn', author: "McMaster University", platform: "Coursera" },
    { id: newId(), title: 'Math, science, economics, and engineering courses for all ages', author: "?", platform: "Khan Academy" },
    { id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare" },
    { id: newId(), title: 'Free lecture notes, exams, and videos from MIT courses', author: "?", platform: "MIT OpenCourseWare" },
];
let pickedClasses = [];
app.get('/api/availableClasses', (req, res) => {
    res.send(classesAvailable);
});
app.get('/api/pickedClasses', (req, res) => {
    res.send(pickedClasses);
});
app.get('/api/classes/:id', (req, res) => {
    const id = +req.params.id;
    const idx = classesAvailable.findIndex(p => p.id === id);
    if (idx !== -1) {
        res.status(200).send(classesAvailable[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.post('/api/add-to-personal', (req, res) => {
    const pickedClass = req.body;
    if (pickedClass !== undefined) {
        pickedClasses.push(pickedClass);
        res.status(200).send(`Success ${pickedClass.title} added`);
    }
    else {
        res.status(404).send(`Error adding : ${pickedClass}`);
    }
});
app.post('/api/new-class', (req, res) => {
    let item = req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    classesAvailable.push(item);
    res.send(item);
});
app.put('/api/modify-class/:id', (req, res) => {
    const id = +req.params.id;
    const title = req.body;
    const idx = classesAvailable.findIndex(p => p.id === id);
    if (idx !== -1) {
        classesAvailable[idx].title = title;
        res.status(200).send(classesAvailable[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.delete('/api/delete-class/:id', (req, res) => {
    const id = +req.params.id;
    const idx = classesAvailable.findIndex(p => p.id === id);
    if (idx !== -1) {
        classesAvailable.splice(idx, 1);
        res.status(200).send("Element deleted");
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
 * /api/route:
 *   get:
 *     description: Description of your endpoint
 *     responses:
 *       200:
 *         description: Successful response
 */ 
//# sourceMappingURL=app.js.map