import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFreeAgents } from '../thunks';
import { UserContext } from '../../userContext';
import CoachGrid from '../CoachGrid';
import CoachesSettings from '../CoachesSettings';

const CoachesFaGrid = () => {
    let {authToken,setAuthToken} = useContext(UserContext)
    const { freeAgents = [], isLoading=true, missatge=""} = useSelector((state) => state.coaches);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFreeAgents(authToken));    
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="roster-container">
                    <CoachesSettings/>
                    <div className="roster-grid">
                        {freeAgents.length > 0 ? (
                            freeAgents.map((coach) => (
                                <CoachGrid key={coach.id} coach={coach} />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center'> <h1 className='estilo-h1'>No hi ha cap Coach que sigui Free Agent.</h1></div>
                        )}
                        
                    </div>
                </div> 
            )}
        </>
    )
}

export default CoachesFaGrid