var redux = require('redux');
var {searchReducer, showCompletedReducer, tasksReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        search: searchReducer,
        showCompleted: showCompletedReducer,
        tasks: tasksReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}