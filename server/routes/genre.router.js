const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Gets all Genres
router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM genres`;
  pool.query(queryText)
    .then( results => {
      // Sends back the results in an object
      res.send(results.rows);
      
    }).catch( error => {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;