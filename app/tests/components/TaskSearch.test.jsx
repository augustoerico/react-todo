var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TaskSearch = require('TaskSearch');

describe('TaskSearch', () => {
    
    it('should exist', () => {
        expect(TaskSearch).toExist();
    });

    it('should call onChange with input text', () => {
        var spy = expect.createSpy();
        var taskSearch = TestUtils.renderIntoDocument(<TaskSearch onChange={spy}/>);

        taskSearch.refs.search.value = 'doge';
        TestUtils.Simulate.change(taskSearch.refs.search);

        expect(spy).toHaveBeenCalledWith(false, 'doge');

    });

    it('should call onChange with input check box', () => {
        var spy = expect.createSpy();
        var taskSearch = TestUtils.renderIntoDocument(<TaskSearch onChange={spy} />);

        taskSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(taskSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });

});