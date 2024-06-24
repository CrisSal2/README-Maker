/************************************************* README File to be created using index.js prompt ****************************************/


const generate = ({title, description, installation, features, usage, github, email}) =>
    `## ${title}
    
## Description
    
    - ${description}
    
## Table of Contents
    
    - [Installation](#installation)
    - [Features](#features)
    - [Usage](#usage)
    - [Contact](#Contact)
    - [License] ${renderLicenseLink(data.license)}
    
## Installation
    
    - ${installation}
    
## Features
    
    - ${features}


## Usage
    
    - ${usage}
    
    
### Contact
    
    - https://github.com/${github}
    
    - ${email}
    
`;


/************************************** Exports Function to be used in index.js ******************************/


module.exports = {
        generate,
      };