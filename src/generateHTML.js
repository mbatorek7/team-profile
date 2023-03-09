const Employee = require('../lib/employee')
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function renderManagerCard(manager) {
    console.log(manager)
    return `
        <div class="card" style="width: 18rem;">
            <img src="./assets/images/manager.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${manager.getName()}</h4>
                <h5>${manager.getEmployeeType()}</h5>
                <p class="card-text">ID: ${manager.getId()}
                <br> Email: ${manager.getEmail()} 
                <br> Office Number: ${manager.getOfficeNumber()} </p>
                <a href="${manager.getEmail()}" class="btn btn-primary">Email me!</a>
            </div>
        </div>
    `;
}

function renderEngineerCard(engineer) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="./assets/images/engineer.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${engineer.getName()}</h4>
                <h5>${engineer.getEmployeeType()}</h5>
                <p class="card-text">ID: ${engineer.getId()}
                <br> Email: ${engineer.getEmail()} 
                <br> GitHub: ${engineer.getGithub()} </p>
                <a href="${engineer.getEmail()}" class="btn btn-primary">Email me!</a>
            </div>
        </div>
    `;
}

function renderInternCard(intern) {
    return `
        <div class="card" style="width: 18rem;">
            <img src="./assets/images/intern.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${intern.getName()}</h4>
                <h5>${intern.getEmployeeType()}</h5>
                <p class="card-text">ID: ${intern.getId()}
                <br> Email: ${intern.getEmail()} 
                <br> School: ${intern.getSchool()} </p>
                <a href="${intern.getEmail()}" class="btn btn-primary">Email me!</a>
            </div>
        </div>
    `;
}

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
            <!-- BOOTSTRAP -->
            <link rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous">

            <title>Team Profile</title>
        </head>
    
        <body>
            <div class="mt-4 p-5 bg-primary text-white rounded text-center">
                <h1>Team Profile</h1>
            </div>
    
            <div class="container">
                <div class="row"> 
                    ${renderManagerCard(data.manager)}
                    ${renderEngineerCard(data.engineer)}
                    ${renderInternCard(data.intern)}
                </div>
            </div>
    
        </body>
    </html>
    `;
}

module.exports = generateHTML;