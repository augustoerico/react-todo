var $ = require('jquery');

module.exports = {
    setTasks: function (tasks) {
        if ($.isArray(tasks)) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return tasks;
        }
    },
    getTasks: function () {
        var tasksAsString = localStorage.getItem('tasks');
        var tasks = [];
        try {
            tasks = JSON.parse(tasksAsString)
        } catch (e) {
            
        }

        return $.isArray(tasks) ? tasks : [];
    }
};