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