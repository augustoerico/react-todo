var React = require('react');

var TaskList = require('TaskList');
var TaskForm = require('TaskForm');
var TaskSearch = require('TaskSearch');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                {id: 1, text: 'Play video-game'},
                {id: 2, text: 'Drink coffee'}
            ],
            showCompleted: false,
            search: ''
        }
    },
    handleFormSubmit: function (text) {
        alert('new task: ' + text);
    },
    makeSearch: function (showCompleted, search) {
        this.setState({
            showCompleted: showCompleted,
            search: search
        });
    },
    render: function () {
        var {tasks} = this.state;
        return (
            <div>
                <TaskSearch onChange={this.makeSearch} />
                <TaskList tasks={tasks} />
                <TaskForm onSubmit={this.handleFormSubmit} /> 
            </div>
        )
    }
});

module.exports = App;