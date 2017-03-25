var React = require('react');

var TaskForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.text.value;

        if (text.trim()) {
            this.refs.text.value = '';
            this.props.onSubmit(text);
        }
    },
    render: function () {
        return (
            <div>
                <form ref='form' placeholder= 'Enter a new task' onSubmit={this.onSubmit}>
                    <input ref='text' type='text'/>
                    <button className='button' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
});

module.exports = TaskForm;