import objectCache from '../utils/object-cache';

const hostName = 'v3.football.api-sports.io';

export default {
  getTeam: async (id: number): Promise<AF.TeamsResponse> => afFetch('/teams', { id }),
  getLastFixtures: async (leagueId: number, last: number): Promise<AF.FixturesResponse> =>
    afFetch('/fixtures', { league: leagueId, last }),
  getFixtureStats: async (fixture: number): Promise<AF.FixtureStatResponse> =>
    afFetch('/fixtures/statistics', { fixture })
};

const afFetch = async (endpoint: string, queryParams: { [key: string]: any }): Promise<AF.Response> => {
  const obj = { endpoint, queryParams };
  const cache = objectCache;

  /*   if (cache.has(obj)) {
    return cache.get(obj);
  } */

  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(`https://${hostName}${endpoint}?${queryString}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': hostName,
      'x-rapidapi-key': import.meta.env.VITE_API_KEY
    }
  });

  const result = await response.json();
  cache.set(obj, result);

  return result;
};
