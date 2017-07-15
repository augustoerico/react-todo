var React = require('react');
var {connect} = require('react-redux');
import Task from 'Task';

export var TaskList = React.createClass({
    renderTasks: function (tasks) {
        return tasks.map((task) => {
            return <Task key={task.id} {...task}/>
        });
    },
    render: function () {
        var {tasks} = this.props;
        if (tasks.length === 0) {
            return (
                <div>
                    <p className="container__message">Nothing to do</p>
                </div>
            )
        } else {
            return (
                <div>
                    {this.renderTasks(tasks)}
                </div>
            )
        }
    }
});

export default connect(
    (state) => {
        return {
            tasks: state.tasks
        };
    }
)(TaskList);
