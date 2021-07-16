// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
inquirer
    .prompt([{
            type: 'input',
            message: 'Title: What is the title of your project?',
            name: 'title',
        },

    {
        type: 'input',
        message: 'Description: What is the description of your project?',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Installation: What are the steps required to install your project?',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'Usage: Provide instructions and examples for use. ',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Usage: To add a demo gif, create an `assets/images` folder in your repository and upload your demo .gif to it.  What is the name of your image file (example: app-name_demo.gif)?',
        name: 'demoGif',
    },

    {
        type: 'input',
        message: 'Usage: What alt text would you like on your demoGif?',
        name: 'altText',
    },


    {
        type: 'input',
        message: 'Credits: list any collaborators or tutorials used to make this project.',
        name: 'credits',
    },

    {
        type: 'input',
        message: 'License: What license protects this project?',
        name: 'license',
    },

    {
        type: 'input',
        message: 'Badge name: What shields.io badge does this project wear?',
        name: 'badgeName',
    },

    {
        type: 'input',
        message: 'Badge link: What is the URL to your badge?',
        name: 'badgeLink',
    },

    {
        type: 'input',
        message: 'Tests: Describe tests here',
        name: 'tests',
    },

])

.then((response) => {
    console.log(response);
    var readmeMd = `
# ${response.title}

## ${response.description}

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

${response.license}  


## Badge

![${response.badgeName}](${response.badgeLink})


## Tests

${response.badgeName}

---

###### this good readme was created by readme-generator :)`;

// Create the README.md file in ./output/
    fs.writeFile("./output/README.md", readmeMd, (err) =>
        err ? console.error(err) : console.log('Success!  Your new, good README.md is in ./output')
    );
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
