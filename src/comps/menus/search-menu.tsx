import { useState } from 'react';

import './search-menu.scss';
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
    <div className="search-menu">
      <div>
        <input
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
      <div className="results">
        {results.map(r => (
          <div>
            <img src={r.img} />

            <span>{r.title}</span>
          </div>
        ))}
      </div>
    </div>
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
