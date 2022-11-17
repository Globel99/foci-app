import { useEffect, useState } from 'react';
import afClient from '../clients/api-football';
import statsParser from '../utils/stats-parser';

import MatchCard from '../comps/match-card';

import './last-matches.css';
import '../../types/app.d.ts';

export default function LastMatches() {
  const [matches, setMatches] = useState<{ [k: string]: APP.Match }>({});
  const leagueId = 39;

  async function fetchMatches() {
    const fixtures = (await afClient.getLastFixtures(leagueId, 3)).response;
    const fixtureIds = fixtures.map((m) => m.fixture.id);

    const stats = (await Promise.all(fixtureIds.map((id) => afClient.getFixtureStats(id)))).map((s) => s.response);
    const sp = statsParser;
    console.log(stats);

    const parsedStats = stats.map((s) => ({ home: sp(s[0].statistics), away: sp(s[1].statistics) }));

    setMatches(Object.fromEntries(fixtureIds.map((id, i) => [id, { fixture: fixtures[i], stats: parsedStats[i] }])));
  }

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="last-matches">
      {Object.entries(matches).map(([fixtureId, match]) => (
        <MatchCard key={fixtureId} match={match} />
      ))}
    </div>
  );
}
