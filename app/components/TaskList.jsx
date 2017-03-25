var React = require('react');

var Task = require('Task');

var TaskList = React.createClass({
    renderTasks: (tasks) => {
        return tasks.map((task) => {
            return <Task key={task.id} {...task} />
        });
    },
    render: function () {
        var {tasks} = this.props;
        console.log(tasks)
        return (
            <div>
                {this.renderTasks(tasks)}
            </div>
        )
    }
});

module.exports = TaskList