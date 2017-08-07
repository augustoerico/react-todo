import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase from 'app/firebase/';
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

    describe('Firebase tasks', () => {
        var testTasksRef = firebase.database().ref('tasks/');

        beforeEach((done) => {
            testTasksRef.remove().then(() => {
                return testTasksRef.push({
                    text: 'Something to do',
                    completed: false,
                    createdAt: 987654321
                });
            }).then(() => done()).catch(done);
        });

        afterEach((done) => {
            testTasksRef.remove().then(() => done()).catch(done);
        });

        it('should toggle task and dispatch UPDATE_TASK action', (done) => {
            const store = createMockStore({});
            const action = actions.updateToggleTask(testTasksRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TASK',
                    id: testTasksRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();
            }).catch(done);
        });

        it('should create a task and dispatch ADD_TASK action', (done) => {
            const taskText = 'Another thing to do';
            const store = createMockStore();
            const action = actions.saveTask(taskText);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions.length).toEqual(1);
                expect(mockActions[0]).toInclude({
                    type: 'ADD_TASK'
                });
                expect(mockActions[0].task).toInclude({
                    text: taskText,
                    completed: false,
                    completedAt: null
                });
                expect(mockActions[0].task.createdAt).toExist();
                done();
            }).catch(done);
        });

        it('should fetch tasks and dispatch ADD_TASKS action', (done) => {
            const store = createMockStore();
            const action = actions.fetchTasks();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TASKS');
                expect(mockActions[0].tasks.length).toEqual(1);
                expect(mockActions[0].tasks[0]).toInclude({
                    text: 'Something to do',
                    completed: false,
                    createdAt: 987654321
                });
                done();
            }).catch(done);
        });
    });
});