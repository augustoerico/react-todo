var React = require('react');
var {connect} = require('react-redux');
import Task from 'Task';
var API = require('API');

export var TaskList = React.createClass({
    renderTasks: function (tasks, showCompleted, search) {
        var filteredTasks = API.filterTasks(tasks, showCompleted, search);
        return filteredTasks.map((task) => {
            return <Task key={task.id} {...task}/>
        });
    },
    render: function () {
        var {tasks, showCompleted, search} = this.props;
        if (tasks.length === 0) {
            return (
                <div>
                    <p className="container__message">Nothing to do</p>
                </div>
            )
        }
        return (
            <div>
                {this.renderTasks(tasks)}
            </div>
        );
    }
});

export default connect(
    (state) => { return state; }
)(TaskList);
