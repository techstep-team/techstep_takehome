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

router.get('/search', async (req, res) => {
  const { name } = req.query;
  let query = `SELECT * FROM content_db.users WHERE name LIKE "%${name}%";`
  try {
    db.query(query,(err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
      }
      console.log(result);
      return res.status(200).json(result);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
