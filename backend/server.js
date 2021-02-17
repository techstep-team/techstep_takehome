const express = require('express');
const db = require('./db');
require('dotenv').config({ path: './.env' });

const app = express();

// Define routes
app.use('/api/routes', require('./routes/hello'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
