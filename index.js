// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');

const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your project title.' }
    },
},
{
  type: "input",
  name: "description",
  message: "What is the description of your project?",
  validate: (value) => {
      if (value) { return true } else { return 'Please enter description.' }
  },
},
  { type: "list",
   name: "license",
   message: "Choose a liscence", 
   choices: ["MIT", "Apache", "GPL"]
   },
   { type: "input",
     name: "github", 
     message: "What is your GitHub Username?", 
     validate: (value) => {
      if (value) { return true } else { return 'Please enter your username.' }
    },
  },
   { type: "input",
     name: "repo", 
     message: "What is your GitHub Repository For This Project?",
     validate: (value) => {
      if (value) { return true } else { return 'Please enter your Repo.' }
    }, 
   },
  { type: "input",
    name: "installation",
    message: "Please Enter installation instructions",
    choices: "listtype",
    validate: (value) => {
      if (value) { return true } else { return 'Please Enter installation instructions' }
    }, 
  },
  { type: "input",
    name: "usageinformation",
    message: "Please Enter Usage Information",
    choices: "listtype",
    validate: (value) => {
      if (value) { return true } else { return 'Please Enter Usage Information' }
    }, 
  },
  { type: "input",
    name: "contributionguidelines",
    message: "Please Enter Contribution guidelines",
    choices: "listtype" ,
    validate: (value) => {
      if (value) { return true } else { return 'Please Enter Contribution guidelines' }
    }, 
  },
  { type: "input",
    name: "testinstructions",
    message: "Please Enter Test Instructions",
    choices: "listtype",
    validate: (value) => {
      if (value) { return true } else { return 'Please Enter Test Instructions' }
    }, 
   },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (value) => {
        if (emailValidator.validate(value)) {
            return true
        } else { return 'Please enter a valid email address' }
    },
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName, data)
  fs.writeFile(fileName, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(fileName, "utf8"));
    }
  });

}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions
      /* Pass your questions in here */
    )
    .then((answers) => {
      console.log(answers)
      // Use user feedback for... whatever!!
      var generate = generateMarkdown(answers);
      console.log(generate);
      writeToFile("README.md", generate);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
