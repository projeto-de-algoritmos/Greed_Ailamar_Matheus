const scheduling = require('./greedies/intervalScheduling');
const partitioning = require('./greedies/intervalPartitioning');
const materias = require('./data/FGA');


// let log = scheduling();

let Classes = [];
for (const job of jobs) {
    Classes.push(new Task({task : job}))
}

let log = partitioning();
console.log(log)
return;