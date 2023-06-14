// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD') {
    return '![BSD license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else if (license === 'MIT') {
    return '![MIT license](https://img.shields.io/badge/License-MIT-brightgreen)';
  } else if (license === 'Boost') {
    return '![Boost license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
  } else if (license === 'MPL') {
    return '![Mozilla public license](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return '[BSD license](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'MIT') {
    return '[MIT license](https://opensource.org/licenses/MIT)';
  } else if (license === 'Boost') {
    return '[Boost license](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'MPL') {
    return '[Mozilla public license](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'BSD' || license === 'MIT' || license === 'Boost' || license === 'MPL') {
    return 'This project is licensed under ';
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Table of Contents:
* [Title](#title)
* [Description](#description)
* [How to install](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Email](#email)
* [GitHub](#github)

# Title
${data.title}

# Description
${data.description}

# How to install
${data.installation}

# Usage
${data.usage}

# Tests
${data.tests}

# Credits
Created By: ${data.credits}.

# License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

# Email
Have any questions? Feel free to email me at ${data.email}.

# GitHub
Follow me on GitHub where you can also ask me questions [here](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
