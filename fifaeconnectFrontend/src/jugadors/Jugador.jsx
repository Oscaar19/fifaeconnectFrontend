import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { getJugador, goldenUser, ungoldenUser } from './thunks';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

const Jugador = () => {
    let { authToken, setAuthToken } = useContext(UserContext);
    const { jugador, foto, assoliments,xarxes,isLoading=true,golden} = useSelector((state) => state.jugadors);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJugador(authToken,id));
    }, [])

  return (
    <>
            { isLoading  ? (<div> Carregant dades....</div>) : (
                <div className="roster-page">
                    <h1 className="roster-nombre">{jugador.nom} {jugador.cognom}</h1>
                    <div className="roster-foto">
                        <img src={"http://127.0.0.1:8000/storage/"+foto.ruta} alt='Foto de perfil'/>
                        <div className="roster-redes-sociales">
                            <h3>Xarxes Socials</h3>
                            <ul>
                                <li><b>TWITTER: </b> <a href={xarxes.twitter} target="_blank" rel="noopener noreferrer">{xarxes.twitter}</a></li>
                                <li><b>LINKEDIN:</b> <a href={xarxes.linkedin} target="_blank" rel="noopener noreferrer">{xarxes.linkedin}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="roster-info">
                        <h3>ASSOLIMENTS</h3>
                        <ul>
                            {assoliments.map((assoliment) => (
                                <li key={assoliment.id}>{assoliment.descripcio}. <b>ANY: </b> {assoliment.any}</li>
                            ))}
                        </ul>
                        
                    </div>

                    
                    <div className='botones'>
                        {golden ? (<button className='buttons' onClick={() => {dispatch(ungoldenUser(id,authToken));Swal.fire({icon: 'error',title: 'Jugador esborrat dels teus Goldens',showConfirmButton: false,timer: 4000})}}><i className="bi bi-star-fill"></i></button>) 
                        : (<button className='buttons' onClick={() =>{dispatch(goldenUser(id,authToken));Swal.fire({icon: 'success',title: 'Jugador afegit als teus Goldens',showConfirmButton: false,timer: 4000})}}><i className="bi bi-star"></i></button>)
                        }
                            
                    </div>
                </div>
            )}
        </>
  );
};

export default Jugador;

