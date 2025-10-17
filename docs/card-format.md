# Card JSON Format

This document describes the fields used in data/cards.json. The loader validates the presence of core fields.

Top-level fields (per card)
- id (string): unique identifier for the card, e.g., "red-ember-vanguard"
- name (string): display name
- color (string): "red" or "blue" in this prototype
- type (string): "troop", "spell", or "building"
- subtype (string): free-form subtype for UI/filtering (e.g., "melee", "ranged", "spawner-turret")
- cost (number): resource cost to deploy
- rarity (string): e.g., "common", "rare", "epic"
- role (string): short description of the role
- ability (string): human-readable description of special ability
- stats (object): flexible container for numeric or descriptive stats

Optional fields
- synergy, counters, flavor: strings for design notes and UI tooltips

Guidelines for numeric conversion
- When moving to numerical balancing, replace descriptive stats with explicit keys:
  - hp: integer
  - dps: number (damage per second)
  - attack_speed: seconds per attack
  - range: units
  - speed: units/sec or named tiers (slow/medium/fast)
  - dot: {damage_per_tick, tick_interval, duration}

