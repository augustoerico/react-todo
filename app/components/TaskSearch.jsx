var React = require('react');

var TaskSearch = React.createClass({
    onChange: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var search = this.refs.search.value;

        this.props.onChange(showCompleted, search);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="search" placeholder="Search your tasks" onChange={this.onChange}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.onChange}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TaskSearch;