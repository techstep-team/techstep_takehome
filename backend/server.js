const express = require('express');
const mysql = require('mysql');
const db = require('./db');
//const router = require('./routes/hello');
require('dotenv').config({ path: './.env' });
const users = require('./routes/hello');

const app = express();

// Define routes
app.use('/api/routes', require('./routes/hello'));
app.use('/api/', users);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));

