const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const params = req.query.searchQuery;

  db.query(
    `SELECT * FROM content_db.users WHERE name LIKE '%${params}%'`,
    function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    }
  );
});

module.exports = router;
