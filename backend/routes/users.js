const express = require('express');
const router = express.Router();
const db = require('../db')


// NOTE: if the users searched or the api route is sensitive data,
// would use a post and put the searchString in the req.body
router.get('/users/search/:searchString', async (req, res) => {
    const { searchString } = req.params
    console.log(searchString)
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
                console.log(result)
                return res.status(200).json(result)
            }
        )
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            error: 'There was an error retrieving search results, please try again'
        })
    }
});

module.exports = router;
