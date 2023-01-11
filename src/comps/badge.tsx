import styled from 'styled-components';
import { URI, TeamName } from '../../types/api-football';

type Props = {
  logoSrc: URI;
  name: TeamName;
};

export default function Badge(props: Props) {
  return (
    <Root className="badge">
      <img src={props.logoSrc} />
      <span>{props.name}</span>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  place-items: center;

  img {
    height: 40px;
  }

  span {
    text-align: center;
    font-size: 10px;
  }
`