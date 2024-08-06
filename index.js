// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Function to generate README content
const generateREADME = (data) => `
# ${data.title}

![License](https://img.shields.io/badge/license-${data.license.replace(/\s+/g, '%20')}-blue)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me on [GitHub](https://github.com/${data.githubUsername}) or email me at ${data.email}.
`;

// Inquirer prompts for user input
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => input ? true : 'Title is required.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
    validate: input => input ? true : 'Description is required.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
    validate: input => input ? true : 'Installation instructions are required.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
    validate: input => input ? true : 'Usage information is required.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    default: 'MIT'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
    validate: input => input ? true : 'Contribution guidelines are required.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
    validate: input => input ? true : 'Test instructions are required.'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
    validate: input => input ? true : 'GitHub username is required.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: input => input ? true : 'Email address is required.'
  }
]).then((answers) => {
  // Generate README content
  const readmeContent = generateREADME(answers);

  // Write README file
  fs.writeFile(path.join(__dirname, 'README.md'), readmeContent, (err) =>
    err ? console.error(err) : console.log('README.md file has been created!')
  );
});
