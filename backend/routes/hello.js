const express = require('express');
const router = express.Router();
const db = require('../db');

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
router.get('/', async (req, res) => {
  try {
    res.send('Hello World!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/search', async (req, res, next) => {
  const { name } = req.query;
  try {
    db.query(`SELECT * FROM users WHERE name Like '%${name}%'`, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Server Error');
      }
      return res.status(200).json({ data: result });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
