const express = require('express');
const router = express.Router();
const { findUserByName } = require('../models');

// @route   GET api/routes/users
// @desc    A route for fetching users, filtered by name using a search term
// @access  Public
router.get('/users', async (req, res) => {
  const { term } = req.query;
  
  try {
    const results = await findUserByName(term);
    res.send(results);
  } catch (err) {
    console.error('ERROR', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
