import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const ManagersSettings = () => {
  return (
    <div className="settings-menu">
      <Link to={"/goldens"}><i className="bi bi-star-fill"></i></Link>
      <div className="dropdown">
        <button className="buttons"><i className="bi bi-filter"></i></button>
        <div className="dropdown-content">
          <Link to={"/managers/freeagents"}>Mira els managers FA</Link>            
        </div>
      </div>
    </div>
  );
};

export default ManagersSettings;