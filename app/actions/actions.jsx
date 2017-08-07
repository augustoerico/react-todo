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

        return tasksRef.then(() => {
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
};

export var fetchTasks = () => {
    return (dispatch, getState) => {
        return firebase.database().ref('tasks/').once('value').then((data) => {
            var tasks = [];
            var keys = Object.keys(data.val() || {});
            
            keys.forEach(function(key) {
                tasks.push({
                    id: key,
                    ...(data.val()[key])
                })
            });
            
            dispatch(addTasks(tasks));
        });
    }
}

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var updateTask = (id, updates) => {
    return {
        type: 'UPDATE_TASK',
        id,
        updates
    };
};

export var updateToggleTask = (id, completed) => {
    return (dispatch, getState) => {
        var taskRef = firebase.database().ref(`tasks/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }

        return taskRef.update(updates).then(() => {
            dispatch(updateTask(id, updates));
        });

    };
};