var React = require('react');

var uuid = require('node-uuid');

var TaskList = require('TaskList');
var TaskForm = require('TaskForm');
var TaskSearch = require('TaskSearch');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                {id: uuid(), text: 'Play video-game', completed: false},
                {id: uuid(), text: 'Drink coffee', completed: true}
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
                    text: text,
                    completed: false
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
    doToggle: function (id) {
        var updatedTasks = this.state.tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        });
        this.setState({ tasks: updatedTasks });
    },
    render: function () {
        var {tasks} = this.state;
        return (
            <div>
                <TaskSearch onChange={this.makeSearch} />
                <TaskList tasks={tasks} onToggle={this.doToggle}/>
                <TaskForm onSubmit={this.handleFormSubmit} /> 
            </div>
        )
    }
});

module.exports = App;