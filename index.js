const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process:"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who is contributing to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests included?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your Github username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:"
        }
    ]);
}

// function to initialize program
async function init() {
    try {
        const data = await promptUser();
        const generateContent = generateMarkdown(data);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to READMe.md');
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
