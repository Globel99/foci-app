import dotenv from 'dotenv';
dotenv.config();

const hostName = 'v3.football.api-sports.io';

/**
 *
 * @param {string} endpoint
 * @param {{{ [key: string]: any }}} queryParams
 */
export default async function client(endpoint, queryParams) {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(`https://${hostName}${endpoint}?${queryString}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': hostName,
      'x-rapidapi-key': process.env.VITE_API_KEY
    }
  });

  return response.json();
}
