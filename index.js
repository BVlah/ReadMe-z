// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateFile = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const promptQuestions = () => {
    console.log(`
    ====================================================================
    Welcome to ReadMe-z - The Easiest Professional ReadMe File Generator
    ====================================================================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please proved a short description of the project \n (i.e. What was your motivation? What problem does it solve? What did you learn?):',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please proved installation instructions for this project:',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter instalation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please proved usage instructions for this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to provide tests for your application?',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please proved instructions on how to test this project:',
            when: ({confirmTest}) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Would you like other developers to contribute to this project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please proved contribution guidelines for this project (if applicable):',
            when: ({confirmContribute}) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your repository:',
            choices: [
                'MIT',
                'GNU GPLv2',
                'None'
            ]
        }
    ]);
};


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = readmeContent => {}
// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
promptQuestions()
.then((questionResponses) => {
    return generateFile(questionResponses);
});
