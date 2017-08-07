import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchReducer, showCompletedReducer, tasksReducer} from 'reducers';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        search: searchReducer,
        showCompleted: showCompletedReducer,
        tasks: tasksReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}