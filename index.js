/*************************************** Packages needed for this application ************************/


const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateREADME.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
    'What is github username?',
    'Which license would you like to add to your project'
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
            name: 'installation',
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
        {
            type: 'list',
            message: questions[7],
            choices: [
                'None',
                'Apache license 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause \"Simplified\" License',
                'BSD 3-Clause \"New\" or \"Revised\" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ],
            name: "license",
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


writeToFile();