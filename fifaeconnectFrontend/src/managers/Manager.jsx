import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getManager, goldenUser, ungoldenUser } from './thunks';
import Swal from 'sweetalert2'

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
                        <img src={"http://127.0.0.1:8000/storage/"+ foto.ruta} alt='Foto de perfil'/>
                        <div className="roster-redes-sociales">
                        <h3>Xarxes Socials</h3>
                        <ul>
                            <li><b>TWITTER:</b>  {xarxes.twitter}</li>
                            <li><b>LINKEDIN:</b> {xarxes.linkedin}</li>
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
                    <div className='botones'>
                        {!golden ? (<button className='buttons' onClick={(dispatch(ungoldenUser(id,authToken)))}><i className="bi bi-star-fill"></i></button>) 
                        : (<button className='buttons' onClick={(dispatch(goldenUser(id,authToken)))}><i className="bi bi-star"></i></button>)}
                            
                    </div>
                </div>
            )}
        </>
        
        
    )
}

export default Manager