/*************************************************** Renders License Badge *******************************************************/


function renderLicenseBadge(license) {
  let badge = "";
  let licenseOptions =
  {
    "Apache license 2.0": "https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg",
    "GNU General Public License v3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "BSD 2-Clause \"Simplified\" License": "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    "BSD 3-Clause \"New\" or \"Revised\" License": "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
    "Boost Software License 1.0": "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    "Creative Commons Zero v1.0 Universal": "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
    "Eclipse Public License 2.0": "https://img.shields.io/badge/License-EPL_2.0-red.svg",
    "GNU Affero General Public License v3.0": "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    "GNU General Public License v2.0": "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    "GNU Lesser General Public License v2.1": "https://img.shields.io/badge/License-LGPL_v2.1-blue.svg",
    "Mozilla Public License 2.0": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    "The Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg"
  }

  if (license !== "None") {
    badge = `![License](${licenseOptions[license]})`
  }
  return badge;
};

  
/************************************************* Function to render license **********************************/


function renderLicenseLink(license) {
  let licenseLink = "";
  if (license !== "None") {
    licenseLink = "- [License](#license)"
  }
  return licenseLink;
};


/************************************************ If there is no license, return an empty string ************************************/


function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "None") {
    licenseSection = `## License\n${license}`;
  }
  return licenseSection;
};



/************************************************* README File to be created using index.js prompt ****************************************/


const generateMarkdown = ({title, description, installation, features, usage, contribution, tests, github, email, license}) =>
  `## ${title}

  # License
  ${renderLicenseBadge(license)}
  
## Description
  
  - ${description}
  
## Table of Contents
  
  - [Installation](#installation)
  - [Features](#features)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
## Installation
  
  - ${installation}
  
## Features
  
  - ${features}


## Usage
  
  - ${usage}
  
  
## Contribution
  
  - ${contribution}
  
  
## Tests
  
  - ${tests}
  
  
## Questions
  
  - https://github.com/${github}
  
  - ${email}
  
`;




module.exports = generateMarkdown;