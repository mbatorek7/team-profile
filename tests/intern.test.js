const Intern = require('../lib/intern');

describe('intern', () => {

    const testEmployee = new Intern(1, 'Jane Doe', 'test@gmail.com', 'Valpo');

    it('should return the email of the employee', () => {
        expect(testEmployee.getSchool()).toBe('Valpo');
    });
    
});