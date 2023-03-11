const Engineer = require('../lib/engineer');

describe('engineer', () => {

    const testEmployee = new Engineer(1, 'Jane Doe', 'test@gmail.com', 'github.com/test');

    it('should return the email of the employee', () => {
        expect(testEmployee.getGithub()).toBe('github.com/test');
    });
    
});