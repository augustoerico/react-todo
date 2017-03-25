var React = require('react');

var TaskList = require('TaskList');

var App = React.createClass({
    getInitialState: function() {
        return {
            tasks: [
                {id: 1, text: 'Play video-game'},
                {id: 2, text: 'Drink coffee'}
            ]
        }
    },
    render: function () {
        var {tasks} = this.state;
        return (
            <div>
                <TaskList tasks={tasks} />
            </div>
        )
    }
});

module.exports = App;