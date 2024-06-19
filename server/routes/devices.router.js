const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const device_types_id = req.body.device_types_id;
    const brand = req.body.brand;
    const model = req.body.model;
    const serial_number = req.body.serial_number;
    const maintenance_date = req.body.maintenance_date;
    const maintenance_due = req.body.maintenance_due;
    const location = req.body.location;
    const img_url = req.body.img_url;
    const manufacture_date = req.body.manufacture_date;
    const install_date = req.body.install_date;
    const user_id = req.body.user_id;

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

module.exports = router;
