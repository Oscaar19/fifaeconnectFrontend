import React from 'react';
import { Link } from 'react-router-dom';

const ClubGrid = ({ club }) => {
  console.log(club)
  return (
    <Link className='tarjeta-club' to={"/clubs/"+club.id}>
      <div className="club-card">
          <h2 className="club-name">{club.nom}</h2>
          <img className="club-logo" src={"http://127.0.0.1:8000/storage/"+club.foto.ruta}/>
      </div>
    </Link>    
  );
};

export default ClubGrid;
