// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your Project Title?', ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type : 'input',
                message: questions[0],
                name: 'Title'
            }
        ])
        .then((response) =>
            writeToFile('READMETEST.md', response.Title)
        );
}

// Function call to initialize app
init();
