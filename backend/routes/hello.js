const express = require("express");
const router = express.Router();
const db = require("../db");

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
router.get("/", async (req, res) => {
  try {
    res.send("Hello World!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/routes
// @desc    This route is for fetching users from db based on term
// @access  Public
router.get("/get-users", async (req, res) => {
  const term = req.query.term;
  let query = "SELECT name FROM users WHERE ";
  if (term !== null) {
    query += "name LIKE '%" + term + "%'";
  } else {
    // No words found :-)
  }

  db.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// @route   POST api/routes
// @desc    This route is for fetching users from db based on user's selection from dropdown
// @access  Public
router.post("/get-user", async (req, res) => {
  const username = req.body.username;

  let query = "SELECT * FROM users WHERE name='" + username + "'";

  db.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  });
});

module.exports = router;
