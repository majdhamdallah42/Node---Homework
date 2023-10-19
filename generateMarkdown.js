// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'IBM'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) `

  }
  if (license === 'APACHE'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'NO LICENSE'){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
## Description
${data.Description}
## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Test](#test)
- [Githubusername](#githubusername)
- [Email](#email)

## Installation
${data.Install}
## Usage
${data.Usage}
## Contribute
${data.Contribute}
## Test
${data.Test}
## License
${renderLicenseBadge(data.License)}
## Githubusername
${data.Githubusername}
## Email
${data.Email}
`;
}

module.exports = generateMarkdown;
