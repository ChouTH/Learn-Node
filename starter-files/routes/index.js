const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

  const adam = { name: 'Adam', age: 100, cool: true };
  // res.json(adam);
  res.json(req.query);
});

module.exports = router;
