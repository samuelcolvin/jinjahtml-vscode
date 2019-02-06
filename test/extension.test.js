const assert = require('assert')
const vscode = require('vscode')
const BetterJinja = require('../extension')

suite("Extension Tests", function() {

  test("Something 1", function() {
    console.log('BetterJinja:', BetterJinja)
    assert.equal(1 + 2, 3)
  });
});
