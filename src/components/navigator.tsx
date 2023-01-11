import { useState } from 'react';
import classNames from 'classnames';

import SettingsMenu from './menus/settings-menu';
import SearchMenu from './menus/search-menu';

type Icon = 'settings' | 'search' | 'home';

import './navigator.scss';
import MaterialIcon from './material-icon';

export default function Navigator() {
  const [selected, setSelected] = useState<Icon | null>(null);

  const menus = {
    settings: <SettingsMenu />,
    search: <SearchMenu setSelected={setSelected} />
  };

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
    <div
      className={classNames({
        navigator: true,
        searching: selected === 'search'
      })}
    >
      {Icon('settings')}
      {Icon('home')}
      {Icon('search')}
      {selected && selected !== 'home' && <div className="menu">{menus[selected]}</div>}
    </div>
  );
}
