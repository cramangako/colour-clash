const path = require('path');
const { loadCards } = require('./game/cardLoader');

function main() {
  try {
    const cards = loadCards();
    console.log(`Loaded ${cards.length} cards from data/cards.json`);
  } catch (err) {
    console.error('Failed to load cards:', err.message || err);
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = { main };