var expect = require('expect');
var deepFreeze = require('deep-freeze-strict');

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

});