import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const JugadorsSettings = () => {
  return (
    <div className="settings-menu">
      <Link to={"/goldens"}><i className="bi bi-star-fill"></i></Link>
      <div className="dropdown">
        <button className="buttons"><i className="bi bi-filter"></i></button>
        <div className="dropdown-content">
          <Link className='faOption' to={"/jugadors/freeagents"}>Mira els jugadors FA</Link>            
        </div>
      </div>
    </div>
  );
};

export default JugadorsSettings;
