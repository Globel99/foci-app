import styled from 'styled-components';

type Props = {
  filled?: boolean;
  icon: string;
};

export default function MaterialIcon({ filled, icon }: Props) {
  const className = `material-icons${!filled ? '-outlined' : ''}`;

  return <Icon className={`${className} material-icon`}>{icon}</Icon>;
}

const Icon = styled.span`
  cursor: pointer;
`;
