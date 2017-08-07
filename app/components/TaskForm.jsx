var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TaskForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.text.value;

        if (text.trim()) {
            this.refs.text.value = '';
            dispatch(actions.saveTask(text))
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

export default connect()(TaskForm);