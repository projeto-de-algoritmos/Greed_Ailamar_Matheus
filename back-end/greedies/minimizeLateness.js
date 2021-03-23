
function orderByDeadline(tasks) {
    tasks.sort((a, b) => {
        return (a._start - b._start);
    })
}



function lateness(tasks) {


    orderByDeadline(tasks);
    let ltns = 0;
    let t = 0;
    for (let i = 0; i < tasks.length; i++) {
        t = t + tasks[i]._finish;
        if(tasks[i]._start < t){
            ltns = t - tasks[i]._start;

        }
    }

    let answer = {start: 0, final: t, totalLateness: ltns, list: tasks};

    return answer;
}

module.exports = lateness;

// organizar tarefas do dia a dia
// organizar trabalho de matérias
// fluxo de matérias 