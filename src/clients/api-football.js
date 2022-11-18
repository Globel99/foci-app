import objectCache from '../utils/object-cache';
const hostName = 'v3.football.api-sports.io';
const afFetch = async (endpoint, queryParams) => {
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
export default {
    getTeam: async (id) => afFetch('/teams', { id }),
    getLastFixtures: async (leagueId, last) => afFetch('/fixtures', { league: leagueId, last }),
    getFixtureStats: async (fixture) => afFetch('/fixtures/statistics', { fixture }),
    get: afFetch
};
