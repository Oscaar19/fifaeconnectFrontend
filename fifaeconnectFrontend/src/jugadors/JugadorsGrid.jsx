import React from 'react';
import JugadorGrid from './JugadorGrid';
import '../App.css';
import Header from '../layout/Header';
import SettingsMenu from '../layout/SettingsMenu';

function JugadorsGrid() {
  const jugadores = [
    { id: 1, nombre: 'Jugador 1', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 1 aquí' },
    { id: 2, nombre: 'Jugador 2', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 2 aquí' },
    { id: 3, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 4, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 5, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    // Añade aquí más jugadores según tus necesidades
  ];

  return (
    
        
    <div className="roster-container">
      <SettingsMenu/>
      <div className="roster-grid">
        {jugadores.map((jugador) => (
          <JugadorGrid key={jugador.id} jugador={jugador} />
        ))}
      </div>
    </div>
   
    
  );
}

export default JugadorsGrid;
