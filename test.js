const assert = require('assert');
const { add, multiply, power } = require('./math.js');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(2, 3), 6);
assert.strictEqual(power(2, 3), 8);
assert.strictEqual(power(5, 0), 1);
assert.strictEqual(power(2, -2), 0.25);
console.log('all tests passed');
