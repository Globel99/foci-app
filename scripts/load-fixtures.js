import client from './client.js';
import connect from './mongo.js';

const db = await connect();

const season = 2022;

const leagues = {
  wc: 1,
  ucl: 2,
  el: 3,
  bundes: 78,
  premier: 39,
  la: 140,
  ligue1: 61,
  serie: 135,
  nb1: 271
};

let response = [];
for await (const league of Object.values(leagues)) {
  const request = await client('/fixtures', { season, league });
  console.log({ ...request, response: [] });
  response.push(...request.response);
}

const fixtures = db.collection('fixtures');
fixtures.createIndex({ 'fixture.id': 1 }, { unique: true });
fixtures.createIndex({ 'fixture.timestamp': 1 });

await fixtures.insertMany(response);

process.exit();
