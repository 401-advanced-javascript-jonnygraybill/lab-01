'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function () {
    let theSum = 0;
    for (let i = 0; i < arguments.length; i++) {
      theSum += arguments[i];
    }
    if (typeof theSum !== 'number') { return null; }
    return theSum;
};

arithmetic.subtract = function () {
  let theSum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    theSum -= arguments[i];
  }
  if (typeof theSum !== 'number') { return null; }
  return theSum;
};

arithmetic.divide = function (a,b) {
  if (typeof a !== "number" || typeof b !== "number" || a === 0 || b === 0 ) { return null; }
  return a / b;
}

arithmetic.multiply = function () {
  let theProduct = 1;
  for (let i = 0; i < arguments.length; i++) {
    theProduct *= arguments[i];
  }
  if (typeof theProduct !== 'number') { return null; }
  return theProduct
}