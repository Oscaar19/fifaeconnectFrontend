import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SettingsMenu = () => {
  return (
    <div className="settings-menu">
      <button className='buttons' title='Els teus Golden Players/Coaches/Managers'><i className="bi bi-star-fill"></i></button>
      <div className="dropdown">
        <button className="buttons"><i className="bi bi-filter"></i></button>
        <div className="dropdown-content">
          <Link className='faOption' to={"/jugadorsfa"}>Mira els jugadors FA</Link>            
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
