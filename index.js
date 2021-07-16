// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
inquirer
    .prompt([
        // # Title
        {
            type: 'input',
            message: 'Title: What is the title of your project?',
            name: 'title',
        },

        // ## Description
        {
            type: 'input',
            message: 'Description: What is the description of your project?',
            name: 'description',
        },

        // URL to app
        {
            type: 'input',
            message: 'Description: What is the URL to your app?',
            name: 'appUrl',
        },

        // ## Installation
        {
            type: 'input',
            message: 'Installation: What are the steps required to install your project?',
            name: 'installation',
        },

        // ## Usage: instructions
        {
            type: 'input',
            message: 'Usage: Provide instructions and examples for use. ',
            name: 'usage',
        },

        // ## Usage: demo .gif
        {
            type: 'input',
            message: 'Usage: To add a demo gif, create an `assets/images` folder in your repository and upload your demo .gif to it.  What is the name of your image file (app-name_demo.gif)?',
            name: 'demoGif',
        },

        // ## Usage: demo.gif: alt text
        {
            type: 'input',
            message: 'Usage: What alt text would you like on your demoGif?',
            name: 'altText',
        },

        // ## Credits
        {
            type: 'input',
            message: 'Credits: list any collaborators or tutorials used to make this project.',
            name: 'credits',
        },

        // ## License
        {
            type: 'list',
            message: 'License: What license protects this project?',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        },

        // ## License: URL
        {
            type: 'list',
            message: 'License link: What is the URL to your license?',
            name: 'licenseUrl',
            choices: ['https://choosealicense.com/licenses/mit/', 'https://choosealicense.com/licenses/gpl-3.0/', 'https://choosealicense.com/licenses/agpl-3.0/', 'https://choosealicense.com/licenses/lgpl-3.0/', 'https://choosealicense.com/licenses/mpl-2.0/', 'https://choosealicense.com/licenses/apache-2.0/', 'https://choosealicense.com/licenses/bsl-1.0/', 'https://choosealicense.com/licenses/unlicense/']
        },

        // ## Badge: name
        {
            type: 'input',
            message: 'Badge name: What shields.io badge does this project wear?',
            name: 'badgeName',
        },

        // ## Badge: URL
        {
            type: 'input',
            message: 'Badge link: What is the URL to your badge?',
            name: 'badgeLink',
        },

        // ## Tests
        {
            type: 'input',
            message: 'Tests: Describe tests here',
            name: 'tests',
        },

    ])

    // Print user input to the console
    .then((response) => {
        console.log(response);

        // Contents of README.md file
        const readmeMd = 
`# ${response.title}

## ${response.description}

[Open](${response.appUrl}) ${response.title}:
${response.appUrl}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${response.installation}  


## Usage 

${response.usage}  

![${response.altText}](./assets/images/${response.demoGif})


## Credits

${response.credits}  


## License

[${response.license}](${response.licenseUrl})


## Badge

![${response.badgeName}](${response.badgeLink})


## Tests

${response.tests}

---

<sup><sub> This good readme was created by [readme-generator](https://github.com/jamesboblak/readme-generator) :)</sub></sup>`;

        // Create the README.md file in ./output/ or show error if unsuccessful
        fs.writeFile("./output/README.md", readmeMd, (err) =>
            err ? console.error(err) : console.log('Success!  Your new, good README.md is in ./output :)')
        );
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
