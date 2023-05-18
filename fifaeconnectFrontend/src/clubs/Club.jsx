import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getClub } from './thunks';

const Club = () => {

  const { club, manager, jugadors,coaches,isLoading=true} = useSelector((state) => state.clubs);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClub(id));
  }, [])

  return (
    <>
      { isLoading  ? (<div> Carregant dades....</div>) : (
        <div className="club">
          <div className="club-header">
            <img className="logo-club" src={"http://127.0.0.1:8000/storage/"+club.foto.ruta}/>
            <h1 className="name-club">{club.nom}</h1>
          </div>
          <div className="club-content">
            <h2>ROSTER</h2>
            <ul className="club-roster">
              <li className='lista-roster'>
                <h3>Jugadors</h3>
                <ul>
                  {club.jugadors.length > 0 ? (
                    club.jugadors.map((jugador) => (
                      <Link className="link-jugadores" to={"/jugadors/"+jugador.id}>
                        <li key={jugador.id}>{jugador.name}</li>
                      </Link>
                    ))
                  ) : (
                    <div className='d-flex justify-content-center'> <h5>No hi ha cap Jugador.</h5></div>
                  )}
                  
                </ul>
              </li>
              <li className='lista-roster'>
                <h3>Entrenadors</h3>
                <ul>
                  {club.coaches.length > 0 ? (
                    club.coaches.map((coach) => (
                      <Link className="link-jugadores" to={"/coaches/"+coach.id}>
                        <li key={coach.id}>{coach.name}</li>
                      </Link>                
                    ))
                  ) : (
                    <div className='d-flex justify-content-center'> <h5>No hi ha cap Coach.</h5></div>
                  )}
                  
                </ul>
              </li>
              <li className='lista-roster'>
                <h3>Staff</h3>
                <ul>
                    <Link className="link-jugadores" to={"/managers/"+club.manager.id}>
                      <li>{club.manager.nom}</li>
                    </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
    
  );
};

export default Club;
