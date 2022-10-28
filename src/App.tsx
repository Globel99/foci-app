import { useState } from 'react';
import './App.css';
import { ScoreBoard } from './comps/ScoreBoard';

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
      <ScoreBoard home={2} away={0} minute={43}></ScoreBoard>
    </div>
  );
}

export default App;
