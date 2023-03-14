//import class
const Manager = require('../lib/manager');

describe('manager', () => {

    const testEmployee = new Manager(1, 'Jane Doe', 'test@gmail.com', 405);

    it('should return the email of the employee', () => {
        expect(testEmployee.getOfficeNumber()).toBe(405);
    });
    
});