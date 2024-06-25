const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('REQUEST BODY: ', req.body)
    const device_types_id = req.body.device.device_type;
    const brand = req.body.device.brand;
    const model = req.body.device.model_number;
    const serial_number = req.body.device.serial_number;
    const maintenance_date = req.body.device.maintenance_date;
    const maintenance_due = req.body.device.maintenance_due;
    const location = req.body.device.location;
    const img_url = req.body.device.img_url;
    const manufacture_date = req.body.device.manufacture_date;
    const install_date = req.body.device.install_date;
    const user_id = req.body.device.user_id;

    const queryText = `INSERT INTO "devices" ("device_types_id", "brand", "model", "serial_number", "maintenance_date", "maintenance_due", "location", "img_url", "manufacture_date", "install_date", "user_id")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`;
    pool
      .query(queryText, [device_types_id, brand, model, serial_number, maintenance_date, maintenance_due, location,img_url, manufacture_date, install_date, user_id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Device insert failed: ', err);
        res.sendStatus(500);
      });
  });
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
  SELECT "id", "brand", "model", "serial_number", "maintenance_date", 
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


//TODO GET "Devices" for a specific "user" by id
//TODO PURPOSE: From the list if you click a list item it will take you to the specific "DeviceProfile" Page
router.get('/:user_id/:id', (req, res) => {
  const query = `
    SELECT "id", "brand", "model", "serial_number", "maintenance_date",
           "maintenance_due", "location", "img_url", "manufacture_date",
           "install_date", "user_id"
    FROM "devices"
    WHERE "user_id" = $1 AND "id" = $2;
  `;

  const { user_id, id } = req.params; // Destructure user_id and id from req.params

  pool.query(query, [user_id, id])
    .then((dbResult) => {
      console.log("devices.router step 1 ", id);
      res.send(dbResult.rows);
    })
    .catch((error) => {
      console.error("Error executing query:", error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
//TODO END


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});




module.exports = router;
