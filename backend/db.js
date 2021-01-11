const mysql = require('mysql');
require('dotenv').config({ path: './.env' });

const connectDB = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = connectDB;
