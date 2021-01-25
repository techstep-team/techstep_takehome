const mysql = require('mysql');
require('dotenv').config({ path: './.env' });
console.log(process.env.PASSWORD);
console.log(process.env.DB_USER);
const connectDB = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.PASSWORD}`,
  database: 'content_db',
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = connectDB;
