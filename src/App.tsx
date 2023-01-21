import { useState } from 'react';
import { Context, Theme } from './context';
import styled from 'styled-components';

import LastMatches from './views/last-matches';
import Navigator from './components/navigator';

import './app.scss';

function App() {
  const defaultTheme: Theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

  const [theme, setTheme] = useState(defaultTheme);
  localStorage.setItem('theme', theme);

  const isDark = theme === 'dark';

  const logoPath = `assets/leagues/${isDark ? 'pl-dark.svg' : 'pl.svg'}`;

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <AppRoot id="app" className={isDark ? 'dark' : ''}>
        <Container id="container">
          <img src={logoPath} />
          <LastMatches />
        </Container>
        <Navigator />
      </AppRoot>
    </Context.Provider>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  height: calc(100% - 50px);
  overflow-y: scroll;
  max-width: 600px;
  flex-flow: column;
  font-family: var(--font-family);
  box-sizing: border-box;
  padding: 8px;
`;

const AppRoot = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--bg);
  color: var(--font);
  transition: all 0.1s ease-out;

  #container {
    top: 50px;
  }
}
`;

export default App;
