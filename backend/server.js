const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 

const cors = require('cors');

app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// });

// pool.on("connect", (client) => {
//   client
//     .query("CREATE TABLE IF NOT EXISTS parks (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, location VARCHAR(255) NOT NULL, route VARCHAR(255) NOT NULL UNIQUE, tips TEXT NOT NULL, best TEXT NOT NULL, hidden_gem TEXT NOT NULL, schedule TEXT NOT NULL, camping TEXT NOT NULL, busy TEXT NOT NULL, tough TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW() )")
//     .catch((err) => console.error(err));
// });

// app.get('/api/parks/:route', async (req, res) => {
//   const route = req.params.route;
//   pool.query('SELECT name, route, location, tough, hidden_gem, schedule, busy, camping, tips, best FROM parks WHERE route = $1', [route], (err, result) => {
//     if (err) {
//       res.status(500).send('Error executing query');
//     } else if (result.rows.length === 0) {
//       res.status(404).send('Park not found');
//     } else {
//       const park = result.rows[0];
//       res.send(park);
//     }
//   });
// });

app.use('/api/images', express.static('public/images'));
