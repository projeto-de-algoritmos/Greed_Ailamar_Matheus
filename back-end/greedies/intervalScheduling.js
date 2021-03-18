const Task = require('../classes/task');
const jobs = require('../data/ordenado');




function orderByFinish() {
    
}



function scheduling() {

    let tasks = [];
    for (const job of jobs) {
        tasks.push(new Task({task : job}))
    }
    // sort(tasks);

    let currenttask = [0];
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i]._start >= tasks[currenttask[currenttask.length - 1]]._finish) {
            currenttask.push(i);
        }
    }


    let answer = [];
    currenttask.forEach((x) => answer.push(tasks[x]));
    return answer;
}

module.exports = scheduling;

// organizar tarefas do dia a dia
// organizar trabalho de matérias
// fluxo de matérias 