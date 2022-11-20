import client from './client.js';
import connect from './mongo.js';

const db = await connect();

const request = await client('/leagues');

const fixtures = db.collection('leagues');

fixtures.createIndex({ 'league.id': 1 }, { unique: true });
fixtures.createIndex({ 'league.team': 1 });

await fixtures.insertMany(request.response);

process.exit();
