import './material-icon.scss';

type Props = {
  filled?: boolean;
  icon: string;
};

export default function MaterialIcon({ filled, icon }: Props) {
  const className = `material-icons${!filled ? '-outlined' : ''}`;

  return <span className={`${className} material-icon`}>{icon}</span>;
}
