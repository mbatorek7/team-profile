// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = [];

const manager = require('.lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('.lib/intern.js');

function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github username?"
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
    });
}

function addIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school name?"
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
    });
}