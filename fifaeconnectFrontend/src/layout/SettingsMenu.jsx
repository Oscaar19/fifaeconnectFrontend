import React from 'react';
import '../App.css';

const SettingsMenu = () => {
  return (
    <div className="settings-menu">
      <button className='buttons' title='Els teus Golden Players/Coaches/Managers'><i className="bi bi-star-fill"></i></button>
      <button className="buttons" title='Filtres de recerca'><i class="bi bi-filter"></i></button>
    </div>
  );
};

export default SettingsMenu;
