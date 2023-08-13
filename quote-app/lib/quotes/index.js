/**
 ** Title: Quotes Library.
 *? Description: Utility library for getting a list of quotes.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Dependencies - Node File System:
const fs = require("node:fs");

//Quotes Object - Module Scaffolding:
const quotes = {};

//Get all the quotes and return them to the user:
quotes.allQuotes = function () {
  //Read the text file containing the quotes:
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");

  //Turn the string into an array:
  const arrayOfQuotes = fileContents.split(/\r?\n/);

  //Return the array:
  return arrayOfQuotes;
};

//Exports Quotes Library:
module.exports = quotes;
