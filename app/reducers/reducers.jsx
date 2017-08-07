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
                action.task
            ];
        case 'ADD_TASKS':
            return [...state, ...action.tasks];
        case 'UPDATE_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates
                    }
                }
                return task;
            });
        default:
            return state;
    }
};