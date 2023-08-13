/**
 ** Title: Math Library.
 *? Description: This math library will help to generate random number between two integer.
 *? Author: Muhammed Nayeem.
 *? Date: 13/08/2023.
 */

//Math Library Object - Module Scaffolding:
const math = {};

//Method of Generate Random Numbers:
math.getRandomNumber = function (min, max) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

//Exports Math Library:
module.exports = math;
