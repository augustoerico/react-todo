import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');
var createMockStore = configureMockStore([thunk]);

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
            task: {
                id: '1',
                text: 'Thing to do',
                completed: false,
                createdAt: 98765
            }
        }
        var result = actions.addTask(action.task);

        expect(result).toEqual(action);
    });

    it('should create a task and dispatch ADD_TASK', (done) => {
        const store = createMockStore({});
        const taskText = 'Something to do';

        store.dispatch(actions.saveTask(taskText)).then(() => {
            const actions = store.getActions();
            
            expect(actions[0]).toInclude({
                type: 'ADD_TASK'
            });
            expect(actions[0].task).toInclude({
                text: taskText
            });
            done();
        }).catch(done);
    });

    it('should generate add tasks action', () => {
        var action = {
            type: 'ADD_TASKS',
            tasks: [
                {
                    id: '1',
                    text: 'Add a task',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 8001
                }
            ]
        };
        var result = actions.addTasks(action.tasks);
        
        expect(result).toEqual(action)
    });

    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var result = actions.toggleShowCompleted();

        expect(result).toEqual(action);
    });

    it('should generate update task action', () => {
        var action = {
            type: 'UPDATE_TASK',
            id: 1,
            updates: {completed: true}
        }
        var result = actions.updateTask(action.id, action.updates);

        expect(result).toEqual(action);
    });
});