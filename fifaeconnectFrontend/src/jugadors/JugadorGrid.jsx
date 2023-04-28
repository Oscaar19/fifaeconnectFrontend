import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function JugadorGrid({jugador}) {
  return (
    <Link className="tarjeta-staff" to={"/jugadors/"+jugador.id}>
      <div className="staff-grid">
        <img src={jugador.foto} className="user-photo"/>
        <div className="user-info">
          <h2 className="user-name">{jugador.nombre}</h2>
          <p className="user-club">Club donde Juega</p>
        </div>
      </div>
    </Link>
  );
}

export default JugadorGrid;
