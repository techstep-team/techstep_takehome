const express = require('express');
const db = require('./db');
require('dotenv').config({ path: './.env' });
var cors = require('cors')
const app = express();

app.use(cors())

// Define routes
 // app.use('/api/routes', require('./routes/hello'));

app.get('/',(req,res) => {
    const sqlTable = "SELECT * FROM users";
    db.query(sqlTable, (err, result) => {
       if(err){
        console.log(err);
        return res.status(500).json({error: 'some problem occured'})
    }
    return res.status(200).json({data: result})
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
