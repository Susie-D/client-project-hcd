const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


//TODO --- PURPOSE: Specific Device page by ID
//! START --------------- GET ALL BY USER ID
  router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const query = `
      SELECT a.*, b.name
      FROM devices a
      INNER JOIN device_types b
      ON a.device_types_id = b.id;
    `;
    const values = [userId];
  
    pool.query(query, values)
      .then((dbResult) => {
        res.send(dbResult.rows);
      })
      .catch((error) => {
        console.log("THIS IS AN ERROR", error);
        res.sendStatus(500);
      });
  });

//! END ---------------







//TODO --- PURPOSE: get all for specific user. 
//! Getting Device by Device ID

router.get('/', (req, res) => {
  const query = `
  SELECT "brand", "model", "serial_number", "maintenance_date", 
  "maintenance_due", "location", "img_url", "manufacture_date", 
  "install_date" 
  FROM "devices" `  
  pool.query(query)
.then((dbResult)=>{
  res.send(dbResult.rows)
})
.catch((error)=> {
  console.log("THIS IS AN ERROR", error);
}) // GET route code here 
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

//! END ---------------


module.exports = router;
