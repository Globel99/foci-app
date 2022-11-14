import { useEffect, useState } from 'react';
import afClient from '../clients/api-football';

import MatchCard from '../comps/match-card';

import { AfFixture } from '../../types/api-football';

import './last-matches.css';

export default function LastMatches() {
  const [matches, setMatches] = useState<AfFixture[]>([]);
  const leagueId = 39;

  async function fetchMatches() {
    const resp = await afClient.getLastFixtures(leagueId, 10);
    const matches = resp.response;
    setMatches(matches);
  }

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="last-matches">
      {matches.map((match) => (
        <MatchCard key={match.fixture.id} match={match} />
      ))}
    </div>
  );
}
