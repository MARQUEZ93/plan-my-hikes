const fs = require('fs');

const parks = require ('../data/json/parks.json');

const newParks = {};

// Convert the structure
parks.parks.forEach(park => {
  const routeKey = park.route;

  // Extract location from title
  let start = park.title.indexOf('(') + 1;
  let end = park.title.indexOf(')');
  let location = park.title.substring(start, end);
  
  // Add the new location field
  park["location"] = location;
  
  newParks[routeKey] = park;
});

  // Save the new structure into new_parks.json
fs.writeFile('new_parks.json', JSON.stringify(newParks, null, 2), 'utf8', err => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log('new_parks.json has been created.');
  }
});