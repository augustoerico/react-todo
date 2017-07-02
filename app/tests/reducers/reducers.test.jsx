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
                text: 'Do something'
            }

            var result = reducers.tasksReducer(deepFreeze([]), deepFreeze(action));

            expect(result.length).toEqual(1);
            expect(result[0].text).toEqual(action.text);

        });

        it('should toggle a task', () => {
            var action = {
                type: 'TOGGLE_TASK',
                id: '1234'
            }
            var tasks = [
                {
                    id: '1234',
                    text: 'Learn Redux',
                    completed: false,
                    createdAt: 1234,
                    completedAt: undefined
                }
            ];

            var result = reducers.tasksReducer(deepFreeze(tasks), deepFreeze(action));

            expect(result.length).toEqual(1);
            expect(result[0].completed).toEqual(true);
            expect(result[0].completedAt).toNotEqual(undefined);

            result = reducers.tasksReducer(deepFreeze(result), deepFreeze(action));
            
            expect(result[0].completed).toEqual(false);
            expect(result[0].completedAt).toEqual(undefined);

        });

    });

});