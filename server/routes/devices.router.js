const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


//! START --------------- GET ALL BY ALL USERS
router.get('/', (req, res) => {
  const query = `
      SELECT a.*, b.name
      FROM devices a
      INNER JOIN device_types b
      ON a.device_types_id = b.id

    `;
  pool.query(query)
    .then((dbResult) => {
      res.send(dbResult.rows);
    })
    .catch((error) => {
      console.log("THIS IS AN ERROR", error);
      res.sendStatus(500);
    });
});

//! END ---------------




// PURPOSE: get all devices for specific user. 

router.get('/:id', (req, res) => {
  const query = `
  SELECT "brand", "model", "serial_number", "maintenance_date", 
  "maintenance_due", "location", "img_url", "manufacture_date", 
  "install_date", "user_id"
  FROM "devices" 
  WHERE user_id = $1
  `;
  pool.query(query, [req.params.id])
    .then((dbResult) => {
      res.send(dbResult.rows)
    })
    .catch((error) => {
      console.log("THIS IS AN ERROR", error);
    }) // GET route code here 
});

//! END ---------------


// PURPOSE: get ONE DEVICE (from a user) by DEVICE ID. 
// router.get('/:id', (req, res) => {

// });

//! END ---------------

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});




module.exports = router;
