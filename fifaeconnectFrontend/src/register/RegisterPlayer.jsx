import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { useFieldArray, useForm } from 'react-hook-form';
import { getClubs } from '../clubs/thunks';
import { addJugador } from '../jugadors/thunks';

const RegisterPlayer = () => {

    let { authToken, setAuthToken,anys, setAnys } = useContext(UserContext);

    const dispatch = useDispatch();

    // let navigate = useNavigate()

    const { register, control, handleSubmit} = useForm({
        defaultValues: {
            twitter: "",
            linkedin: "",
            foto: "",
            fa: "",
            club_id: "",
            assoliments: [{ descripcio: "", any: "" }]
        }
    });

    const {fields,append} = useFieldArray({control,name: "assoliments",rules: { maxLength: 4 }});

    const [esAgenteLibre, setEsAgenteLibre] = useState(false);

    const { clubs = [], isLoading=true} = useSelector((state) => state.clubs);

    const handleFaChange = (event) => {
        setEsAgenteLibre(event.target.value === "1");
    };

    const afegir = data => {
        const data2 = { ...data, foto: data.foto[0]}
        dispatch(addJugador(data2, authToken));
        //navigate(-1)
    };

    useEffect(() => {
        dispatch(getClubs());        
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className='form-container'>
                <form className="register-form">
                    <div className='fa-container'>
                    <label>Busques club d'eSports?</label>
                    <select {...register(`fa`)} onChange={handleFaChange}>
                        <option value="0">No</option>
                        <option value="1">Sí</option>
                    </select>
                    </div>
                    {esAgenteLibre ? null : (
                    <div className='club-container'>
                        <label>Club al que pertanys:</label>
                        <select {...register(`club_id`)}>
                            {clubs.map((club) => (
                                <option key={club.id} value={club.id}>
                                {club.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    )}
                    <h3>Escriu assoliments que hagis aconseguit en competicions de FIFA:</h3>
                    <div className='titulos-container'>
                    {fields.map((item, index) => (
                        <div className='titulacion' key={item.id}>
                            <div className='titulo-container'>
                                <label>Assoliment:</label>
                                <input type="text" {...register(`assoliments.${index}.descripcio`)}/>
                            </div>
                            <div className='años-container'>
                                <label>Any:</label>
                                <select {...register(`assoliments.${index}.any`)}>
                                {anys.map((any) => (
                                    <option key={any} value={any}>
                                        {any}
                                    </option>
                                ))}
                            </select>
                            </div>
                        </div>
                    ))}                       
                    </div> 
                    <div className='xarxes_container'>
                    <div>
                        <h3>Escriu les teves xarxes socials i afegeix una foto teva. </h3>
                    </div>
                    <div >
                        <input className='xarxa' type="text" placeholder="URL TWITTER" {...register("twitter")}/>
                    </div>
                    <br />
                    <div>
                        <input className='xarxa' type="text" placeholder="URL LINKEDIN" {...register("linkedin")}/>
                    </div>
                    <br />
                    <div>
                        <input className='xarxa' type="file" {...register("foto")}/>
                    </div>
                    </div> 
                    <div className='botonsRegistre'>
                        <button className='botoRegistre' type="submit"onClick={(e) => {e.preventDefault();append({ descripcio: "", any: ""})}}>AFEGEIX UNA ENTRADA</button>
                        <button className='botoRegistre' type="submit"onClick={handleSubmit(afegir)}>REGISTRA'M</button>
                    </div>   
                </form>
                </div>
            )}
            </>
    )
}

export default RegisterPlayer