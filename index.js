// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

//create empty array for all employees
const teamArray = [];

//import classes and other files
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generateHTML = require('./src/generateHTML.js');


//questions for manager type
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

        //does user want to enter new employee
        //if not, then generate HTML file
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

//questions for engineer type
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

        //does user want to enter new employee
        //if not, then generate HTML file
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

//questions for intern type
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

        //does user want to enter new employee
        //if not, then generate HTML file
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

//create HTML file in dist folder
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {//if error then show error
            console.log(err);
            return;
        } else {//otherwise profile has been created
            console.log("Team profile has been created!");
        }
    })
}

//start off asking user which employee they want to add
function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which employee type would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'none']
        }
    ])
    //call functions depending on which type is chosen
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

//initialize program
init();