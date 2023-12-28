// Import required modules
import * as express from 'express';
import { Request, Response} from 'express';
import {specs, swaggerUi } from './swaggerOptions';

const app = express();

app.use(express.json()); // => to parse request body with http header "content-type": "application/json"
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(specs));

app.get('/api/liveness', (req: Request, res: Response) => {
    res.send('OK !!!');
});


interface Class {
    id?: number;
    title: string;
    author: string;
    platform: string;
    description?: string;
    difficulty?: number;
}
let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let classesAvailable : Class[] = [
    {id: newId(), title: 'Python for Everybody', author: "University of Michigan", platform: "Coursera"},
    {id: newId(), title: 'The Web Developer Bootcamp', author: "Colt Steele", platform: "Udemy"},
    {id: newId(), title: 'CS50\'s Introduction to Computer Science', author: "Harvard University", platform: "edX"},
    {id: newId(), title: 'Data Science Specialization', author: "Johns Hopkins University", platform: "Coursera"},
    {id: newId(), title: 'Data Analyst Nanodegree', author: "Udacity", platform: "Udacity"},
    {id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare"},
    {id: newId(), title: 'Digital Illustration for Editorial Projects', author: "Cristina Matallana", platform: "Domestika"},
    {id: newId(), title: 'Project Management Foundations', author: "Bonnie Biafore", platform: "LinkedIn Learning"},
    {id: newId(), title: 'Financial Markets', author: "Yale University", platform: "Coursera"},
    {id: newId(), title: 'Offers courses in numerous languages for beginners to advanced learners', author: "?", platform: "Duolingo"},
    {id: newId(), title: 'Language courses in a variety of languages', author: "?", platform: "Rosetta Stone"},
    {id: newId(), title: 'Lessons from notable figures in various fields (e.g., writing, acting, cooking)', author: "?", platform: "MasterClass"},
    {id: newId(), title: 'Learning How to Learn', author: "McMaster University", platform: "Coursera"},
    {id: newId(), title: 'Math, science, economics, and engineering courses for all ages', author: "?", platform: "Khan Academy"},
    {id: newId(), title: 'Various courses on graphic design, illustration, and UX/UI design', author: "?", platform: "Skillshare"},
    {id: newId(), title: 'Free lecture notes, exams, and videos from MIT courses', author: "?", platform: "MIT OpenCourseWare"},
];

let pickedClasses : Class[] = [];

app.get('/api/availableClasses', (req: Request, res: Response) => {
    res.send(classesAvailable);
});
app.get('/api/pickedClasses', (req: Request, res: Response) => {
    res.send(pickedClasses);
});

app.get('/api/classes/:id', (req: Request, res: Response) => {
    const id =+req.params.id;
    const idx = classesAvailable.findIndex(p=> p.id === id);
    if (idx!==-1)
    {
        res.status(200).send(classesAvailable[idx])
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
});

app.post('/api/add-to-personal' , (req : Request, res : Response) => {
    const pickedClass : Class = req.body;
    if (pickedClass!==undefined )
    {
        pickedClasses.push(pickedClass);
        res.status(200).send(`Success ${pickedClass.title} added`);
    }
    else
    {
        res.status(404).send(`Error adding : ${pickedClass}`)
    }

})

app.post('/api/new-class', (req: Request, res: Response) => {
    let item = <Class> req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    classesAvailable.push(item);
    res.send(item);
});


app.put('/api/modify-class/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const title : string = req.body;
    const idx = classesAvailable.findIndex(p=> p.id === id);
    if (idx!==-1)
    {
        classesAvailable[idx].title = title;
        res.status(200).send(classesAvailable[idx])
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
})

app.delete('/api/delete-class/:id', (req: Request,res: Response) => {
    const id = +req.params.id;
    const idx = classesAvailable.findIndex(p => p.id ===id );
    if (idx !==-1)
    {
        classesAvailable.splice(idx,1);
        res.status(200).send("Element deleted")
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
})

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