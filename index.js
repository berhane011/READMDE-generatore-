const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// writeToFile("README2.md", generateMarkdown({title: "Code Quiz", description: "This is a quiz."}));
// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter title name:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter Installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribute:",
    name: "contribute",
  },
  {
    type: "list",
    message: "Enter License",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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
