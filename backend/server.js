const express = require('express');
const db = require('./db');
require('dotenv').config({ path: './.env' });

const app = express();

app.get('/search', function (req, res) {
  const query = req.query.query;
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  db.query(`SELECT * FROM \`users_takehome\` WHERE \`name\` LIKE '%${query}%'`, function (error, results, fields) {
    if (error) throw error;
    const body = results.length > 0 ? JSON.stringify(results) : '';
    res.send(JSON.stringify(results));
  });
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
