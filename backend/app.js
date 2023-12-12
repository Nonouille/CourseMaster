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
let learningPackages = [
    { id: newId(), title: 'Learn TypeScript' },
    { id: newId(), title: 'Learn Angular' },
    { id: newId(), title: 'Learn NodeJs' },
    { id: newId(), title: 'Learn Express' },
];
app.get('/api/learning-package', (req, res) => {
    res.send(learningPackages);
});
app.get('/api/learning-package/:id', (req, res) => {
    const id = +req.params.id;
    const idx = learningPackages.findIndex(p => p.id === id);
    if (idx !== -1) {
        res.status(200).send(learningPackages[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.post('/api/learning-package', (req, res) => {
    let item = req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    learningPackages.push(item);
    res.send(item);
});
app.put('/api/learning-package/:id', (req, res) => {
    const id = +req.params.id;
    const idx = learningPackages.findIndex(p => p.id === id);
    if (idx !== -1) {
        learningPackages[idx].title = "Changed";
        res.status(200).send(learningPackages[idx]);
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.delete('/api/learning-package/:id', (req, res) => {
    const id = +req.params.id;
    const idx = learningPackages.findIndex(p => p.id === id);
    if (idx !== -1) {
        learningPackages.splice(idx, 1);
        res.status(200).send("Element deleted");
    }
    else {
        res.status(404).send(`Entity not found for id : ${id}`);
    }
});
app.get('/api/package-summary', (req, res) => {
    let response = "";
    for (let i = 0; i < learningPackages.length; i++) {
        response += "{id : " + learningPackages[i].id.toString() + ", title : " + learningPackages[i].title + "} \n";
    }
    res.send(response);
});
console.log('starting...');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/*const sequelize = new Sequelize({
    database: 'LearningFactDb',
    username: 'learningDbUser',
    password: 'test'
})*/
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