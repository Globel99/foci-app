import ScoreBoard from './score-board';
import Badge from './badge';
import StatBar from './stat-bar';
import PossessionIcon from '../icons/possession-icon';
import ShotsIcon from '../icons/shots-icon';

import './styles/match-card.scss';

import { AfFixture } from '../../types/api-football';

type Props = {
  match: AfFixture;
};

export default function MatchCard({
  match: {
    goals,
    teams: { home, away }
  }
}: Props) {
  const r = () => Math.random();

  return (
    <div className="match-card">
      <div className="row">
        <Badge logoSrc={home.logo} name={home.name} />
        <ScoreBoard
          minute={90}
          home={Number(goals.home)}
          away={Number(goals.away)}
        />
        <Badge logoSrc={away.logo} name={away.name} />
      </div>
      <div className="stats">
        <div className="stat">
          <div className="img-container">
            <PossessionIcon />
          </div>
          <StatBar values={[r(), r()]} />
        </div>
        <div className="stat">
          <div className="img-container">
            <ShotsIcon />
          </div>
          <StatBar values={[r(), r()]} />
        </div>
      </div>
    </div>
  );
}
