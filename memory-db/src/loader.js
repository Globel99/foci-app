async function loadTeams() {
  const url = process.env.MONGO_PROXY_URL;
  const response = await fetch(`${url}?action=find&collection=teams`);
  const { documents } = await response.json();

  return new Map(documents.map(team => [team.team.id, team]));
}

export default {
  loadTeams
};
