var expect = require('expect');

var API = require('API');

describe('API', () => {

    beforeEach(() => {
        localStorage.removeItem('tasks');
    });

    it('should exist', () => {
        expect(API).toExist();
    });

    describe('setTasks', () => {
        it('should set valid tasks array', () => {
            var tasks = [{
                id: 23,
                text: 'Write a test',
                completed: false
            }];
            API.setTasks(tasks);

            var actualTasks = JSON.parse(localStorage.getItem('tasks'));
            expect(actualTasks).toEqual(tasks);
        });

        it('should not persist data that is not a list', () => {
            var invalidTasks = {a: 'a', b: 'b'};
            API.setTasks(invalidTasks);

            expect(localStorage.getItem('tasks')).toBe(null);
        });
    });

    describe('getTasks', () => {

        it('should return an empty list', () => {
            var actualTasks = API.getTasks();
            expect(actualTasks).toEqual([]);
        });

        it('should return a valid task list', () => {
            var tasks = [{
                id: 23,
                text: 'Write a test',
                completed: false
            }];
            localStorage.setItem('tasks', JSON.stringify(tasks));

            var actualTasks = API.getTasks();
            expect(actualTasks).toEqual(tasks);
        });
    })

});