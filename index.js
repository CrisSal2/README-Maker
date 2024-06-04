// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [title, description, features, usage, email, github];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer
    .prompt ([
        {
            type: 'input',
            messege: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            messege: 'Give a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            messege: 'What are some of the features of your project?',
            name: 'features',
        },
        {
            type: 'input',
            messege: 'What are some of the usages of your project?',
            name: 'usage',
        },
        {
            type: 'input',
            messege: 'What email can people use to contact you?',
            name: 'email',
        },
        {
            type: 'input',
            messege: 'What is github username?',
            name: 'github',
        },
        
    ])
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();