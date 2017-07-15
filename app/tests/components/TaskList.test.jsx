var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configureStore';
import ConnectedTaskList, {TaskList} from 'TaskList';
import ConnectedTask, {Task} from 'Task'

describe('TaskList', () => {

    it('should exist', () => {
        expect(TaskList).toExist();
    });

    it('should render one Task componet for each task item', () => {
        var tasks = [
            {id: 1, text: 'foo', completed: false, completedAt: undefined, createdAt: 500},
            {id: 2, text: 'bar', completed: false, completedAt: undefined, createdAt: 500}
        ]
        var store = configure({
            tasks
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTaskList />
            </Provider>
        );
        var taskList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTaskList)[0];
        var taskComponents = TestUtils.scryRenderedComponentsWithType(taskList, ConnectedTask);

        expect(taskComponents.length).toBe(tasks.length);
    });

    it('should render empty message for no tasks', () => {
        var tasks = []
        var taskList = TestUtils.renderIntoDocument(<TaskList tasks={tasks} />);
        var $el = $(ReactDOM.findDOMNode(taskList));

        expect($el.find('.container__message').length).toBe(1);
    });

});
