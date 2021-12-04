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

function x () {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            ${data.Description}
            ${(data.TableofContent)}
            ${data.name}(https://github.com/${data.github})
            ${data.name}(https://github.com/${data.github}/${data.repo})
            ${renderLicenseBadge(data.license)}
            
`;
}

module.exports = generateMarkdown;

