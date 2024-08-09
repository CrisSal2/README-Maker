/*************************************** Packages needed for this application ************************/


const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


/***************************************** Questions array for prompt **********************************/

// contribution guidelines
// test instructions


const questions = [
    'What is the title of your project?',
    'Give a description of your project:',
    'How do you install your project?',
    'What are some of the features of your project?',
    'What are some of the usages of your project?',
    'Contribution guidelines for your project:',
    'Test instructions for your project:',
    'What email can people use to contact you?',
    'What is github username?',
    'Which license would you like to add to your project'
];


function writeToFile (data) {
    fs.writeFile('sampleREADME.md', data, (err) =>
        err ? console.error(err) : console.log('README file has been successfully created.'))
};


/***************************************** User Input Function ****************************************/


function init() {
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
            name: 'contribution',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'github',
        },
        {
            type: 'list',
            message: questions[9],
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
    .then((response) => {
        const data = generateMarkdown(response);
        writeToFile(data);
    })
};


/*************************************************** Initializes app ******************************************/


init();