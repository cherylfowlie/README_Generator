// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const updateReadme = require("./templateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "What is your table of contents: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Cloud Native",
                "GNU",
                "NPM",
                "OpenBSD",
                "Mozilla",
                "RUST"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if theres an error or problem? "
        },
        //Adding for contract info
        {
            type: "input",
            name: "githubusername",
            message: "What is your github username? "
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?  "
        },
    ]);
}

async function init() {
    try {
        // add the answer vars
        const answers = await promptUser();
        const generateContent = updateReadme(answers);
        // write to the asset folder with README.md
        await writeFileAsync('./asset/README.md', generateContent);
        console.log('Successfully added to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();  