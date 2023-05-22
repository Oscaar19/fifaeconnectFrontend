import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach, goldenUser, ungoldenUser } from './thunks';
import Swal from 'sweetalert2'


const Coach = () => {

    let { authToken, setAuthToken } = useContext(UserContext);
    const { coach, foto, experiencies,xarxes,isLoading=true,golden} = useSelector((state) => state.coaches);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoach(authToken,id));
    }, [])

    return (
        <>
            { isLoading  ? (<div> Carregant dades....</div>) : (
                <div className="roster-page">
                    <h1 className="roster-nombre">{coach.nom} {coach.cognom}</h1>
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
                        <h3>EXPERIÈNCIES</h3>
                        <ul>
                            {experiencies.map((experiencia) => (
                                <li key={experiencia.id}>{experiencia.descripcio}.</li>
                            ))}
                        </ul>
                        
                    </div>

                    
                    <div className='botones'>
                        {golden ? (<button className='buttons' onClick={() => {dispatch(ungoldenUser(id,authToken));Swal.fire({icon: 'error',title: 'Coach esborrat dels teus Goldens',showConfirmButton: false,timer: 4000})}}><i className="bi bi-star-fill"></i></button>) 
                        : (<button className='buttons' onClick={() =>{dispatch(goldenUser(id,authToken));Swal.fire({icon: 'success',title: 'Coach afegit als teus Goldens',showConfirmButton: false,timer: 4000})}}><i className="bi bi-star"></i></button>)
                        }
                            
                    </div>
                </div>
            )}
        </>
    )
}

export default Coach