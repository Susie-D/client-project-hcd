const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req, res) => {
  let connection = await pool.connect();
  const device = req.body.device;
  connection.query('BEGIN;')

  const deviceQuery = `INSERT INTO "devices" ("device_types_id", "brand", "model_number", "serial_number", "maintenance_date", "maintenance_due", "location", "img_url", "manufacture_date", "install_date", "user_id")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;
`;
  try {
    const insertDeviceRes = await connection.query(deviceQuery, [
      device.device_type_id,
      device.brand,
      device.model_number,
      device.serial_number,
      '', // maintenance date
      '', // maintenance_due
      device.location,
      '', // image url
      device.manufacture_date,
      device.install_date,
      device.user_id
    ])
    const deviceId = insertDeviceRes.rows[0].id;

    const additionalQuery =
      `INSERT INTO additional_device_info
      ("devices_id", "properties_id", "prop_value") 
      VALUES
      ($1, $2, $3)`;

    for (let info of device.additional_info) {
      await connection.query(additionalQuery, [deviceId, info.property_id, info.prop_value]);
    }

    await connection.query("COMMIT;");
    connection.release();

  } catch (transactionError) {
    await connection.query('ROLLBACK;')
    connection.release()
    console.log('POST /SQL Transaction failed:', transactionError)
    res.sendStatus(500)
  }
  res.sendStatus(200);
}); -
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
// /api/devices/user
router.get('/:id', (req, res) => {
  const query = `
  SELECT a.*, b.name
  FROM devices a
  INNER JOIN device_types b
  ON a.device_types_id = b.id
  WHERE user_id = $1
  `;
  pool.query(query, [req.user.id])
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


//TODO GET A "Device" for a specific "user" by id
//TODO PURPOSE: From the list if you click a list item it will take you to the specific "DeviceProfile" Page
router.get('/:user_id/:id', (req, res) => {
  const query = `
    SELECT "id", "brand", "model_number", "serial_number", "maintenance_date",
           "maintenance_due", "location", "img_url", "manufacture_date",
           "install_date", "user_id"
    FROM "devices"
    WHERE "user_id" = $1 AND "id" = $2;
  `;

  const { user_id, id } = req.params; // Destructure user_id and id from req.params

  pool.query(query, [user_id, id])
    .then((dbResult) => {
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

// PURPOSE: get a singular device for specific user. 
// /api/devices/{someDeviceId}
// router.get('/:id', (req, res) => {
//   const query = `
//     SELECT "brand", "model", "serial_number", "maintenance_date",
//            "maintenance_due", "location", "img_url", "manufacture_date",
//            "install_date", "user_id"
//     FROM "devices"
//     WHERE "user_id" = $1 AND "id" = $2;
//   `;
//   // The device id:
//   const id = req.params.id;

//   pool.query(query, [req.user.id, id])
//     .then((dbResult) => {
//       console.log("devices.router step 1 ", id);
//       res.send(dbResult.rows);
//     })
//     .catch((error) => {
//       console.error("Error executing query:", error);
//       res.status(500).json({ error: 'Internal server error' });
//     });
// });

//! END ---------------


module.exports = router;
