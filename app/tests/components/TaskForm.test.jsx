var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {TaskForm} = require('TaskForm');

describe('TaskForm', () => {
    
    it('should exist', () => {
        expect(TaskForm).toExist();
    });

    it('should dispatch ADD_TASK when valid task text', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        var action = {
            type: 'ADD_TASK',
            text: 'foo'
        };

        taskForm.refs.text.value = 'foo';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TASK when invalid text', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        taskForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

    it('should not dispatch ADD_TASK when text submit with whitespaces', () => {
        var spy = expect.createSpy();
        var taskForm = TestUtils.renderIntoDocument(<TaskForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(taskForm));

        taskForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});