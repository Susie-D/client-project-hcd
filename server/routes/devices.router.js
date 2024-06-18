const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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

module.exports = router;
