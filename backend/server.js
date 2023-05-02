const express = require('express');
const app = express(); 
const port = process.env.PORT || 8080; 

const cors = require('cors');

app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.get('/api/parks/:route', async (req, res) => {
  console.log("hitparksA");
  const route = req.params.route;
  pool.query('SELECT name, route, location, tough, hidden_gem, schedule, busy, camping, tips, best FROM parks WHERE route = $1', [route], (err, result) => {
    if (err) {
      res.status(500).send('Error executing query');
    } else if (result.rows.length === 0) {
      res.status(404).send('Park not found');
    } else {
      const park = result.rows[0];
      console.log("hitapi");
      res.send(park);
    }
  });
});

app.get('/parks/:route', async (req, res) => {
  console.log("hitparksR");
  const route = req.params.route;
  pool.query('SELECT name, route, location, tough, hidden_gem, schedule, busy, camping, tips, best FROM parks WHERE route = $1', [route], (err, result) => {
    if (err) {
      res.status(500).send('Error executing query');
    } else if (result.rows.length === 0) {
      res.status(404).send('Park not found');
    } else {
      const park = result.rows[0];
      console.log("hitparks");
      res.send(park);
    }
  });
});


app.use('/images', express.static('public/images'));
