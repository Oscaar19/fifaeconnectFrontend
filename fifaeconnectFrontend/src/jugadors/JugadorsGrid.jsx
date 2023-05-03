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
    { id: 6, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 7, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 8, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 9, nombre: 'Jugador 1', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 1 aquí' },
    { id: 10, nombre: 'Jugador 2', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 2 aquí' },
    { id: 11, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 12,nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 13, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 14, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 15, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 16, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 17, nombre: 'Jugador 1', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 1 aquí' },
    { id: 18, nombre: 'Jugador 2', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 2 aquí' },
    { id: 19, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 20, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 21, nombre: 'Jugador 3', foto: './src/jugadors/aaa.jpg', info: 'Información del jugador 3 aquí' },
    { id: 22, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 23, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    { id: 24, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
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
