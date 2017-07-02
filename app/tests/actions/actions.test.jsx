var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH',
            search: 'Some search text'
        };
        var result = actions.setSearch(action.search);

        expect(result).toEqual(action);
    });

    it('should generate add task action', () => {
        var action = {
            type: 'ADD_TASK',
            task: 'Thing to do'
        }
        var result = actions.addTask(action.task);

        expect(result).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var result = actions.toggleShowCompleted();

        expect(result).toEqual(action);
    });

    it('should generate toggle task', () => {
        var action = {
            type: 'TOGGLE_TASK',
            id: 1
        }
        var result = actions.toggleTask(action.id);

        expect(result).toEqual(action);
    });
});