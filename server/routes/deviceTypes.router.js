const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `
  SELECT *
  FROM "device_types";
  `;
  pool.query(query)
    .then((dbResult) => {
      res.send(dbResult.rows)
    })
    .catch((error) => {
      console.log("Error getting device types.", error);
    }) 
});

router.post('/', (req, res) => {
  // POST route code here
});




module.exports = router;
