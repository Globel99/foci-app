import './styles/stat-bar.css';

type Props = {
  values: [number, number];
  texts?: [string, string];
};

export default function StatBar({ values, texts }: Props) {
  const v = values;
  const filledIndex = v[1] > v[0] ? 1 : 0;
  const sumV = v[0] + v[1];
  const filledWidth = (v[filledIndex] / sumV) * 100;

  const filledStyle = {
    width: `${filledWidth}%`,
  };

  const containerStyle = {
    justifyContent: filledIndex ? 'flex-end' : 'flex-start',
  };

  return (
    <div className="stat-bar" style={containerStyle}>
      <div className="filled" style={filledStyle}></div>
    </div>
  );
}
