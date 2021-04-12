// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

const genTemplate = require("./template");



// TODO: Create a function to initialize app
function startFunction() {
    
    inquirer.prompt([
        
    {
        type:"input",
        name:"title",
        message:"what is the name of the project?"
        //validation:{value}
    },

    {
        type: "input",
        name: "author",
        message: "what's the name of the author?"
    },
    {
        type:"input",
        name: "username",
        message: "what is your GitHub username?"
    },
    {
        type:"input",
        name:"description",
        message:"please write a description of the project"
    },

    {
        type:"list",
        name:"license",
        message:"what license does your project have?",
        choices: ["MIT","GNU GPLv3","APACHE 2.0","ISC","GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type:"input",
        name:"installation",
        message:"what command should be run to install dependencies?"
    },
    {
        type:"input",
        name:"tests",
        message:"what command should be used to run test?"
    },
    {
        type:"input",
        name:"usage",
        message:"what does the user need to know before using the repository?"
    },
    {
        type:"input",
        name:"contribute",
        message:"what should a contributor know before adding to this repository?"
    },

    {
        type:"input",
        name:"contributors",
        message:"who else helped on this project?"
    },
])
    .then(function (answers) {
        ('./README.md', genTemplate(data))
    })


};

startFunction();