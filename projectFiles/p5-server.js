const express = require('express');
const path = require('path');
const { box, getOrCreatePlayer } = require('./p5-game.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const apiRouter = express.Router();

apiRouter.get('/:name', (req, res) => {
  const player = getOrCreatePlayer(req.params.name);
  res.json(player.toJSON());
});

apiRouter.post('/:name/open-box', (req, res) => {
  const player = getOrCreatePlayer(req.params.name);
  if (!player.spendCoins(10)) return res.status(400).json({ error: 'Not enough coins' });
  const reward = box.roll();
  player.addItem(reward);
  return res.json(player.toJSON());
});

app.use('/api', apiRouter);

app.get('/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
