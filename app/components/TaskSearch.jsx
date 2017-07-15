var React = require('react');

var {connect} = require('react-redux');
var actions = require('actions');

export var TaskSearch = React.createClass({
    render: function () {
        var {dispatch, showCompleted, search} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="search" placeholder="Search your tasks" value={search} onChange={() => {
                        dispatch(actions.setSearch(this.refs.search.value));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed tasks
                    </label>
                </div>
            </div>
        )
    }
});

export default connect((state) => {
    return {
        showCompleted: state.showCompleted,
        search: state.search
    }
})(TaskSearch);