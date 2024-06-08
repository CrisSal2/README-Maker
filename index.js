/*************************************** Packages needed for this application ************************/


const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require('./generateREADME');
const { generate } = require("rxjs");
const { log, error } = require("console");


/***************************************** User Input Function ****************************************/


function writeToFile() {
    inquirer
        .prompt([
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
    .then(
        (answers) => {
        const readme = generateREADME.generate(answers);
        fs.writeFile('README2.md', (readme), (err) => 
            err ? console.error(err) : console.log('README file created!')
        );
    });
};


/*************************************************** Initializes app ******************************************/


function init() {
    writeToFile();
}

// Function call to initialize app
init();