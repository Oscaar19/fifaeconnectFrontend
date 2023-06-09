import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFreeAgents } from '../thunks';
import JugadorGrid from '../JugadorGrid';
import { UserContext } from '../../userContext';
import JugadorsSettings from '../JugadorsSettings';

const JugadorsFaGrid = () => {
    let {authToken,setAuthToken} = useContext(UserContext)
    const { freeAgents = [], isLoading=true, missatge=""} = useSelector((state) => state.jugadors);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFreeAgents(authToken));    
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="roster-container">
                    <JugadorsSettings/>
                    <div className="roster-grid">
                        {freeAgents.length > 0 ? (
                            freeAgents.map((jugador) => (
                                <JugadorGrid key={jugador.id} jugador={jugador} />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center'> <h1 className='estilo-h1'>No hi ha cap Jugador que sigui Free Agent.</h1></div>
                        )}
                    </div>
                </div> 
            )}
        </>
    )
}

export default JugadorsFaGrid