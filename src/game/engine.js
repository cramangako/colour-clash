// Minimal engine scaffold for deterministic single-lane simulation

class Engine {
  constructor({ tickRate = 10 } = {}) {
    this.tickRate = tickRate; // ticks per second
    this.entities = [];
    this.time = 0; // seconds
  }

  spawn(entity) {
    this.entities.push(entity);
  }

  tick(dt = 1 / this.tickRate) {
    this.time += dt;
    // process simple entity lifecycle (stub)
    this.entities = this.entities.filter(e => !e._dead);
  }

  runFor(seconds) {
    const steps = Math.ceil(seconds * this.tickRate);
    for (let i = 0; i < steps; i++) this.tick();
  }
}

module.exports = { Engine };