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
    });

    describe('filterTasks', () => {
        
        var tasks = [{
            id: 1,
            text: 'Write a test',
            completed: true
        }, {
            id: 2,
            text: 'Write ANOTHER test',
            completed: false
        }, {
            id: 3,
            text: 'Write yet another test',
            completed: true
        }];

        it('should return all item when showCompleted is checked', () => {
            var filteredTasks = API.filterTasks(tasks, true, '');
            
            expect(filteredTasks.length).toBe(3);
        });

        it('should return only non-completed tasks if showCompleted is unchecked', () => {
            var filteredTasks = API.filterTasks(tasks, false, '');

            expect(filteredTasks.length).toBe(1);
        });

        it('should sort by completed status', () => {

            var filteredTasks = API.filterTasks(tasks, true, '');
            var expectedTasks = [{
                id: 2,
                text: 'Write ANOTHER test',
                completed: false
            }, {
                id: 1,
                text: 'Write a test',
                completed: true
            }, {
                id: 3,
                text: 'Write yet another test',
                completed: true
            }]

            expect(filteredTasks.length).toBe(3);
            expect(filteredTasks).toEqual(expectedTasks);

        });

        it('should return all item matching the search text', () => {
            var filteredTasks = API.filterTasks(tasks, true, 'another');
            
            expect(filteredTasks.length).toBe(2);
        });

        it('should return all item when search text is empty', () => {
            var filteredTasks = API.filterTasks(tasks, true, '');
            
            expect(filteredTasks.length).toBe(3);
        });

    });

});