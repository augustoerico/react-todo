export var setSearch = (search) => {
    return {
        type: 'SET_SEARCH',
        search
    }
}

export var addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
}

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

export var toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    }
}