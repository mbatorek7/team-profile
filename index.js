// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = [];

const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./src/generateHTML.js');

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
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message: 'Do you want to add another employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);

        switch(answers.addAnotherEmployee) {
            case 'Yes':
                init();
                break;
            case 'No':
                writeToFile(generateHTML(teamArray));
                break;
        }
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
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message: 'Do you want to add another employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);

        switch(answers.addAnotherEmployee) {
            case 'Yes':
                init();
                break;
            case 'No':
                writeToFile(generateHTML(teamArray));
                break;
        }
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
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message: 'Do you want to add another employee?',
            choices: ['Yes', 'No']
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);

        switch(answers.addAnotherEmployee) {
            case 'Yes':
                init();
                break;
            case 'No':
                writeToFile(generateHTML(teamArray));
                break;
        }

    });
}

function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile has been created!");
        }
    })
}

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which employee type would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'none']
        }
    ])
    .then(function(userInput) {
        switch(userInput.employeeType) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'none':
                writeToFile(generateHTML(teamArray));
                break;
        }
    }) 
}

init();