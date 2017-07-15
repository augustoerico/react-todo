var React = require('react');

var uuid = require('node-uuid');
var moment = require('moment');

import TaskList from 'TaskList';
import TaskForm from 'TaskForm';
import TaskSearch from 'TaskSearch';
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
                            <TaskList />
                            <TaskForm onSubmit={this.handleFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = App;
