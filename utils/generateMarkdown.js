// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
        # Title:${data.title}
          **Description**
          ${data.description}
          ${renderLicenseBadge(data.license)}
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
          Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.
          Licensed under the ${data.license} license.  
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


