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
    },
    filterTasks: function(tasks, showCompleted, search) {
        var filteredTasks = tasks;

        // Filter by showCompleted
        filteredTasks = filteredTasks.filter((task) => {
            return (!task.completed || showCompleted);
        });

        // Filter by search text
        filteredTasks = filteredTasks.filter((task) => {
            var text = task.text.toLowerCase();
            return search ? text.indexOf(search) > -1 : true;
        })

        // Sort tasks with non-completed first
        filteredTasks = filteredTasks.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTasks;
    }
};