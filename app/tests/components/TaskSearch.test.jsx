var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {TaskSearch} from 'TaskSearch'; 

describe('TaskSearch', () => {
    
    it('should exist', () => {
        expect(TaskSearch).toExist();
    });

    it('should dispatch SET_SEARCH on input change', () => {
        var spy = expect.createSpy();
        var taskSearch = TestUtils.renderIntoDocument(<TaskSearch dispatch={spy}/>);

        taskSearch.refs.search.value = 'doge';
        TestUtils.Simulate.change(taskSearch.refs.search);

        var action = {
            type: 'SET_SEARCH',
            search: 'doge'
        };

        expect(spy).toHaveBeenCalledWith(action);

    });

    it('should dispatch TOGGLE_SHOW_COMPLETED on checkbox toggle', () => {
        var spy = expect.createSpy();
        var taskSearch = TestUtils.renderIntoDocument(<TaskSearch dispatch={spy} />);

        taskSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(taskSearch.refs.showCompleted);

        var action = {type: 'TOGGLE_SHOW_COMPLETED'};

        expect(spy).toHaveBeenCalledWith(action);
    });

});