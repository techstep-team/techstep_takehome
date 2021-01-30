const express = require('express');
const db = require('./db');
require('dotenv').config({ path: './.env' });

const cors = require('cors');

const app = express();

// Define routes
app.use('/api/routes', require('./routes/hello'));

app.use(cors())

app.get('/api/routes', (req, res) => {
    connection.query("SELECT * FROM 'content_db.users';", (err, results, fields) => {
      if(err) throw err;
      res.send(results);
      console.log("results", results)
    });
  });


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
