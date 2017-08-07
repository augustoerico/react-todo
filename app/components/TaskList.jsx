var React = require('react');
var {connect} = require('react-redux');
import Task from 'Task';
var API = require('API');

export var TaskList = React.createClass({
    renderTasks: function (tasks) {
        return tasks.map((task) => {
            return <Task key={task.id} {...task}/>
        });
    },
    render: function () {
        var {tasks, showCompleted, search} = this.props;
        var filteredTasks = API.filterTasks(tasks, showCompleted, search);
        if (filteredTasks.length === 0) {
            return (
                <div>
                    <p className="container__message">Nothing to do</p>
                </div>
            )
        }
        return (
            <div>
                {this.renderTasks(filteredTasks)}
            </div>
        );
    }
});

export default connect((state) => { return state; })(TaskList);
