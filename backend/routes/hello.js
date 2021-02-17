const express = require('express');
const router = express.Router();

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
router.get('/hello', async (req, res) => {
  try {
    res.send('Hello World!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
