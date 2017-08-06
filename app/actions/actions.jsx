import firebase from 'app/firebase/';
import moment from 'moment';

export var setSearch = (search) => {
    return {
        type: 'SET_SEARCH',
        search
    };
};

export var addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    };
};

export var saveTask = (text) => {
    return (dispatch, getState) => {
        var task = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }
        var tasksRef = firebase.database().ref('tasks/').push(task);

        tasksRef.then(() => {
            dispatch(addTask({
                ...task,
                id: tasksRef.key
            }));
        });
    };
};

export var addTasks = (tasks) => {
    return {
        type: 'ADD_TASKS',
        tasks
    }
}

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    };
};