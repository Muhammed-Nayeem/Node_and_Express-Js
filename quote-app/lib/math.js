/**
 ** Title: Math Library.
 *? Description: Utility library for math-related functions.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Math Object - Module Scaffolding:
const math = {};

//Get a random number between two integer:
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
math.getRandomNumber = function (min, max) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === 'number' ? minimum : 0;
  maximum = typeof maximum === 'number' ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

//Exports Math Library:
module.exports = math;
