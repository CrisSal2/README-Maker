/*************************************** Packages needed for this application ************************/


const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require('./utils/generateREADME');
const { generate } = require("rxjs");
const { log, error } = require("console");


/***************************************** Questions array for prompt **********************************/

const questions = [
    'What is the title of your project?',
    'Give a description of your project:',
    'How do you install your project?',
    'What are some of the features of your project?',
    'What are some of the usages of your project?',
    'What email can people use to contact you?',
    'What is github username?'
];


/***************************************** User Input Function ****************************************/


function writeToFile() {
    inquirer
        .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'Installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'features',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[6],
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