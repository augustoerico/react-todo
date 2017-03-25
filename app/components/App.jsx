var React = require('react');

var uuid = require('node-uuid');

var TaskList = require('TaskList');
var TaskForm = require('TaskForm');
var TaskSearch = require('TaskSearch');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                {id: uuid(), text: 'Play video-game'},
                {id: uuid(), text: 'Drink coffee'}
            ],
            showCompleted: false,
            search: ''
        }
    },
    handleFormSubmit: function (text) {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
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