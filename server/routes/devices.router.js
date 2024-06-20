const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


//TODO --- PURPOSE: GET Specific Device page by user id
//! NEEDS to fil

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







//TODO --- PURPOSE: get all devices for specific user. 
//! NEEDS SQL CHANGE
//! Getting Device by Device ID

router.get('/', (req, res) => {
  console.log('LOOOOOK AT ME!!!!',req.params.id)
  const query = `
  SELECT "brand", "model", "serial_number", "maintenance_date", 
  "maintenance_due", "location", "img_url", "manufacture_date", 
  "install_date", "user_id"
  FROM "devices" 
  WHERE user_id = $1
  `;  
  pool.query(query)
.then((dbResult)=>{
  res.send(dbResult.rows)
})
.catch((error)=> {
  console.log("THIS IS AN ERROR", error);
}) // GET route code here 
});

//! END ---------------

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});




module.exports = router;
