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
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
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
            type: 'input',
            name: 'test',
            message: 'Please proved instructions on how to test this project (if applicable):',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please proved contribution guidelines for this project (if applicable):',
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
const writeToFile = readmeContent => {
    fs.writeFile('./dist/README.md', readmeContent, err => {
        if (err) throw err;
        console.log('README file generated!');
    });
};

// Function call to initialize app
promptQuestions()
.then(questionResponses => {
    return generateFile(questionResponses);
})
.then(readmeContent => {
    writeToFile(readmeContent)
});
