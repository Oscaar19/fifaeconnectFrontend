import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function JugadorGrid({jugador}) {
  return (
    <Link className="tarjeta-staff" to={"/jugadors/"+jugador.id}>
      <div className="staff-grid">
        <img src={"http://127.0.0.1:8000/storage/"+jugador.foto.ruta} className="user-photo"/>
        <div className="user-info">
          <h2 className="user-name">{jugador.nom}</h2>
        </div>
      </div>
    </Link>
  );
}

export default JugadorGrid;
