import { client } from './client.js';
import connect from './mongo.js';
import supportedLeagues from './supported-leagues.js';

const db = await connect();

const season = 2022;

let response = [];
for await (const league of Object.values(supportedLeagues)) {
  const request = await client('/teams', { league, season });
  response.push(...request.response);
}

const map = new Map(response.map(r => [r.team.id, r]));
console.log(map.size);

const teams = db.collection('teams');
teams.deleteMany({});
teams.createIndex({ 'team.id': 1 }, { unique: true });
teams.createIndex({ 'team.name': 1 });

await teams.insertMany(Array.from(map.values()));

process.exit();
