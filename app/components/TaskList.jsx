var React = require('react');

var Task = require('Task');

var TaskList = React.createClass({
    renderTasks: function (tasks) {
        return tasks.map((task) => {
            return <Task key={task.id} {...task} 
                onToggle={this.props.onToggle}/>
        });
    },
    render: function () {
        var {tasks} = this.props;
        return (
            <div>
                {this.renderTasks(tasks)}
            </div>
        )
    }
});

module.exports = TaskList