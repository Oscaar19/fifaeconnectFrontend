import React from 'react';
import { Link } from 'react-router-dom';

const ClubGrid = ({ club }) => {
  return (
    <Link className='tarjeta-club' to={"/clubs/"+club.id}>
      <div className="club-card">
          <h2 className="club-name">{club.nom}</h2>
          <img className="club-logo" src={"http://equip08.insjoaquimmir.cat/storage/"+club.foto.ruta}/>
      </div>
    </Link>    
  );
};

export default ClubGrid;
