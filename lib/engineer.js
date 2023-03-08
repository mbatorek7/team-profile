const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getEmployeeType() {
        return 'Engineer';
    }
};

module.exports = Engineer;