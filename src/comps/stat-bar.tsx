import './stat-bar.scss';
import classNames from 'classnames';

type Props = {
  values: [number, number];
  texts?: [string, string];
};

export default function StatBar({ values, texts }: Props) {
  const v = values;

  const filledIndex = v[1] > v[0] ? 1 : 0;
  const [lowerNumber, biggerNumber] = v.sort();
  const sumV = v[0] + v[1];
  const filledV = v[filledIndex];

  const filledWidth = (filledV / sumV) * 100;

  const filledStyle = {
    width: `${filledWidth}%`
  };

  const nonFilledWidth = {
    width: `${100 - filledWidth}%`
  };

  const filledFlowDirection = {
    justifyContent: filledIndex || v[0] === v[1] ? 'flex-end' : 'flex-start'
  };

  return (
    <div
      className={classNames({
        'stat-bar': true,
        full: filledV === sumV
      })}
      style={filledFlowDirection}
    >
      <div
        className="bar filled"
        style={{ ...filledStyle, ...filledFlowDirection }}
      >
        <span className="bigger-number">{biggerNumber}</span>
      </div>
      <div className="bar non-filled" style={nonFilledWidth}>
        {lowerNumber > 0 && <span className="lower-number">{lowerNumber}</span>}
      </div>
    </div>
  );
}
