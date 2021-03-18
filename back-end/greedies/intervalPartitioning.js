const Task = require('../classes/task');
const jobs = require('../data/materias');




function orderByStart() {
    
}



function partitioning() {

    let depth = 1;
    let tasks = [];
    for (const job of jobs) {
        tasks.push(new Task({task : job}))
    }
    // sort(tasks);

    let classroom = [[0]];
    let k;
    for (let i = 1; i < tasks.length; i++) {
        for(k = 0; k < depth; k++){
            if(tasks[i]._start >= tasks[classroom[k][0]]._finish) {
                classroom[k].unshift(i);
                break;
            }
        }
        if(k === depth){

            classroom.push([i]);
            depth++;
        }
    
    }


    let answer = [];
    for(let i = 0; i < depth; i++){
        answer.push([]);
        classroom[i].forEach((x) => answer[i].unshift(tasks[x]));
    }
    // currenttask.forEach((x) => answer.push(tasks[x]));
    return answer;
}

module.exports = partitioning;

// organizar tarefas do dia a dia
// organizar trabalho de matérias
// fluxo de matérias 