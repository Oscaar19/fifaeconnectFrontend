import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFreeAgents } from '../thunks';
import { UserContext } from '../../userContext';
import ManagersSettings from '../ManagersSettings';
import ManagerGrid from '../ManagerGrid';

const ManagersFaGrid = () => {
    let {authToken,setAuthToken} = useContext(UserContext)
    const { freeAgents = [], isLoading=true, missatge=""} = useSelector((state) => state.managers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFreeAgents(authToken));    
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="roster-container">
                    <ManagersSettings/>
                    <div className="roster-grid">
                        {freeAgents.length > 0 ? (
                            freeAgents.map((manager) => (
                                <ManagerGrid key={manager.id} manager={manager} />
                            ))
                        ) : (
                            <div className='d-flex justify-content-center'> <h1 className='estilo-h1'>No hi ha cap Manager que sigui Free Agent.</h1></div>
                        )}
                        
                    </div>
                </div> 
            )}
        </>
    )
}

export default ManagersFaGrid