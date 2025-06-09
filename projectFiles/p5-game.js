const { Player, LootBox } = require('./p5-class.js');

const players = new Map();
const box = new LootBox();

function getOrCreatePlayer(name) {
  if (!players.has(name)) {
    players.set(name, new Player(name));
  }
  return players.get(name);
}

// Optionally, add persistence functions here

module.exports = { players, box, getOrCreatePlayer };