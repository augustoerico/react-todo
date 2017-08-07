var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
import {Task} from 'Task';

describe('Task', () => {

    it('should exist', () => {
        expect(Task).toExist();
    });

    it('should dispatch TOGGLE_TASK action on click', () => {
        var task = {
            id: 200,
            text: 'Write Task test',
            completed: false
        };

        var action = actions.updateToggleTask(task.id, !task.completed);

        var spy = expect.createSpy();
        var task = TestUtils.renderIntoDocument(<Task {...task} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(task));

        TestUtils.Simulate.change($el.find('input')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

});