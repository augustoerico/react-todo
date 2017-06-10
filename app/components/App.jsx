var React = require('react');

var uuid = require('node-uuid');
var moment = require('moment');

var TaskList = require('TaskList');
var TaskForm = require('TaskForm');
var TaskSearch = require('TaskSearch');
var API = require('API');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: API.getTasks(),
            showCompleted: false,
            search: ''
        }
    },
    componentDidUpdate: function () {
        API.setTasks(this.state.tasks);
    },
    handleFormSubmit: function (text) {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
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
                task.completedAt = task.completed ? moment().unix() : undefined;
            }
            return task
        });
        this.setState({ tasks: updatedTasks });
    },
    render: function () {
        var {tasks, showCompleted, search} = this.state;
        var filteredTasks = API.filterTasks(tasks, showCompleted, search);
        return (
            <div>
                <h1 className="page-title">To do App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large -5">
                        <div className="container">
                            <TaskSearch onChange={this.makeSearch} />
                            <TaskList tasks={filteredTasks} onToggle={this.doToggle}/>
                            <TaskForm onSubmit={this.handleFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = App;
