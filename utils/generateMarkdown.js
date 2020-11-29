// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title} </h1>
  <br />

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [License] (#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This application is covered by the ${data.license} license.

  ## Questions
  Find me on Github: [${data.username}](https://github.com/${data.username})
  <br />
  Email me with any questions: ${data.email}
  <br />

`;
}

module.exports = generateMarkdown;
