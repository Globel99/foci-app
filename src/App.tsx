import { useState } from 'react';

import LastMatches from './views/last-matches';

import './app.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  const logoPath = `assets/leagues/${darkMode ? 'pl-dark.svg' : 'pl.svg'}`;

  return (
    <div id="app" className={darkMode ? 'dark' : ''}>
      <button onClick={toggleDarkMode}></button>
      <img src={logoPath} />
      <LastMatches></LastMatches>
    </div>
  );
}

export default App;
