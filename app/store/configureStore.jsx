var redux = require('redux');
var {searchReducer, showCompletedReducer, tasksReducer} = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        search: searchReducer,
        showCompleted: showCompletedReducer,
        tasks: tasksReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}