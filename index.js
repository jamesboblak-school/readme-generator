// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
inquirer
    .prompt([{
            type: 'input',
            message: 'What is the name of your project',
            name: 'name',
        },
// more questions here

])

.then((response) => {
    console.log(response);
    var readmeMd = `# ${response.name}
          this good readme was created by readme-generator :)`;
    fs.writeFile("./output/README.md", readmeMd, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
