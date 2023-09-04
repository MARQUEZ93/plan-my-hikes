const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const parks = require ('./new_parks.json');

const cors = require('cors');

app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/api/parks/:route', async (req, res) => {
  const route = req.params.route;
  const park = parks[route];
  if (park) {
    res.send(park);
  } else {
    res.status(404).send('Park not found');
  }
});

app.use('/api/images', express.static('public/images'));
