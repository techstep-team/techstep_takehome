const express = require('express');
const db = require('./db');
const cors = require('cors')
require('dotenv').config({ path: './.env' });

const app = express();

app.use(cors())
// Define routes
app.use('/api/routes', require('./routes/hello'))
app.use('/api/routes', require('./routes/users'))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
