import { useState } from 'react';
import classNames from 'classnames';

import './switch.scss';

type Props = {
  defaultState?: boolean;
  onChange: (state: boolean) => any;
};

export default function Switch({ defaultState, onChange }: Props) {
  const [state, setState] = useState(!!defaultState);

  return (
    <div
      className={classNames({
        switch: true,
        on: state
      })}
      onClick={() => {
        setState(!state);
        onChange(!state);
      }}
    >
      <div className="button-container">
        <div className="button"></div>
      </div>
    </div>
  );
}
