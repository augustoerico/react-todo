var React = require('react');
var {connect} = require('react-redux');

var Task = require('Task');

var TaskList = React.createClass({
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

module.exports = connect(
    (state) => {
        return {
            tasks: state.tasks
        };
    }
)(TaskList);
