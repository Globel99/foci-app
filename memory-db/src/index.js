import express from 'express';
import dotenv from 'dotenv';
import loader from './loader.js';
import utils from './utils.js';

dotenv.config();
/** @type {express.Application} */
const app = express();
const port = process.env.PORT;

const teams = await loader.loadTeams();
console.log(teams.size);

app.get('/team/:searchName', (request, response) => {
  const { searchName } = request.params;
  const { limit } = request.query;

  /** @type {Array} */
  const searchedTeams = Array.from(teams.values()).filter(doc => {
    const {
      team: { name, code }
    } = doc;

    return utils.isMatch(searchName, [name, code]);
  });

  console.log(JSON.stringify(request.query));

  const result = searchedTeams.length ? searchedTeams.slice(0, limit || 1) : [];

  response.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`Memory-DB listening on port ${port}`);
});
