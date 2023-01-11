import styled from 'styled-components';

export default function PossessionIcon() {
  return (
    <Root className="possession-icon">
      <img src="assets/ball.svg" />
      <span>%</span>
    </Root>
  );
}

const Root = styled.span`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  font-weight: bold;

  img {
    filter: invert(var(--light));
  }
`;
