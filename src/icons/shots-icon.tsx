import styled from 'styled-components';

export default function ShotsIcon() {
  return <Root className="shots-icon"></Root>;
}

const Root = styled.span`
  aspect-ratio: 1;
  border: 2px solid currentColor;
  border-radius: 5px 5px 0 0;
  border-bottom: unset;
  background: rgba(255, 255, 255, 0.2);
`;
