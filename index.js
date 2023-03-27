const inquirer = require('inquirer');

const fs = require('fs');

const generateReadMe = ({}) =>
``

inquirer
    .createPromptModule([
        {

        },
    ])
    .then((answers) => {
        const readMePageInfo = generateReadMe(answers);
        fs.writeFile('README.md', readMePageInfo, (err) =>
            err ? console.log(err): console.log('README.md created')
        );
    });