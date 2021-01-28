const mysql = require('mysql');
require('dotenv').config({ path: './.env' });
console.log(process.env.PASSWORD);
const connectDB = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `${process.env.DBUSER}`,
  password: `${process.env.DBPASSWORD}`,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = connectDB;
