// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title:${data.title}
          **Description**
          ${data.description}
          ## Table of Contents
          * [Installation instructions](#Installation instructions)
          * [Usage information](#Usage information)
          * [Contribution guidelines](#Contribution guidelines)
          * Testinstructions](#Testinstructions)
          * [License](#license)
          ##Installation instructions
          ${data.installation}
          ##Usage information
          ${data.usageinformation}
          ##Contribution guidelines
          ${data.contributionguidelines}
          ##Testinstructions
          ${data.testinstructions}
          ##License
          ${renderLicenseBadge(data.license)}
          ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  
          Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). ## License
          **GitHub**
          (https://github.com/${data.github})
          **Repository**
          (https://github.com/${data.github}/${data.repo})
          
`;
}
// TODO: Create a function that returns a license badge based on which license is passed in

const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `The license is ${license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}





module.exports = generateMarkdown;

