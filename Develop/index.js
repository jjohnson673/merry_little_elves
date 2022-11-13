// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


//const generateMD = ({title, description, installation, usage, contributing, license, test, github, email}) =>
// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'Project description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter any steps required to install your projects. If no steps are needed, input "N/A".',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'usage',
    },

    {
      type: 'input',
      message: 'How can others contribute to your project?',
      name: 'contributing',

    },
    {
      type: 'input',
      message: 'If necessary, provide tests for your app and how to test it. If none apply, input "N/A"',
      name: 'tests',

    },

    {
      type: 'list',
      message: 'License?',
      name: 'license',
      choices: ['MIT', 'Mozilla Public License', 'Apache', 'GPLv3', 'BSD 3-Clause','None']

    },
    {
     type: 'input',
     message: 'What is your GitHub username?',
     name: 'github',
  
    },
    {
     type: 'input',
     message: 'Enter your preferred email for your contact information',
     name: 'email',
  
    },
  ])

// TODO: Create a function to write README file
.then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('exampleREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your README documentation!')
    );
  });

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then(function(data) {
          writeToFile('./develop/README.md', markdownGenerator(data));
          console.log(data)
          
  })    
}

// Function call to initialize app
// init();
 
