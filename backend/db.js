const mysql = require('mysql');
require('dotenv').config({ path: './.env' });
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);
const connectDB = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `username1`,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = connectDB;
