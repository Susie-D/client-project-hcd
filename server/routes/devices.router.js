// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();


// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   console.log('I am in the devices.router.js', req.user);
  
//   // Define the query with a WHERE clause to filter by user_id
//   // const query = `
//   //   SELECT "brand", "model", "serial_number", "maintenance_date", 
//   //   "maintenance_due", "location", "img_url", "manufacture_date", 
//   //   "install_date" 
//   //   FROM "devices"
   
//   // `;
  
//   // Retrieve the user ID from the request object
//   const userIdValues = req.user.id;
  
//   // Create the values array with the user ID
//   const values = [userIdValues];
  
//   // Execute the query with parameterized values
//   pool.query(query, values)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all devices', err);
//       res.sendStatus(500);
//     });
// });







// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


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
