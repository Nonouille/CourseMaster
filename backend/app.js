"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
var express = require("express");
var app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
app.get('/api/liveness', function (req, res) {
    res.send('OK !!!');
});
var idGenerator = 1;
function newId() {
    return idGenerator++;
}
var learningPackages = [
    { id: newId(), title: 'Learn TypeScript' },
    { id: newId(), title: 'Learn Angular' },
    { id: newId(), title: 'Learn NodeJs' },
    { id: newId(), title: 'Learn Express' },
];
app.get('/api/learning-package', function (req, res) {
    res.send(learningPackages);
});
app.get('/api/learning-package/:id', function (req, res) {
    var id = +req.params.id;
    var idx = learningPackages.findIndex(function (p) { return p.id === id; });
    if (idx !== -1) {
        res.status(200).send(learningPackages[idx]);
    }
    else {
        res.status(404).send("Entity not found for id : ".concat(id));
    }
});
app.post('/api/learning-package', function (req, res) {
    var item = req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    learningPackages.push(item);
    res.send(item);
});
app.put('/api/learning-package/:id', function (req, res) {
    var id = +req.params.id;
    var idx = learningPackages.findIndex(function (p) { return p.id === id; });
    if (idx !== -1) {
        learningPackages[idx].title = "Changed";
        res.status(200).send(learningPackages[idx]);
    }
    else {
        res.status(404).send("Entity not found for id : ".concat(id));
    }
});
app.delete('/api/learning-package/:id', function (req, res) {
    var id = +req.params.id;
    var idx = learningPackages.findIndex(function (p) { return p.id === id; });
    if (idx !== -1) {
        learningPackages.splice(idx, 1);
        res.status(200).send("Element deleted");
    }
    else {
        res.status(404).send("Entity not found for id : ".concat(id));
    }
});
app.get('/api/package-summary', function (req, res) {
    var response = "";
    for (var i = 0; i < learningPackages.length; i++) {
        response += "{id : " + learningPackages[i].id.toString() + ", title : " + learningPackages[i].title + "} \n";
    }
    res.send(response);
});
console.log('starting...');
app.listen(3000, function () {
    console.log('Ok, started!');
});
/*const sequelize = new Sequelize({
    database: 'LearningFactDb',
    username: 'learningDbUser',
    password: 'test'
})*/ 
