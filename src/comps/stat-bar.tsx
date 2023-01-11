import styled from 'styled-components';
import classNames from 'classnames';

import { NumberNull } from '../../types/api-football';

type Props = {
  values: [NumberNull, NumberNull];
  texts?: [string, string];
};

export default function StatBar({ values, texts }: Props) {
  const v = [values[0] || 0, values[1] || 0];

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
    <Root
      className={classNames({
        'stat-bar': true,
        full: filledV === sumV
      })}
      style={filledFlowDirection}
    >
      <div className="bar filled" style={{ ...filledStyle, ...filledFlowDirection }}>
        <span className="bigger-number">{biggerNumber}</span>
      </div>
      <div className="bar non-filled" style={nonFilledWidth}>
        {lowerNumber > 0 && <span className="lower-number">{lowerNumber}</span>}
      </div>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  border: 2px solid var(--fg);
  border-radius: 8px;

  .bar {
    display: flex;
    align-items: center;
    height: calc(100% + 4px);
  }

  .filled {
    background-color: var(--fg);
    border-radius: 8px;
  }

  .bigger-number,
  .lower-number {
    margin: 6px;
    font-weight: 800;
    font-size: 10px;
  }

  .bigger-number {
    position: absolute;
    color: var(--bg);
  }

  .full {
    background-color: var(--fg);
  }
`;
