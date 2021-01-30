const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });
console.log(process.env.PASSWORD);
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

    console.log("result", result.RowDataPacket.id);
  });
  console.log("Database Connected!", connectDB);
});

module.exports = connectDB;
