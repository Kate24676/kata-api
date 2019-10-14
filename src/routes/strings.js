const express = require('express');
const stringsController = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:parameter', stringsController.hello);
router.get('/upper/:parameter', stringsController.upper);
router.get('/lower/:parameter', stringsController.lower);
router.get('/first-characters/:parameter', stringsController.firstcharacters);


router.get('/first-characters/:parameter', (req, res) => {
  const parameter = req.params.parameter.substring(0, 4);
  res.json({ result: `Hello ${parameter}` });
});

module.exports = router;
