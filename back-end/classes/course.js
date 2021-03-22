class Course {
    constructor(props){
        this._label = props.course[0];
        this._weigth = props.class[1];
        this._classes = props.course[2];
    }
}

module.exports = Course;