// Generate a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  };
};

// Generate Table of Contents
const createTOC = (conditionalResponse) => {
  const { github, email, title, description, installation, usage, test, contribute, license } = conditionalResponse
  let toc =
  `
## Table of Contents
[Installation Instructions](#installation-instructions)    

[Usage Instructions](#usage-instructions)
  `;
  if (contribute) {
  toc += `
[How to Contribute](#how-to-contribute)
  `;
  };
  if (test) {
  toc += `
[Tests](#tests)
  `;
  };
  toc +=
  `
[Questions](#questions)  

[License](#License)
  `;
  return toc;
};

// Generate Tests Section
const generateTest = testInfo => {
  if (!testInfo) {
    return '';
  }
  return `
## Tests
${testInfo}
  `;
};

// Generate Contribute Section
const generateContribute = contributeInfo => {
  if (!contributeInfo) {
    return '';
  }
  return `
## How to Contribute
${contributeInfo}
  `;
};

function renderLicenseSection(license, github) {
  if (license === "None") {
    return '';
  } else if (license === "MIT") {
    return `
## License
MIT License

Copyright (c) ${new Date().getFullYear()} by [${github}](https://github.com/${github})

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    `;
  } else {
    return `
## License
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (c) ${new Date().getFullYear()} by [${github}](https://github.com/${github})

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).
  `;
  };
};


module.exports = questionResponses => {
  const { github, email, title, description, installation, usage, test, contribute, license } = questionResponses;
  return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}
${createTOC(questionResponses)}
## Installation Instructions
${installation}

## Usage Instructions
${usage}
${generateTest(test)}
${generateContribute(contribute)}
## Questions
For more information about the developer, check out my [Github Profile](https://github.com/${github})
For additional questions, please reach out to me via email: [${email}](${email})
${renderLicenseSection(license, github)}
  `;
};
