var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TaskForm = require('TaskForm');

describe('TaskForm', () => {
    
    it('should exist', () => {
        expect(TaskForm).toExist();
    });

    it('should call handler on form submit', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        taskForm.refs.text.value = 'foo';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('foo');
    });

    it('should not call on form submit', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        taskForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not call on form submit with whitespaces', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm onSubmit={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        taskForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});