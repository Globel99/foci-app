import styled from 'styled-components';

import ScoreBoard from './score-board';
import Badge from './badge';
import StatBar from './stat-bar';
import PossessionIcon from '../icons/possession-icon';
import ShotsIcon from '../icons/shots-icon';

import { Match } from '../../types/app';

type Props = {
  match: Match;
};

export default function MatchCard({
  match: {
    fixture: { goals, teams },
    stats
  }
}: Props) {
  const r = () => Math.floor(Math.random() * 10);

  return (
    <Root className="match-card">
      <Header>
        <Badge logoSrc={teams.home.logo} name={teams.home.name} />
        <ScoreBoard minute={90} home={Number(goals.home)} away={Number(goals.away)} />
        <Badge logoSrc={teams.away.logo} name={teams.away.name} />
      </Header>
      <Stats>
        <Stat>
          <Icon>
            <PossessionIcon />
          </Icon>
          <StatBar values={[stats.home['Ball Possession'], stats.away['Ball Possession']]} />
        </Stat>
        <Stat>
          <Icon>
            <ShotsIcon />
          </Icon>
          <StatBar values={[stats.home['Total Shots'], stats.away['Total Shots']]} />
        </Stat>
      </Stats>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  place-items: center;
  gap: 16px;
  padding: 10px;
  border-radius: 20px;

  .stat-bar {
    flex-basis: 40%;
    align-items: center;
  }
`;

const Stats = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  img {
    height: 14px;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  flex-basis: 30%;

  > span {
    margin-left: auto;
    margin-right: 10px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .score-board {
    flex-basis: 30%;
  }

  .badge {
    flex-basis: 25%;
  }
`;
