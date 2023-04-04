const fs = require('fs');
const _ = require('lodash');

function loadData() {
  let data = fs.readFileSync('parks.csv', { encoding: 'utf-8' });
  return _.map(data.split('\n'), d => d.split(","));
};

const d = loadData();
d.shift();
const dd = _.map(d, d=> [d[0],d[1], d[2] + (d[3] ? ","+d[3] : "")]);

let obj = {};
const data = _.forEach(dd, row => obj[row[1]] = {location: row[2], name: row[0]});

console.log(obj);
