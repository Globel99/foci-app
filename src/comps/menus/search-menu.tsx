import { useState } from 'react';
import styled from 'styled-components';

import MaterialIcon from '../material-icon';
import { TeamsResponse } from '../../../types/api-football';

type Icon = 'settings' | 'search' | 'home';

type Props = {
  setSelected: React.Dispatch<React.SetStateAction<Icon | null>>;
};

type Result = {
  img: string;
  title: string;
};

export default function SearchMenu({ setSelected }: Props) {
  const [results, setResults] = useState<Result[]>([]);
  console.log(results);
  return (
    <Root className="search-menu">
      <div>
        <Input
          type="text"
          autoFocus
          onChange={async event => {
            const searchText = event.target.value;
            setResults(searchText.length > 1 ? await search(searchText) : []);
          }}
        />
        <span
          onClick={() => {
            setSelected(null);
          }}
        >
          <MaterialIcon icon="close" />
        </span>
      </div>
      <div className="no-result">
        <div>no result</div>
      </div>
      <Results>
        {results.map(r => (
          <div>
            <img src={r.img} />

            <span>{r.title}</span>
          </div>
        ))}
      </Results>
    </Root>
  );
}

async function search(searchText: string): Promise<Result[]> {
  const apiURL: string = import.meta.env.VITE_TRIPLED_URL;
  const url = `${apiURL}/team/${searchText}?limit=5`;
  console.log({ url });
  const request = await fetch(url);

  const response: TeamsResponse['response'] = await request.json();

  console.log(response);
  return response.map(({ team: { name, logo } }) => ({ img: logo, title: name }));
}

const Root = styled.div`
  color: var(--font);
  display: flex;
  flex-flow: column-reverse;

  div {
    width: 100%;
  }
  input:focus {
    outline: none;
  }
`

const Input = styled.input`
  color: var(--font);
  font-size: 24px;
  height: 36px;
  width: 100%;
  background-color: var(--bg);
  border: unset;
  border-radius: 8px;
  padding-left: 12px;
`

const Results = styled.div`
  display: flex;
  flex-flow: column-reverse;

  div {
      height: 50px;

    img {
      height: 30px;
    }
  }
`

