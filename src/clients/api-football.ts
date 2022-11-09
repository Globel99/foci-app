import {
  AfTeamsResponse,
  AfFixturesResponse,
  ApiFootballResponse
} from '../../types/api-football';

import objectCache from '../utils/object-cache';

const hostName = 'v3.football.api-sports.io';

const client = {
  getTeam: async (id: number): Promise<AfTeamsResponse> =>
    apiFootballFetch('/teams', { id }),
  getLastFixtures: async (
    leagueId: number,
    last: number
  ): Promise<AfFixturesResponse> =>
    apiFootballFetch('/fixtures', { league: leagueId, last })
};

const apiFootballFetch = async (
  endpoint: string,
  queryParams: { [key: string]: any }
): Promise<ApiFootballResponse> => {
  const obj = { endpoint, queryParams };
  const cache = objectCache;

  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `https://${hostName}${endpoint}?${queryString}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': hostName,
        'x-rapidapi-key': import.meta.env.VITE_API_KEY
      }
    }
  );

  const result = await response.json();
  cache.set(obj, result);

  return result;
};

export default client;
