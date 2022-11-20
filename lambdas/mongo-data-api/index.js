import dotenv from 'dotenv';
import fetch from 'node-fetch';
/**
 *
 * @param {AWSLambda.APIGatewayEvent} event
 * @returns {AWSLambda.ALBResult}
 */
export async function handler(event) {
  dotenv.config();

  const hostName = process.env.VITE_MONGO_DATA_API_URL;

  const apiFetch = async (action, collection, requestBody) => {
    const baseRequestBody = {
      dataSource: 'Cluster0',
      database: 'foci',
      collection
    };

    const body = JSON.stringify({ ...baseRequestBody, ...requestBody });

    const response = await fetch(hostName.concat(action), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.VITE_MONGO_DATA_API_KEY,
        'Access-Control-Request-Headers': '*'
      },
      body
    });

    const result = await response.json();
    return result?.documents;
  };
  const { action, collection } = event.queryStringParameters;
  const requestBody = event.body;

  const response = await apiFetch(action, collection, requestBody);
  return { body: response, statusCode: 200 };
}
