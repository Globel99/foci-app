import { useState } from 'react';

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
          setSelected(icon);
        }}
        className={isSelected ? 'selected' : ''}
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
    </div>
  );
}
