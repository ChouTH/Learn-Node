const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: 'Adam',
    number: 2048,
    Id: req.query.Id,
    title: 'Tianhao Wu'
  });

  const adam = { name: 'Adam', age: 100, cool: true };
  // res.json(adam);
  res.json(req.query);
});

module.exports = router;
