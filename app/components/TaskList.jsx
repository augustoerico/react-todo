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

module.exports = TaskList
