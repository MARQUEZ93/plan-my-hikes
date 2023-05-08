const { Pool } = require('pg');

/* I used a postgres (PostgreSQL) 14.7 (Homebrew) */

/* 
  If running the script on a production, use environment variables for postgres configuration like below:

  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }); 

*/

/* Set the name of your desired database table name below */
const yourDBTableName = 'items';

/* 
  Create a postgres db locally & set your variables below.
  Ensure your pg_user has proper permissions such as creating a table: GRANT CREATE ON SCHEMA public TO admin; 
*/
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'pmh',
    user: 'admin',
    password: 'password'
});

const items = require ('./data.json');

/* 
  Set your desired column names below. 
  For example, I am using a best, crowded & hidden_gem column names. These match the keys in ./data.json
*/
pool.query(`CREATE TABLE IF NOT EXISTS ${yourDBTableName} (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, best TEXT NOT NULL, crowded TEXT NOT NULL, hidden_gem TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW() )`)
  .catch((err) => console.error(err));

// Uncomment the below after the first time you run node toPostgres.js. After the first run, your database table will have been created.

/* 
  
  let count = 0; // this is used for setting row id

  items.items.forEach(item => {
      createRow(item, count);
      count++;
  }); 

*/

/* 
  Alter your column names in between the paranthesis in text key in the query object
  Do the same for the accessor(s) in the data variable in the values key in the query object
  Ensure the numbers match up for the amount of columns you insert after VALUES.
*/
async function createRow(data, id) {
    const query = {
      text: `INSERT INTO ${yourDBTableName} (name, best, crowded, hidden_gem, id) VALUES ($1, $2, $3, $4, $5)`,
      values: [data.name, data.best, data.crowded, data.hidden_gem, id],
    };
    try {
      const result = await pool.query(query);
      console.log(`Created row for item: ${data.name}`);
    } catch (err) {
      console.error(err);
    }
}
