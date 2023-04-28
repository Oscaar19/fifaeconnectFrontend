import React from 'react';
import { useParams } from 'react-router-dom';

const Jugador = (props) => {
  const { nombre, avatar, bio, redesSociales, logros } = props;
  const { id } = useParams();

  return (
    <div className="jugador-page">
        <h1 className="jugador-nombre">NOMBRE DEL JUGADOR {id}</h1>
        <div className="jugador-foto">
            <img src='aaa.jpg' alt={nombre}/>
            <div className="jugador-redes-sociales">
            <h3>Redes Sociales</h3>
            <ul>
                <li>TWITTER:</li>
                <li>INSTAGRAM:</li>
                <li>LINKEDIN:</li>
            </ul>
            </div>
        </div>
        <div className="jugador-logros">
            <h3>Logros</h3>
            <ul>
                <li>TWITTER:</li>
                <li>INSTAGRAM:</li>
                <li>LINKEDIN:</li>
            </ul>
        </div>
    </div>
  );
};

export default Jugador;

