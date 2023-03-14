//import class
const employee = require('../lib/employee');

describe('employee', () => {

    const testEmployee = new employee(1, 'Jane Doe', 'test@gmail.com');

    it('should return the id of the employee', () =>  {
        expect(testEmployee.getId()).toBe(1);
    });

    it('should return the name of the employee', () => {
        expect(testEmployee.getName()).toBe('Jane Doe');
    });

    it('should return the email of the employee', () => {
        expect(testEmployee.getEmail()).toBe('test@gmail.com');
    });
    
});