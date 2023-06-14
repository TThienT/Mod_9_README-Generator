// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'BSD') {
    return `![BSD license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else if  (license === 'MIT') {
    return `![MIT license](https://img.shields.io/badge/License-MIT-brightgreen)`;
  } else if (license === 'Boost') {
    return `![Boost license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`
  } else if (license === 'MPL'){
    return '![Mozilla public license](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  } else {
    return '';
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return `[BSD license](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === 'MIT') {
    return `[MIT license](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Boost') {
    return `[Boost license](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'MPL') {
    return `[Mozilla public license](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return '';
  }

}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'BSD','MIT','Boost','MPL') {
    return `This project is copyrighted under the `
  }

}

// Function to generate markdown for README
function generateMarkdown(data) {
  const generateTableOfContents = () => {
    const sections = [
      "Title",
      "Description",
      "How to Install",
      "Usage",
      "Tests",
      "Credits",
      "License",
      "Email",
      "GitHub",
    ];

    return `# Table of Contents:\n${sections
      .map((section) => `* [${section}](#${section.toLowerCase()})`)
      .join("\n")}`;
  };

  const generateLicenseSection = (license) => {
    // Implement your logic here to generate the license section based on the license value
    return "";
  };

  const generateLicenseBadge = (license) => {
    // Implement your logic here to generate the license badge based on the license value
    return "";
  };

  const generateLicenseLink = (license) => {
    // Implement your logic here to generate the license link based on the license value
    return "";
  };

  const markdownTemplate = `# ${data.title}
${generateTableOfContents()}

# Title
${data.title}

# Description
${data.description}

# How to Install
${data.installation}

# Usage
${data.usage}

# Tests
${data.tests}

# Credits
Created By: ${data.credits}.

# License
${generateLicenseSection(data.license)}
${generateLicenseBadge(data.license)}
${generateLicenseLink(data.license)}

# Email
Have any questions? Feel free to email me at ${data.email}.

# GitHub
Follow me on GitHub where you can also ask me questions here: [${data.github}](https://github.com/${data.github}).`;

  return markdownTemplate;
}

module.exports = generateMarkdown;
