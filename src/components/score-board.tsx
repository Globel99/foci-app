import styled from 'styled-components';

interface Props {
  home: number;
  away: number;
  minute: number;
}

export default function ScoreBoard(props: Props) {
  return (
    <Root className="score-board">
      <div className="score">
        <span>{props.home}</span>
        <span>-</span>
        <span>{props.away}</span>
      </div>
      <span className="minute">{props.minute}'</span>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  place-items: center;
  font-weight: 500;

  .score {
    display: flex;
    gap: 10px;
    font-size: 48px;
  }

  .minutes {
    margin: auto;
  }
`;
