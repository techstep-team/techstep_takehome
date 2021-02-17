const express = require('express');
const router = express.Router();
const db = require('../db')


// NOTE: if the user search string or the api route is sensitive data,
// would use a post req and put the searchString in the req.body
router.get('/users/search/:searchString', async (req, res) => {
    const { searchString } = req.params
    try {
        db.query(
            `SELECT * FROM content_db.users WHERE name LIKE '%${searchString}%'`,
            (err, result) => {
                if (err) {
                    console.log(err.message)
                    return res.status(500).json({
                        error: 'There was an error retrieving search results, please try again'
                    })
                }
                return res.status(200).json({ result: result })
            }
        )
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({
            error: 'There was an error retrieving search results, please try again'
        })
    }
});

module.exports = router;
