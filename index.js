// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import colors from "colors";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: colors.brightMagenta("What is the title of your project?"),
  },
  {
    type: "input",
    name: "description",
    message: colors.brightGreen("Provide a description of your project:"),
  },
  {
    type: "input",
    name: "installation",
    message: colors.brightMagenta("What are the installation instructions?"),
  },
  {
    type: "input",
    name: "usage",
    message: colors.brightGreen("What is the usage information?"),
  },
  {
    type: "input",
    name: "contributing",
    message: colors.brightMagenta("What are the contribution guidelines?"),
  },
  {
    type: "input",
    name: "tests",
    message: colors.brightGreen("What are the test instructions?"),
  },
  {
    type: "list",
    name: "license",
    message: colors.brightMagenta("Choose a license for your project:"),
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: colors.brightGreen("Enter your GitHub username:"),
  },
  {
    type: "input",
    name: "email",
    message: colors.brightMagenta("Enter your email address:"),
  },
];
// TODO: Create a function to generate the README content
function writeToFile(data) {
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
The license for this project is: ${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
For questions, please contact me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
    `;
}
// TODO: Create a function to initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(
        colors.brightMagenta(
          "Generating your README file with the following data:"
        ),
        answers
      );
      // Generate the README content
      const readmeContent = writeToFile(answers);
      // Write the README file
      fs.writeFile("README.md", readmeContent, (err) =>
        err
          ? console.error(colors.red("Error writing file:", err))
          : console.log(colors.green("README.md generated successfully!"))
      );
    })
    .catch((error) => {
      console.error(colors.red("Error during initialization:", error));
    });
}
// Function call to initialize the app
init();
