// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is project title',
    name: 'Title',
},
{
    type: 'input',
    message: 'What is the description of this project?',
    name: 'Description'
}, {
    type: 'input',
    message: 'How to install application?',
    name: 'Install',
}, {
    type: 'input',
    message: 'How to use application',
    name: 'Usage'
}, {
    type: 'input',
    message: 'Who contributed',
    name: 'Contribute',

}, {
    type: 'input',
    message: 'How to test application',
    name: 'Test',
}, {
    type: 'list',
    message: 'Chose the following license',
    name: 'License',
    choices: ['MIT', 'IBM', 'APACHE', 'NO LICENSE']
}, {
    type: 'input',
    messgae: 'What is your github username',
    name: 'Githubusername',
}, {
    type: 'input',
    message: 'What is your email',
    name: 'Email'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(data=>{
        writeToFile('README.md',data)
    })
 }

// Function call to initialize app
init();
