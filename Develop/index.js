// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Explain how to test your project'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List the contributors to your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project',
    choices: ['BSD', 'MIT', 'Boost', 'MPL']
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile('README.md', generateMarkdown(data));
      console.log('README.md generated successfully!');
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Call the initialize app function
init();
