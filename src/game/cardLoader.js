const fs = require('fs');
const path = require('path');

function defaultCardPath() {
  return path.join(__dirname, '../../data/cards.json');
}

function validateCard(card, index) {
  const errors = [];
  if (!card.id) errors.push(`card[${index}] missing id`);
  if (!card.name) errors.push(`card[${index}] missing name`);
  if (!card.color) errors.push(`card[${index}] missing color`);
  if (!card.type) errors.push(`card[${index}] missing type`);
  if (typeof card.cost === 'undefined') errors.push(`card[${index}] missing cost`);
  return errors;
}

function loadCards(file = defaultCardPath()) {
  const raw = fs.readFileSync(file, 'utf8');
  const cards = JSON.parse(raw);
  const errors = [];
  cards.forEach((c, i) => {
    const e = validateCard(c, i);
    if (e.length) errors.push(...e);
  });
  if (errors.length) {
    const err = new Error('Card validation failed:\n' + errors.join('\n'));
    err.validation = errors;
    throw err;
  }
  return cards;
}

module.exports = { loadCards };