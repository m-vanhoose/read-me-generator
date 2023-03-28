const inquirer = import('inquirer');

const fs = require('fs');

const generateReadMe = ({title, description, installation, usage, license, contribute, tests, email, github}) =>
`# ${title} 

${description}

Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)
    
## Installation
    In order to install ${title} you must follow the procedure below:
        ${installation}
        
## Usage
    ${usage}
    
## License
    The license used for ${title} the ${license}.
    
## Contributing
    To contribute to this product please ${contribute}.
    
## Tests
    The tests applied to ${title} before being deployed are ${tests}.
    
## Questions
    For any question please contact us at ${email} and ${github}`

inquirer
    .createPromptModule([
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project.',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'Give a step by step explaination on how to install your project.',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        },
        {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: [
            {
            value: 1,
            name: 'none',
            },
            {
            value: 2,
            name: 'Apache License 2.0',
            },
            {
            value: 3,
            name: 'GNU General Public License v3.0',
            },
            {
            value: 4,
            name: 'MIT License',
            },
            {
            value: 5,
            name: 'BSD 2-clause "simplified" License',
            },
            {
            value: 6,
            name: 'BSD 3-clause "New" or "Revised" License',
            },
            {
            value: 7,
            name: 'Boost Software License 1.0',
            },
            {
            value: 8,
            name: 'Creative Commons zero v1.0 Universal License',
            },
            {
            value: 9,
            name: 'Eclipse Public License 2.0',
            },
            {
            value: 10,
            name: 'GNU Affero General Public License v3.0',
            },
            {
            value: 11,
            name: 'GNU General Public License v2.0',
            },
            {
            value: 12,
            name: 'GNU Lesser General Public License v2.1',
            },
            {
            value: 13,
            name: 'Mozilla Public License 2.0',
            },
            {
            value: 14,
            name: 'The Unlicense',
            },
        ]
        },
        {
        type: 'input',
        name: 'contribute',
        message: 'What is the best way to help contribute to your project?',
        },
        {
        type: 'input',
        name: 'tests',
        message: 'What tests did you use on your project?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is your github account name?',
        }   
    ])
    .then((answers) => {
        const readMePageInfo = generateReadMe(answers);
        fs.writeFile('README.md', readMePageInfo, (err) =>
            err ? console.log(err): console.log('README.md created')
        );
    });