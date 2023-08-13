/**
 ** Title: Quotes Library.
 *? Description: Utility library for getting list of quotes.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Dependencies - Node.js File System:
const fs = require("node:fs");

//Quotes Library Object - Module Scaffolding:
const quotes = {};

//Method of getting list of quotes:
quotes.allQuotes = function () {
  //Get the quotes from the file that contain quote:
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");

  //Turn the string into an array:
  const arrayOfQuotes = fileContents.split(/\r?\n/);

  //Return quotes array:
  return arrayOfQuotes;
};

//Exports Quotes Library:
module.exports = quotes;
