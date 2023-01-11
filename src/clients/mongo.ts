const hostName: string = import.meta.env.VITE_MONGO_DATA_API_URL;

const apiFetch = async (actionEndpoint: string, collection: string, requestBody: object) => {
  const baseRequestBody = {
    dataSource: 'Cluster0',
    database: 'foci',
    collection
  };

  const body = JSON.stringify({ ...baseRequestBody, ...requestBody });
  console.log({ ...baseRequestBody, ...requestBody });

  const response = await fetch(hostName.concat(actionEndpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': import.meta.env.VITE_MONGO_DATA_API_KEY,
      'Access-Control-Request-Headers': '*'
    },
    body
  });

  const result = await response.json();
  return result?.documents;
};

export default {
  searchLeagues: async (searchText: string, limit: number = 3) =>
    apiFetch('/find', 'leagues', {
      limit,
      filter: { 'league.name': { $regex: `^${searchText}` } },
      projection: { 'league.name': 1, 'league.logo': 1 }
    })
};
