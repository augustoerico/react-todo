var $ = require('jquery');

module.exports = {
    filterTasks: function(tasks, showCompleted, search) {
        var filteredTasks = tasks;

        // Filter by showCompleted
        filteredTasks = filteredTasks.filter((task) => {
            return (!task.completed || showCompleted);
        });

        // Filter by search text
        filteredTasks = filteredTasks.filter((task) => {
            var text = task.text.toLowerCase();
            return search ? text.indexOf(search.toLowerCase()) > -1 : true;
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