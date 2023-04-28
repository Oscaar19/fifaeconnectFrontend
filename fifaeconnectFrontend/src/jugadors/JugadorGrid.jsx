import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function JugadorGrid({jugador}) {
  return (
    <Link className="tarjeta-jugador" to={"/jugadors/"+jugador.id}>
      <div className="jugador-grid">
        
        <img src="./aaa.jpg" className="user-photo"/>
        <div className="user-info">
          <h2 className="user-name">{jugador.nombre}</h2>
          <p className="user-club">Club donde Juega</p>
        </div>
      </div>
    </Link>
  );
}

export default JugadorGrid;
