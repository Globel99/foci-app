import { useState, useContext } from 'react';
import { Context, Theme } from './context';

import LastMatches from './views/last-matches';
import Navigator from './comps/navigator';

import './app.scss';

function App() {
  const defaultTheme: Theme =
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

  const [theme, setTheme] = useState(defaultTheme);
  localStorage.setItem('theme', theme);

  const isDark = theme === 'dark';

  const logoPath = `assets/leagues/${isDark ? 'pl-dark.svg' : 'pl.svg'}`;

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <div id="app" className={isDark ? 'dark' : ''}>
        <div id="container">
          <img src={logoPath} />
          <LastMatches />
        </div>
        <Navigator />
      </div>
    </Context.Provider>
  );
}

export default App;
