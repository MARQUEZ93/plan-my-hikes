// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// });

// // define an async function to remove all rows from the "parks" table
// async function removeAllParks() {
//     const client = await pool.connect();
//     try {
//       await client.query('DELETE FROM parks');
//       console.log('All rows removed from the "parks" table.');
//     } finally {
//       client.release();
//     }
// }
  
//   // call the function to remove all rows from the "parks" table
//   removeAllParks().catch(err => console.error(err));
