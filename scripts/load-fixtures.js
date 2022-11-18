import { MongoClient } from 'mongodb';

import client from './client.js';

const season = 2022;

const leagues = {
  wc: 1,
  ucl: 2,
  el: 3,
  bundes: 78,
  premier: 39,
  la: 140,
  ligue1: 61,
  serie: 135
};

let response = [];
for await (const league of Object.values(leagues)) {
  const request = await client('/fixtures', { season, league });
  console.log({ ...request, response: [] });
  response.push(...request.response);
}

const mongo = new MongoClient(process.env.MONGO);
console.log('connected to server');

const db = mongo.db('foci');
console.log('connected to db');

const fixtures = db.collection('fixtures');
fixtures.createIndex({ 'fixture.id': 1 }, { unique: true });
fixtures.createIndex({ 'fixture.timestamp': 1 });

await fixtures.insertMany(response);

process.exit();
