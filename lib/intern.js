//import parent class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getEmployeeType() {
        return 'Intern';
    }
};

module.exports = Intern;