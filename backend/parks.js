const fs = require('fs');
const _ = require('lodash');

function loadData() {
  let data = fs.readFileSync('parks.csv', { encoding: 'utf-8' });
  return _.map(data.split('\n'), d => d.split(","));
};

const d = loadData();
d.shift();
const dd = _.map(d, d=> [d[0],d[1], d[2] + (d[3] ? ","+d[3] : "")]);

let list = [];
const data = _.forEach(dd, row => list.push({title: row[0] + " (" + row[2] + ")", name: row[0], route: row[1] }));

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

list = list.sort( compare );

console.dir(list, {'maxArrayLength': null});
