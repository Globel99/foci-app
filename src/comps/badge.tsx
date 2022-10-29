import { URI, TeamName } from '../../types/api-football';
import './styles/badge.css';

type Props = {
  logoSrc: URI;
  name: TeamName;
};

export default function Badge(props: Props) {
  return (
    <div className="badge">
      <img src={props.logoSrc} />
      <span>{props.name}</span>
    </div>
  );
}
