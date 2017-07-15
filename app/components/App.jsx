var React = require('react');

var uuid = require('node-uuid');
var moment = require('moment');

import TaskList from 'TaskList';
import TaskForm from 'TaskForm';
import TaskSearch from 'TaskSearch';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">To do App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large -5">
                        <div className="container">
                            <TaskSearch />
                            <TaskList />
                            <TaskForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = App;
