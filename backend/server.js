const express = require('express');
const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });
const db = require('./db');

const cors = require('cors');

const app = express();

// Define routes
app.use('/api/routes', require('./routes/hello'));

app.use(cors())

app.get('/users', (req, res) => {
  const connectDB = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: "content_db",
  });
  
  const query = "SELECT * FROM users";
  
  connectDB.connect((err) => {
    if (err) throw err;
    connectDB.query(query, (err, result, fields) => {
      if (err) throw err;
  
      console.log("result", result);
      res.json(result)
    });
  });

});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
