const express = require('express');

const router = express.Router();

router.post('/multiply', (req, res) => {
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

module.exports = router;
