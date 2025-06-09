class Player {
  constructor(name, startCoins = 100) {
    this.name = name;
    this.coins = startCoins;
    this.inventory = [];
  }

  spendCoins(cost) {
    if (this.coins < cost) return false;
    this.coins -= cost;
    return true;
  }

  addItem(item) {
    this.inventory.push(item);
    console.log(`Added ${item.emoji} (${item.tier}) to inventory`);
  }

  toJSON() {
    return { coins: this.coins, inventory: this.inventory };
  }
}

class LootBox {
  constructor() {
    this.rarities = [
      { name: 'common',  weight: 60, emojis: ['🍞', '🥕', '🪨'] },
      { name: 'rare',    weight: 30, emojis: ['🦄', '💎', '🧸'] },
      { name: 'legendary',  weight: 10, emojis: ['🌌', '🐉', '🛸'] }
    ];
  }


  roll() {
    const total = this.rarities.reduce((t, r) => t + r.weight, 0);
    let rng = Math.random() * total;
    for (const tier of this.rarities) {
      if ((rng -= tier.weight) < 0) {
        const emoji =
          tier.emojis[Math.floor(Math.random() * tier.emojis.length)];
        return { tier: tier.name, emoji };
      }
    }
  }
}

module.exports = { Player, LootBox };
