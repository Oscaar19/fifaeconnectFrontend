import React, { useContext, useEffect } from 'react';
import JugadorGrid from './JugadorGrid';
import '../App.css';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getJugadors } from './thunks';
import JugadorsSettings from './JugadorsSettings';

function JugadorsGrid() {
  let {authToken,setAuthToken} = useContext(UserContext)
  const { jugadors = [], isLoading=true, missatge=""} = useSelector((state) => state.jugadors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJugadors()); 
  }, []);

  return (
    <>
      { isLoading ? (<div> Carregant ...</div>) : (
        <div className="roster-container">
            <JugadorsSettings/>
            <div className="roster-grid">
              {jugadors.map((jugador) => (
                <JugadorGrid key={jugador.id} jugador={jugador} />
              ))}
            </div>
        </div>
      )}
    </>
   
    
  );
}

export default JugadorsGrid;
