'use strict';

const arithmetic = require('../lib/arithmetic.js');

// let methods = ['add', 'subtract', 'multiply', 'divide'];

describe('Add', () => {

  it('adds positive numbers', () => {
    let result = arithmetic.add(1, 10, 100, 1000);
    expect(result).toBe(1111);
  });

  it('adds negative numbers', () => {
    let result = arithmetic.add(-1, -10, -100, -1000);
    expect(result).toBe(-1111);
  });

  it('adds fractions', () => {
    let result = arithmetic.add(0.1, 0.2);
    expect(result).toBe(0.3);
  });

});







