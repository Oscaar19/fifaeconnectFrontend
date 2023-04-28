import React from 'react';
import { Link } from 'react-router-dom';

const Club = () => {

    const players = [
        { id: 1, name: 'Jugador A' },
        { id: 2, name: 'Jugador B' },
        { id: 3, name: 'Jugador C' },
    ];

    const coaches = [
        { id: 1, name: 'Entrenador A' },
        { id: 2, name: 'Entrenador B' },
    ];
        
    const managers = [
        { id: 1, name: 'Directivo A' },
        { id: 2, name: 'Directivo B' },
    ];

  return (
    <div className="club">
      <div className="club-header">
        <img className="logo-club" src='../src/jugadors/aaa.jpg'/>
        <h1 className="name-club">NOMBRE DEL CLUB</h1>
      </div>
      <div className="club-content">
        <h2>Plantilla</h2>
        <ul className="club-roster">
          <li className='lista-roster'>
            <h3>Jugadores</h3>
            <ul>
              {players.map((player) => (
                <Link className="link-jugadores" to={"/jugadors/"+player.id}>
                    <li key={player.id}>{player.name}</li>
                </Link>
              ))}
            </ul>
          </li>
          <li className='lista-roster'>
            <h3>Entrenadores</h3>
            <ul>
              {coaches.map((coach) => (
                <Link className="link-jugadores" to={"/jugadors/"+coach.id}>
                    <li key={coach.id}>{coach.name}</li>
                </Link>                
              ))}
            </ul>
          </li>
          <li className='lista-roster'>
            <h3>Directivos</h3>
            <ul>
              {managers.map((manager) => (
                <Link className="link-jugadores" to={"/jugadors/"+manager.id}>
                    <li key={manager.id}>{manager.name}</li>
                </Link>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Club;
