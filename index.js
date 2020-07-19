const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// writeToFile("README2.md", generateMarkdown({title: "Code Quiz", description: "This is a quiz."}));
// array of questions for user
const questions = [
  {
    type: "input",
    message: "what is  the title of this applicatiion:",
    name: "title",
  },
  {
    type: "input",
    message: "what is your user name on Github:",
    name: "github",
  },
  {
    type: "input",
    message: "what is the Description of this application:",
    name: "description",
  },
  {
    type: "input",
    message: "How does a user install your application? Provide installation here:",
    name: "installation",
  },
  {
    type: "input",
    message: "how does a user use your application? Provide instractoin here:",
    name: "usage",
  },
  {
    type: "input",
    message: "Would you like users apple to report issues or contribute to this project ? add instruction here",
    name: "contribute",
  },
  {
    type: "list",
    message: "Enter License",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "if you have any question contact us? Provide your email here",
    name: "email"
  },
  {
    type: "input",
    message: "what to write to test the code? provide test code ",
    name: "test"
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

// function to initialize program
function init() {

  inquirer
    .prompt(questions)
    .then(function (data) {


      writeToFile("README.md", generateMarkdown(data));

      console.log('data', data)
    });


}

// function call to initialize program
init();


