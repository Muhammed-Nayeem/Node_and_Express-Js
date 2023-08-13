/**
 ** Title: Basic Node App Example.
 *? Description: Simple node application that print random quotes per second interval.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Dependencies - Internal Libraries:
const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes");

//App Object - Module Scaffolding:
const app = {};

//App Configuration:
app.config = {
  timeBetweenQuotes: 1000,
};

//Method that print a random quotes:
app.printAQuote = function () {
  //Get all the quotes:
  const allQuotes = quotesLibrary.allQuotes();

  //Get the length of quotes:
  const numberOfQuotes = allQuotes.length;

  //Pick a random number between 1 and the number of quotes:
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  //Get the quote at that position in the array (minus one):
  const selectedQuote = allQuotes[randomNumber - 1];

  //print the selected quote:
  console.log(selectedQuote);
};

//Method that loops indefinitely, calling the printAQuote method as it goes:
app.indefiniteLoop = function () {
  setInterval(this.printAQuote, this.config.timeBetweenQuotes);
};

//Invoke the indefiniteLoop method:
app.indefiniteLoop();
