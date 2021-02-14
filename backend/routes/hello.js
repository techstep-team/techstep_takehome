const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
const table = 'users';

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
router.get('/', async (req, res) => {
  try {
    console.log("Hello World!");
    res.send('Hello World!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/users', async (req, res) => {
  pool.query(`SELECT * FROM ${table}`, (err, rows) => {
       if (err) {
           res.send(err);
       } else {
           res.send(rows);
       }
    });
    //   try {
    //     res.send('inside users get');
    //     const user_table = await pool.query(`select * from ${table}`);
    //     return res.status(200).json(user_table.rows);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // console.log("inside hello.js get function");
});

// router.get('/users', (req, res) => {
//   res.json({
//     name: req.user.name,
//     email: req.user.email,
//     age: req.user.age,
//     location: req.user.location,
//     is_registered: req.user.is_registered,
//   });
//   console.log("Sent back user info!");
// });
// export default router;
module.exports = router;
