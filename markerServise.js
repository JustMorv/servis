const express = require('express');
const router = express.Router();

router.post('/markup', (req, res) => {
  const { text } = req.body;
  // обработка микроразметки
  const markup = `Some markup for "${text}"`;
  res.send(markup);
});

module.exports = router;