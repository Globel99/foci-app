import { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import './switch.scss';

type Props = {
  defaultState?: boolean;
  onChange: (state: boolean) => any;
};

export default function Switch({ defaultState, onChange }: Props) {
  const [state, setState] = useState(!!defaultState);

  return (
    <Root
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
    </Root>
  );
}

const Root = styled.div`
  --size: 25px;
  display: flex;
  height: var(--size);
  width: calc(var(--size) * 2.5);
  background-color: rgba(var(--bg), 1);

  .button {
    height: 100%;
    aspect-ratio: 1;
    background-color: lightgray;
    margin-left: auto;
  }

  .button-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: var(--size);
    width: var(--size);
    transition: width 0.1s ease-out;
    background-color: #4ed164;
  }
`;
