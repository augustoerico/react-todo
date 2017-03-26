var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var App = require('App');

describe('App', () => {

    it('should exist', () => {
        expect(App).toExist();
    });

    it('should add a new task to list', () => {
        var app = TestUtils.renderIntoDocument(<App />);

        app.setState({ tasks: [] });
        app.handleFormSubmit('Test text');

        expect(app.state.tasks[0].text).toBe('Test text');
    });

    it('should toggle completed value when doToggle is called', () => {
        var task = {
            id: 11,
            text: 'Test toggle',
            completed: false
        };
        var app = TestUtils.renderIntoDocument(<App />);
        app.setState({ tasks: [task] });
        
        app.doToggle(11);
        expect(app.state.tasks[0].completed).toBe(true);

        app.doToggle(11);
        expect(app.state.tasks[0].completed).toBe(false);
    });

});