var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Task = require('Task');

describe('Task', () => {

    it('should exist', () => {
        expect(Task).toExist();
    });

    it('should call onToggle with id on change', () => {
        var task = {
            id: 200,
            text: 'Write Task test',
            completed: false
        };

        var spy = expect.createSpy();
        var task = TestUtils.renderIntoDocument(<Task {...task} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(task));

        TestUtils.Simulate.change($el.find('input')[0]);
        expect(spy).toHaveBeenCalledWith(200);
    });

});