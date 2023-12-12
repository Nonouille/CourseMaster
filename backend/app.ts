// Import required modules
import * as express from 'express';
import { Request, Response} from 'express';

const app = express();

app.use(express.json()); // => to parse request body with http header "content-type": "application/json"


app.get('/api/liveness', (req: Request, res: Response) => {
    res.send('OK !!!');
});

interface LearningPackage {
    id?: number;
    title: string;
    description?: string;
    targetAudience?: string;
    difficulty?: number;
}
let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let learningPackages : LearningPackage[] = [
    {id: newId(), title: 'Learn TypeScript'},
    {id: newId(), title: 'Learn Angular'},
    {id: newId(), title: 'Learn NodeJs'},
    {id: newId(), title: 'Learn Express'},
];

app.get('/api/learning-package', (req: Request, res: Response) => {
    res.send(learningPackages);
});

app.get('/api/learning-package/:id', (req: Request, res: Response) => {
    const id =+req.params.id;
    const idx = learningPackages.findIndex(p=> p.id === id);
    if (idx!==-1)
    {
        res.status(200).send(learningPackages[idx])
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
});

app.post('/api/learning-package', (req: Request, res: Response) => {
    let item = <LearningPackage> req.body;
    console.log('handle http POST /api/learning-package', item);
    item.id = newId();
    learningPackages.push(item);
    res.send(item);
});


app.put('/api/learning-package/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    const idx = learningPackages.findIndex(p=> p.id === id);
    if (idx!==-1)
    {
        learningPackages[idx].title = "Changed";
        res.status(200).send(learningPackages[idx])
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
})

app.delete('/api/learning-package/:id', (req: Request,res: Response) => {
    const id = +req.params.id;
    const idx = learningPackages.findIndex(p => p.id ===id );
    if (idx !==-1)
    {
        learningPackages.splice(idx,1);
        res.status(200).send("Element deleted")
    }
    else
    {
        res.status(404).send(`Entity not found for id : ${id}`)
    }
})

app.get('/api/package-summary', (req: Request,res: Response) => {
    let response = "";
    for (let i =0;i<learningPackages.length;i++)
    {
        response += "{id : " + learningPackages[i].id.toString() + ", title : " + learningPackages[i].title + "} \n";
    }
    res.send(response);
})

console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started!');
});


/*const sequelize = new Sequelize({
    database: 'LearningFactDb',
    username: 'learningDbUser',
    password: 'test'
})*/