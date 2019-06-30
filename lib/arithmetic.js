'use strict';

let arithmetic = module.exports = {};

function validArguments(args) {
  return args.length >= 2 && allValuesAreInts(args);
}

function allValuesAreInts(args) {
  return args.every(isNumeric);
}

function isNumeric(thing) {
  return typeof thing === 'number';
}

arithmetic.add = function add(...numbers) {
  return validArguments(numbers) ? numbers.reduce((sum, val) => sum + val, 0) : null;
};

arithmetic.subtract = function subtract(...numbers) {
  return validArguments(numbers) ? numbers.reduce((subt, val) => subt - val) : null;
};

arithmetic.multiply = function multiply(...numbers) {
  return validArguments(numbers) ? numbers.reduce((prod, val) => prod * val) : null;
};

arithmetic.divide = function divide(...numbers) {
  return validArguments(numbers) ? numbers.reduce((div, val) => div / val) : null;
};


console.log(arithmetic.divide(10,5));