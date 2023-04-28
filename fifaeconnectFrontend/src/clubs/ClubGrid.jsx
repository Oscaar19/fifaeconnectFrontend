import React from 'react';
import { Link } from 'react-router-dom';

const ClubGrid = ({ club }) => {
  return (
    <Link className='tarjeta-club' to={"/clubs/"+club.id}>
      <div className="club-card">
        <h2 className="club-name">{club.name}</h2>
        <img className="club-logo" src={club.logo} alt={`${club.name} logo`} />
      </div>
    </Link>    
  );
};

export default ClubGrid;
