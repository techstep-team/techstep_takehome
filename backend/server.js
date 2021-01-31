const express = require("express");
const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });

const app = express();

app.get("/users", (req, res) => {
  const connectDB = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: "content_db",
  });

  const query = "SELECT * FROM users";

  connectDB.connect((err) => {
    if (err) throw err;
    connectDB.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
