const test = require('node:test');
const assert = require('node:assert');

test('Basic CI Sanity Check', () => {
  assert.strictEqual(1 + 1, 2);
});