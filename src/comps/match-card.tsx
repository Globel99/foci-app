import ScoreBoard from './score-board';
import Badge from './badge';
import StatBar from './stat-bar';
import PossessionIcon from '../icons/possession-icon';
import ShotsIcon from '../icons/shots-icon';

import './match-card.scss';
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
    <div className="match-card">
      <div className="row">
        <Badge logoSrc={teams.home.logo} name={teams.home.name} />
        <ScoreBoard minute={90} home={Number(goals.home)} away={Number(goals.away)} />
        <Badge logoSrc={teams.away.logo} name={teams.away.name} />
      </div>
      <div className="stats">
        <div className="stat">
          <div className="img-container">
            <PossessionIcon />
          </div>
          <StatBar values={[stats.home['Ball Possession'], stats.away['Ball Possession']]} />
        </div>
        <div className="stat">
          <div className="img-container">
            <ShotsIcon />
          </div>
          <StatBar values={[stats.home['Total Shots'], stats.away['Total Shots']]} />
        </div>
      </div>
    </div>
  );
}
