//const licenseBadge = renderLicenseBadge(license) 


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

//   function renderLicenseBadge(license) {
//     if (license !== 'None') {
//       return `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
//     }
//     return '';
//   }
// }




if(license === 'MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
}

else if(license === 'Mozilla Public License') {
  return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
}

else if(license === 'Apache') {
  return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
}
else if(license === 'GPLv3') {
  return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
}

else if(license === 'BSD 3-Clause') {
  return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
}
else {
  return ''
}

}


 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License`;

  }
  return 'This project is licensed under the ${license} license.';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

${renderLicenseSection.license}

 // This project is licensed under the ${data.licene} license.


  ## Questions?

  For any questions, you can contact me via email at ${data.email} 
  or you can connect with me on <a href=" https://github.com/${data.github}" target="_blank">Github</a> 
 
`;
}

module.exports = generateMarkdown;
