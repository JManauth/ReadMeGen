// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your Project Title?', 'What is your dog\'s name?', ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# ${data.Title}\n`, (err) => 
    err ? console.log(err)  : console.log('Success!')
    );
    fs.appendFile(fileName, `${data.DogName}\n`, (err) => 
    err ? console.log(err) : console.log('success! pt 2')
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
            },
            {
                Type: 'Pet',
                message: questions[1],
                name: 'DogName'
            }

        ])
        .then((response) =>
            writeToFile('READMETEST.md', response)
        );
}

// Function call to initialize app
init();
