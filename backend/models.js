const connectDB = require('./db');
const { promisify } = require('util');

// MySQL library is not promise-based,
// Promisifying query method to avoid callback hell in the future
const query = promisify(connectDB.query).bind(connectDB);

// Return array of users which names contain the search term
const findUserByName = async (term) => {
  return await query(`SELECT * FROM users WHERE name LIKE concat('%', ?, '%')`, [term]);
}

module.exports = {
  findUserByName
}