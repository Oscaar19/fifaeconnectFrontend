import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getManager} from './thunks';

const Manager = () => {

    let { authToken, setAuthToken } = useContext(UserContext);
    const { manager, foto, titulacions,xarxes,isLoading=true,golden} = useSelector((state) => state.managers);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getManager(authToken,id));
    }, [])

    return (
        <>
            { isLoading  ? (<div> Carregant dades....</div>) : (
                <div className="roster-page">
                    <h1 className="roster-nombre">{manager.nom} {manager.cognom}</h1>
                    <div className="roster-foto">
                        <img src={"http://equip08.insjoaquimmir.cat/storage/"+ foto.ruta} alt='Foto de perfil'/>
                        <div className="roster-redes-sociales">
                        <h3>Xarxes Socials</h3>
                        <ul>
                            <li><b>TWITTER: </b><a href={xarxes.twitter} target="_blank" rel="noopener noreferrer">{xarxes.twitter}</a></li>
                            <li><b>LINKEDIN: </b><a href={xarxes.linkedin} target="_blank" rel="noopener noreferrer">{xarxes.linkedin}</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="roster-info">
                        <h3>TITULACIONS</h3>
                        <ul>
                            {titulacions.map((titulacio) => (
                                <li key={titulacio.id}>{titulacio.descripcio}. <b>DATA DE FINALITZACIÓ: </b> {titulacio.any_finalitzacio}</li>
                            ))}
                        </ul>
                        
                    </div>

                </div>
            )}
        </>
        
        
    )
}

export default Manager