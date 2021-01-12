const mysql = require('mysql');
require('dotenv').config({ path: './.env' });
console.log(process.env.PASSWORD);
const connectDB = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `${process.env.USERNAME}`,
  password: `${process.env.PASSWORD}`,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = connectDB;
