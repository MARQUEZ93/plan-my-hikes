const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const fs = require('fs');

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
  pool.query('SELECT * FROM parks WHERE route = $1', [route], (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Error executing query');
    } else if (result.rows.length === 0) {
      res.status(404).send('Park not found');
    } else {
      const park = result.rows[0];
      res.send(park);
    }
  });
});

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
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

app.get('/parks', (req, res) => {
  pool.query('SELECT name, route, location FROM parks')
    .then(result => {
      const parks = result.rows;
      res.send(parks);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching parks');
    });
});