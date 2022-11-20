import connect from './mongo.js';

const db = await connect();

const leagues = db.collection('leagues');
console.time('time');
await leagues.find({
  'league.name': { $regex: '^Pre' }
});

console.timeEnd('time');

process.exit();
