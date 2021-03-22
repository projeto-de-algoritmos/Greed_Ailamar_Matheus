class Task {
    constructor(props){
        this._days = props.class[0]
        this._start = props.task[1];
        this._finish = props.task[2];
    }
}

module.exports = Task;