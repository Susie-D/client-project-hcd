const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // console.log('I am in the devices.router.js', req.user);
  const query = `
  SELECT "brand", "model", "serial_number", "maintenance_date", 
  "maintenance_due", "location", "img_url", "manufacture_date", 
  "install_date" FROM "devices";
  `;
  const userIdValues = req.user.id;
  const values = [userIdValues]
  pool.query(query, values)
  .then(result => {
      res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all devices', err);
    res.sendStatus(500)
  })
});









/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
