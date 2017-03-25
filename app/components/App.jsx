var React = require('react');

var TaskList = require('TaskList');
var TaskForm = require('TaskForm');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                {id: 1, text: 'Play video-game'},
                {id: 2, text: 'Drink coffee'}
            ]
        }
    },
    handleFormSubmit: function (text) {
        alert('new task: ' + text);
    },
    render: function () {
        var {tasks} = this.state;
        return (
            <div>
                <TaskList tasks={tasks} />
                <TaskForm onSubmit={this.handleFormSubmit} /> 
            </div>
        )
    }
});

module.exports = App;