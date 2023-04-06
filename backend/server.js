const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const fs = require('fs');

const cors = require('cors');

app.use(cors());

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432, // or your PostgreSQL port number
  database: 'pmh',
  user: 'postgres',
  password: 'password',
});

app.use(express.static('public'));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/parks/:route', async (req, res) => {
  const route = req.params.route;
  pool.query('SELECT name, route, location, tough, gem, schedule, busy, camping, tips, best FROM parks WHERE route = $1', [route], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Error executing query');
    } else if (result.rows.length === 0) {
      console.error('Park not found: ' + route);
      res.status(404).send('Park not found');
    } else {
      console.log('Park found: ' + route);
      const park = result.rows[0];
      res.send(park);
    }
  });
});

// app.get('/images/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const imagePath = __dirname + '/images/' + filename;
  
//   fs.readFile(imagePath, (err, data) => {
//     if (err) {
//       res.status(404).send('Image not found');
//     } else {
//       res.writeHead(200, {'Content-Type': 'image/jpeg'});
//       res.end(data);
//     }
//   });
// });
