// Test Suite - Mathematical Operation

// Test IRcQ9Q1Oase7Z2rG1drdS6eL1mIPUYhcZ9p9YoYMbhQ29UIZf8wHsZ3EQSKZ
// 1. Addition
// 2. Substraction
// 3. Multiplication
// 4. Division

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

  it('Addition of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a+b;

    assert.equal(c,20);

  });

  it('Substraction of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a-b;

    assert.equal(c,1);

  });

  it('Multiplication of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a*b;

    assert.equal(c,100);

  });

  it('Division of two numbers', function(){

    var a = 10;
    var b = 10;

    var c = a/b;

    assert.equal(c,1);

  });

});
