import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SettingsMenu = () => {
  return (
    <div className="settings-menu">
      <button className='buttons' title='Els teus Golden Players/Coaches/Managers'><i className="bi bi-star-fill"></i></button>
      <button className="buttons" title='Filtres de recerca'><Link to={"/jugadorsfa"}><i className="bi bi-filter"></i></Link></button>
    </div>
  );
};

export default SettingsMenu;
