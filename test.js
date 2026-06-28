const assert = require('assert');
const { add, multiply } = require('./math.js');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(multiply(2, 3), 6);
console.log('all tests passed');
