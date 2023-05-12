import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getManager } from './thunks';

const Manager = () => {

    let { authToken, setAuthToken } = useContext(UserContext);
    const { manager, isLoading=true} = useSelector((state) => state.managers);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getManager(authToken,id));
    }, [])

    return (
        <>
            { isLoading  ? (<div> Carregant dades....</div>) : (
                <div className="roster-page">
                    <h1 className="roster-nombre">{manager.nom}</h1>
                    <div className="roster-foto">
                        <img src='/src/jugadors/aaa.jpg' alt='Foto de perfil'/>
                        <div className="roster-redes-sociales">
                        <h3>Xarxes Socials</h3>
                        <ul>
                            <li>TWITTER:</li>
                            <li>INSTAGRAM:</li>
                            <li>LINKEDIN:</li>
                        </ul>
                        </div>
                    </div>
                    <div className="roster-info">
                        <h3>ASSOLIMENTS</h3>
                        <ul>
                            <li>TWITTER:</li>
                            <li>EMAIL:</li>
                            <li>LINKEDIN:</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
        
        
    )
}

export default Manager