import React from 'react';
import '../App.css';

function JugadorGrid({nombre,foto,info}) {
  return (
    <a className='tarjeta-jugador' href="">
    <div className="jugador-grid">
      
        <img src="./aaa.jpg" className="user-photo"/>
        <div className="user-info">
          <h2 className="user-name">{nombre}</h2>
          <p className="user-club">Club donde Juega</p>
        </div>
    </div>
    </a>
  );
}

export default JugadorGrid;
