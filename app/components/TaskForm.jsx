var React = require('react');

var TaskForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.text.value;

        if (text.trim()) {
            this.refs.text.value = '';
            this.props.onSubmit(text);
        } else {
            this.refs.text.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input ref="text" type="text" placeholder="Enter a new task"/>
                    <button className="button expanded" type="submit">Submit</button>
                </form>
            </div>
        )
    }
});

module.exports = TaskForm;
