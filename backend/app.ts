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
    id: number;
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

app.get('/api/pickedClass/:id', (req: Request, res: Response) => {
    const id =+req.params.id;
    const idx = pickedClasses.findIndex(p=> p.id === id);
    if (idx!==-1)
    {
        res.status(200).send(pickedClasses[idx])
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
});

app.post('/api/add-to-picked' , (req : Request, res : Response) => {
    const pickedClass : Class = req.body;
    if (pickedClass!==undefined )
    {
        pickedClasses.push(pickedClass);
        res.status(200).send({message : `success, Class ID = ${pickedClass.id} added` });
    }
    else
    {
        res.status(404).send({message : `Error adding : ${pickedClass.id}` })
    }
})

app.delete('/api/remove-from-picked/:id', (req, res) => {
    const classIdToRemove = +req.params.id;
    const index = pickedClasses.findIndex((Class) => Class.id === classIdToRemove);
    if (index !== -1)
    {
        pickedClasses.splice(index, 1);
        res.status(200).send({ message: `Class with ID ${classIdToRemove} removed from personal.` });
    }
    else
    {
        res.status(404).send({ error: `Class with ID ${classIdToRemove} not found in personal.` });
    }
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


console.log('starting...');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const swaggerOptions = {
    // Other Swagger options

    components: {
        schemas: {
            Class: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    title: { type: 'string' },
                    author: { type: 'string' },
                    platform: { type: 'string' },
                    description: { type: 'string' },
                    difficulty: { type: 'number' }
                },
                // Additional schema properties or definitions for Class
            },
            // Define other schemas if needed
        },
        // Other components if needed
    },
    // Other Swagger options
};


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
 *     responses:
 *       200:
 *         description: Successful response with a message indicating the class was added
 *       404:
 *         description: Error response when the request body is invalid or missing
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