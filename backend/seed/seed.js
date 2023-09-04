// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// });

// const parks = require ('../data/json/parks.json');

// // scrub way to set id
// let count = 0;

// parks.parks.forEach(park => {
//     let start = park.title.indexOf('(') + 1;
//     let end = park.title.indexOf(')');
//     let location = park.title.substring(start, end);
//     createRow(park, count, location);
//     count++;
// });

// async function createRow(data, id, location) {
//     const query = {
//       text: 'INSERT INTO parks (name, route, location, tips, hidden_gem, schedule, best, tough, camping, busy, id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
//       values: [data.name, data.route, location, data.tips, data.hidden_gem, data.schedule, data.best, data.tough, data.camping, data.busy, id],
//     };
//     try {
//       const result = await pool.query(query);
//       console.log(`Created ${result}`);
//     } catch (err) {
//       console.error(err);
//     }
// }
