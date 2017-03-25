var React = require('react');

var TaskSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var search = this.refs.search.value;

        this.props.handleSearch(showCompleted, search);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="search" placeholder="Search your tasks" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TaskSearch;