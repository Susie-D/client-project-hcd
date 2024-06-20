const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('where is the Intake?', req.body);
    const newIntake = req.body.Intake;
        // post is the key (from user.post.saga)
    const addNewIntake = 'INSERT INTO "base" ("user_id", "username", "crush_text", "where_crushed", "star_count") VALUES ($1, $2, $3, $4, $5);';
    const queryValues = [
    //   "device_types_id" INT REFERENCES "device_types" NOT NULL,
      brand,
      model_number,
      serial_number,
      location,
      // img_url,
      manufacture_date,
      install_date,
      // user_id: userId,
    ];
    pool
        .query(addNewIntake, queryValues)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch ((err) => {
            console.log(`Error making database query`, err);
            res.sendStatus(500);
        });
});

module.exports = router;