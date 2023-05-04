import React from 'react';
import { useParams } from 'react-router-dom';

const Jugador = () => {
  const { id } = useParams();

  return (
    <div className="roster-page">
        <h1 className="roster-nombre">NOMBRE DEL JUGADOR {id}</h1>
        <div className="roster-foto">
            <img src='/src/jugadors/aaa.jpg' alt='Foto de perfil'/>
            <div className="roster-redes-sociales">
                <h3>Xarxes Socials</h3>
                <ul>
                    <li>TWITTER:</li>
                    <li>EMAIL:</li>
                    <li>LINKEDIN:</li>
                </ul>
            </div>
        </div>
        <div className="roster-info">
            <h3>LOGROS</h3>
            <ul>
                <li>TWITTER:</li>
                <li>INSTAGRAM:</li>
                <li>LINKEDIN:</li>
            </ul>
        </div>
        <div className='botones'>
            <button className='buttons'>
                <i className="bi bi-star"></i>
            </button>
        </div>
    </div>
  );
};

export default Jugador;

