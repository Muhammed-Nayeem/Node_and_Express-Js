/**
 ** Title: Random Quotes Generating App.
 *? Description: Basic Node.js application that will generate random quotes.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Dependencies - internal libraries:
const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes");

//Application Object - Module Scaffolding:
const application = {};

//Application Configuration Object:
application.config = {
  timeBetweenQuotes: 2000,
};

//Application Methodologies that will generate random quotes:
application.printAQuote = function () {
  //Get all the quotes:
  const allQuotes = quotesLibrary.allQuotes();

  //Number of length to allQuotes:
  const numberOfQuotes = allQuotes.length;

  //Make random numbers with 1 and numberOfQuotes:
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  //Get the random quote from allQuotes position (with minus one):
  const selectedQuote = allQuotes[randomNumber - 1];

  //Print the selected quote:
  console.log(selectedQuote);
};

//Indefinitely Method that will call printAQuote method of several times:
application.indefiniteLoop = function () {
  setInterval(this.printAQuote, this.config.timeBetweenQuotes);
};

//Invoke the indefiniteLoop method:
application.indefiniteLoop();
