import {
  AfTeamsResponse,
  AfFixturesResponse,
  ApiFootballResponse,
} from '../../types/api-football';

const hostName = 'v3.football.api-sports.io';

const client = {
  getTeam: async (id: number): Promise<AfTeamsResponse> =>
    apiFootballFetch('/teams', { id }),
  getLastFixtures: async (
    leagueId: number,
    last: number,
  ): Promise<AfFixturesResponse> =>
    apiFootballFetch('/fixtures', { league: leagueId, last }),
};

const apiFootballFetch = async (
  endpoint: string,
  queryParams: { [key: string]: any },
): Promise<any> => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `https://${hostName}${endpoint}?${queryString}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': hostName,
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      },
    },
  );

  return await response.json();
};

export default client;
