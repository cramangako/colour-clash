# Colour Clash — Starter project

This repository contains the beginning of a Clash-Royale-like game engine and card set for the Colour Clash prototype.

Contents added in this commit
- data/cards.json — initial 10-card set (Red = Aggro, Blue = Control) (already present)
- README.md — this file
- package.json — basic npm metadata and scripts
- src/index.js — small entry that loads card data
- src/game/cardLoader.js — card JSON loader and validator
- src/game/engine.js — minimal engine scaffold (simulation stub)
- tests/run-tests.js — tiny smoke test that validates cards.json loads correctly
- docs/card-format.md — specification for the card JSON fields
- docs/balancing-guidelines.md — initial balancing guidance and match targets
- .gitignore — ignore node_modules and common files

Getting started
1. Install Node.js (v16+ recommended).
2. npm install (no dependencies required for this starter commit).
3. npm start  # runs src/index.js and prints loaded card count
4. npm test   # runs tests/run-tests.js

Project structure
- data/           # card data (cards.json)
- src/            # source code (engine, loaders, utilities)
- tests/          # test scripts (smoke/unit tests)
- docs/           # documentation and format definitions

Next steps
- Expand engine.js into a deterministic tick-based simulator.
- Add unit tests to cover card abilities and interactions.
- Add a simple web UI or CLI harness to playtest decks locally.