const assert = require('assert');
const { loadCards } = require('../src/game/cardLoader');

function run() {
  try {
    const cards = loadCards();
    assert(Array.isArray(cards), 'cards.json should be an array');
    assert(cards.length >= 10, 'expected at least 10 cards');
    console.log('OK: cards.json loaded with', cards.length, 'cards');
  } catch (err) {
    console.error('TEST FAILED:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

if (require.main === module) run();
module.exports = { run };