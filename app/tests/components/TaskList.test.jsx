var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TaskList = require('TaskList');
var Task = require('Task');

describe('TaskList', () => {

    it('should exist', () => {
        expect(TaskList).toExist();
    });

    it('should render one Task componet for each task item', () => {
        var tasks = [
            {id: 1, text: 'foo'},
            {id: 2, text: 'bar'}
        ]
        var taskList = TestUtils.renderIntoDocument(<TaskList tasks={tasks} />);
        var taskComponents = TestUtils.scryRenderedComponentsWithType(taskList, Task);

        expect(taskList.lenght).toBe(tasks.lenght);
    });

});