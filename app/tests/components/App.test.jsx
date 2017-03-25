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

});