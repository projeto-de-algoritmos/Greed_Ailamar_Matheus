const scheduling = require('./greedies/intervalScheduling');
const partitioning = require('./greedies/intervalPartitioning');
const lateness = require('./greedies/minimizeLateness');
const intervals = require('./data/intervalos');
const Task = require('./classes/task');


// let log = scheduling();
let tasks = [];
for (const interval of intervals) {
    tasks.push(new Task({task : interval}))
}
let log = lateness(tasks);
console.log(log)
return;