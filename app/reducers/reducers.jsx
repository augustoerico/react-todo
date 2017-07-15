var uuid = require('node-uuid');
var moment = require('moment');

export var searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.search
        default:
            return state
    }
};

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var tasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'ADD_TASKS':
            return [...state, ...action.tasks];
        case 'TOGGLE_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    var completed = !task.completed;
                    return {
                        ...task,
                        completed: completed,
                        completedAt: completed ? moment().unix() : undefined
                    };
                }
                return task;
            });
        default:
            return state;
    }
};