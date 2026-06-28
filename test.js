const assert = require('assert');
const { add } = require('./math.js');

assert.strictEqual(add(2, 3), 5);
console.log('all tests passed');
