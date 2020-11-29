// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${answers.projectTitle} </h1>
  <br />

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [License] (#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributers
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  This application is covered by the ${answers.license} license.

  ## Questions
  Find me on Github: [${answers.username}](https://github.com/${answers.username})
  <br />
  Email me with any questions: ${answers.email}
  <br />

`;
}

module.exports = generateMarkdown;
