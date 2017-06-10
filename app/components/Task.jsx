var React = require('react');

var moment = require('moment');

var Task = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var taskClassName = completed ? 'task task-completed' : 'task';
        var renderDate = () => {
            var message = 'Create ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={taskClassName}>
                <div>
                    <input type="checkbox" checked={completed}
                        onChange={() => {
                            this.props.onToggle(id)
                        }}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="task__subText">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

module.exports = Task
