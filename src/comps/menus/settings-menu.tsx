import { useContext } from 'react';

import { Context } from '../../context';
import Switch from '../switch';

export default function SettingsMenu() {
  const { theme, setTheme } = useContext(Context);
  const isDark = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="settings-menu">
      <div>
        <span>Dark theme</span>
        <Switch onChange={toggleTheme} defaultState={isDark} />
      </div>
    </div>
  );
}
