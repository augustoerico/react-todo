var React = require('react');

var moment = require('moment');

var Task = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div>
                <label>
                    <input type="checkbox" checked={completed}
                        onChange={() => {
                            this.props.onToggle(id)
                        }}/>
                    <p>{text}</p>
                    <p>{renderDate()}</p>
                </label>
            </div>
        )
    }
});

module.exports = Task
