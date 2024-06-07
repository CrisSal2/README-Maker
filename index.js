// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require('./generateREADME');
const { generate } = require("rxjs");
const { log, error } = require("console");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile() {

    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are some of the features of your project?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'What are some of the usages of your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What email can people use to contact you?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is github username?',
            name: 'github',
        },
        
    ])
    .then((response) => {
        const readme = generate(response);
        fs.writeFile('README.md', (readme), (err) => {
            err ? console.error(err) : console.log('README file created!');
        })
    });
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();