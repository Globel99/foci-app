import { useState } from 'react';

import LastMatches from './views/last-matches';

import './app.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  const logoPath = `assets/leagues/${darkMode ? 'pl-dark.svg' : 'pl.svg'}`;

  return (
    <div id="app" className={darkMode ? 'dark' : ''}>
      <div id="container">
        <button onClick={toggleDarkMode}></button>
        <img src={logoPath} />
        <LastMatches></LastMatches>
      </div>
    </div>
  );
}

export default App;
