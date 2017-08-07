var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var App = require('App');
var API = require('API');

var actions = require('actions');
var store = require('configureStore').configure();

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

store.dispatch(actions.fetchTasks());

$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
