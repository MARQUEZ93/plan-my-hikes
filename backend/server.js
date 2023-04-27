const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 

const path = require('path');

const cors = require('cors');

app.use(cors());

//TODO consider un-installing cors

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  port: 5432, // or your PostgreSQL port number
  database: 'pmh',
  user: 'admin',
  password: 'password',
});

app.get('/api/parks/:route', async (req, res) => {
  const route = req.params.route;
  pool.query('SELECT name, route, location, tough, hidden_gem, schedule, busy, camping, tips, best FROM parks WHERE route = $1', [route], (err, result) => {
    if (err) {
      res.status(500).send('Error executing query');
    } else if (result.rows.length === 0) {
      res.status(404).send('Park not found');
    } else {
      const park = result.rows[0];
      res.send(park);
    }
  });
});

app.use('/images', express.static('public/images'));

// Serve the React app on all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

