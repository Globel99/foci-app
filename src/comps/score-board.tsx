import './styles/score-board.css';

interface Props {
  home: number;
  away: number;
  minute: number;
}

export default function ScoreBoard(props: Props) {
  return (
    <div className="score-board">
      <div className="score">
        <span>{props.home}</span>
        <span>-</span>
        <span>{props.away}</span>
      </div>
      <span className="minute">{props.minute}'</span>
    </div>
  );
}
