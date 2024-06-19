const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


//TODO we need to change around the SQL so that we JOIN both tables "user" & "device_types". We are looking to get the device_types.name for the correspoonding user.id 
//! START ---------------
  router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const query = `
      SELECT "device_types"."username"
      FROM "device_types"
      JOIN "user" ON "user"."name" = "device_types"."username"
      WHERE "user"."id" = $1;
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







//* VERY HAPPY WITH THIS

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

//* VERY HAPPY WITH THIS



module.exports = router;
