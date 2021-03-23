const scheduling = require('./greedies/intervalScheduling');
const partitioning = require('./greedies/intervalPartitioning');
const lateness = require('./greedies/minimizeLateness');
const intervals = require('./data/intervalos');
const Task = require('./classes/task');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

let tasks = [];

app.post('/', (req, res) => {
    const {task, deadline, duration} = req.body;
    
    if(req.body) {
        if (duration === -1){
            tasks = [];
            return;
        }
        else{

            let tmp = [task, Number(deadline), Number(duration)];
            tasks.push(new Task({task : tmp}))
            let ltns = lateness(tasks);
            return res.json(ltns);
        }

    } else {
        console.log("deu ruim");
        return res.send(500);
    }
});

app.listen(8000, () => console.log(""));