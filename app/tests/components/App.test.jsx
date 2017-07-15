var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
var TaskList = require('TaskList');
var App = require('App');

describe('App', () => {

    it('should exist', () => {
        expect(App).toExist();
    });

    it('Should render TaskList', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <App />
            </Provider>
        );

        var app = TestUtils.scryRenderedComponentsWithType(provider, App)[0]
        var taskList = TestUtils.scryRenderedComponentsWithType(app, TaskList);

        expect(taskList.length).toEqual(1);
    });

});
