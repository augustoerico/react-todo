var React = require('react');

var Task = React.createClass({
    render: function () {
        var {id, text, completed} = this.props
        return (
            <div>
                <label>
                    <input type="checkbox" checked={completed} 
                        onChange={() => {
                            this.props.onToggle(id)
                        }}/>
                    {text}
                </label>
            </div>
        )
    }
});

module.exports = Task