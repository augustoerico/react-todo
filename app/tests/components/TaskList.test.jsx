var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TaskList = require('TaskList');

describe('TaskList', () => {

    it('should exist', () => {
        expect(TaskList).toExist();
    });

});