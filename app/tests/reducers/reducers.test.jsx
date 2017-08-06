var expect = require('expect');
var deepFreeze = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {

    describe('searchReducer', () => {
        
        it('should set search text', () => {

            var action = {
                type: 'SET_SEARCH',
                search: 'cat'
            };
            var result = reducers.searchReducer(deepFreeze(''), deepFreeze(action));

            expect(result).toEqual(action.search);

        });

    });

    describe('toogleShowCompletedReducer', () => {

        it('should toggle \'Show completed\'', () => {
            
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var result = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

            expect(result).toEqual(true);

            result = reducers.showCompletedReducer(deepFreeze(result), deepFreeze(action));

            expect(result).toEqual(false);
        });

    });

    describe('tasksReducer', () => {
        
        it('should add a task', () => {

            var action = {
                type: 'ADD_TASK',
                task: {
                    id: '1',
                    text: 'Do something',
                    completed: false,
                    createAt: 987654321
                }
            }

            var result = reducers.tasksReducer(deepFreeze([]), deepFreeze(action));

            expect(result.length).toEqual(1);
            expect(result[0]).toEqual(action.task);

        });

        it('should add a list of tasks', () => {
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

            var result = reducers.tasksReducer(deepFreeze([]), deepFreeze(action));
            
            expect(result.length).toEqual(1);
            expect(result[0]).toEqual(action.tasks[0]);
        });

        it('should update a task', () => {
            var tasks = [
                {
                    id: '1234',
                    text: 'Learn Redux',
                    completed: false,
                    createdAt: 1234,
                    completedAt: undefined
                }
            ];

            var updates = {
                completed: false,
                completedAt: null
            };
            var action = {
                type: 'UPDATE_TASK',
                id: tasks[0].id,
                updates
            }

            var result = reducers.tasksReducer(deepFreeze(tasks), deepFreeze(action));

            expect(result.length).toEqual(1);
            expect(result[0].completed).toEqual(updates.completed);
            expect(result[0].completedAt).toEqual(updates.completedAt);
            expect(result[0].text).toEqual(tasks[0].text);

        });

    });

});