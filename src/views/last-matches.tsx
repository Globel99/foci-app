import { useEffect, useState } from 'react';
import styled, { StyledComponent } from 'styled-components'
import afClient from '../clients/api-football';
import statsParser from '../utils/stats-parser';

import MatchCard from '../comps/match-card';

import { Match } from '../../types/app';

export default function LastMatches() {
  const [matches, setMatches] = useState<{ [k: string]: Match }>({});
  const leagueId = 1;

  async function fetchMatches() {
    const fixtures = (await afClient.getLastFixtures(leagueId, 4)).response;
    const fixtureIds = fixtures.map(m => m.fixture.id);

    const stats = (await Promise.all(fixtureIds.map(id => afClient.getFixtureStats(id)))).map(s => s.response);
    const sp = statsParser;
    console.log(stats);

    const parsedStats = stats.map(s => ({ home: sp(s[0].statistics), away: sp(s[1].statistics) }));

    setMatches(Object.fromEntries(fixtureIds.map((id, i) => [id, { fixture: fixtures[i], stats: parsedStats[i] }])));
  }

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <Root>
      {Object.entries(matches).map(([fixtureId, match]) => (
        <MatchCard key={fixtureId} match={match} />
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  gap: 20px;
`
