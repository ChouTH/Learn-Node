const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');

  const adam = { name: 'Adam', age: 100, cool: true };
  res.json(adam);
});

module.exports = router;
