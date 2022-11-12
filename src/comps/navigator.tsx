import { useState } from 'react';
import SettingsMenu from './menus/settings-menu';

type Icon = 'settings' | 'search' | 'home';

import './navigator.scss';
import MaterialIcon from './material-icon';

export default function Navigator() {
  const [selected, setSelected] = useState<Icon | null>(null);

  const Icon = (icon: Icon) => {
    const isSelected = selected === icon;
    return (
      <div
        onClick={() => {
          setSelected(selected === icon ? null : icon);
        }}
        className={isSelected ? 'menu-icon selected' : 'menu-icon'}
      >
        <MaterialIcon icon={icon} />
      </div>
    );
  };

  return (
    <div className="navigator">
      {Icon('settings')}
      {Icon('home')}
      {Icon('search')}
      {selected && (
        <div className="menu">
          {selected === 'settings' && <SettingsMenu></SettingsMenu>}
        </div>
      )}
    </div>
  );
}
