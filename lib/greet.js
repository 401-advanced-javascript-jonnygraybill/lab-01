'use strict';

let greet = module.exports = {};

greet.sayHello = function (str) {
  if(typeof str !== 'string') {return null}
  return getMessage(str);
};

const getMessage = function (str) {
  if(typeof str !== 'string') {return null}
  return `Hello, ${str}`;
};