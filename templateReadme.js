
//Update and populate the read me below

function templateReadme(answers) {

    //Return the according HTML content 
    return `
<h1 align="center">${answers.title} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
🔌 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👷‍♀️ ${answers.contributing}

## Tests
🧪 ${answers.tests}

## Questions
❓ ${answers.questions}<br />
<br/>

### Contact
😻 GitHub: [${answers.githubusername}](https://github.com/${answers.githubusername})<br />
<br />
📧 Email me with any questions: ${answers.email}<br/><br/>
[README-generator](https://github.com/cherylfowlie/README_Generator)
    `;
}

module.exports = templateReadme;