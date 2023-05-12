import React, { useContext, useState } from 'react'
import { UserContext } from '../userContext';
import { useDispatch } from 'react-redux';
import { useFieldArray, useForm } from 'react-hook-form';

const RegisterPlayer = () => {

    let { authToken, setAuthToken } = useContext(UserContext);

    const dispatch = useDispatch();

    // let navigate = useNavigate()

    const { register, control, handleSubmit} = useForm({
        defaultValues: {
          twitter: "",
          linkedin: "",
          titulos: [{ descripcio: "", any_finalitzacio: "" }]
        }
    });

    const {fields,append} = useFieldArray({control,name: "titulos",rules: { maxLength: 4 }});

    let { anys, setAnys } = useContext(UserContext);
    const [esAgenteLibre, setEsAgenteLibre] = useState(false);
    const [club, setClub] = useState("");
    const [anyInici, setAnyInici] = useState("");
    const [anyFinal, setAnyFinal] = useState("");
    const [trajectories, setTrajectories] = useState([{ club: "", anyInici: "", anyFinal: "" }]);

    const clubes = ["Real Madrid", "Barcelona", "Atlético de Madrid", "Valencia"];

    const handleEsAgenteLibreChange = (event) => {
        setEsAgenteLibre(event.target.value === "si");
    };

    const handleClubChange = (event) => {
        setClub(event.target.value);
    };

    const handleAfegirTrajectoria = () => {
        setTrajectories([...trajectories, { club: "", anyInici: "", anyFinal: "" }]);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const novaLlistaTrajectoria = [...trajectories];
        novaLlistaTrajectoria[index][name] = value;
        setTrajectories(novaLlistaTrajectoria);
    };

    return (
        <>
            <div className='form-container'>
                <form className="register-form">
                <div className='fa-container'>
                    <label htmlFor="es-agente-libre">Busques club d'eSports?</label>
                    <select id="es-agente-libre" onChange={handleEsAgenteLibreChange}>
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                    </select>
                </div>           

                {esAgenteLibre ? null : (
                    <div className='club-container'>
                        <label htmlFor="club">Club al que pertanys:</label>
                        <select id="club" value={club} onChange={handleClubChange}>
                            {clubes.map((club) => (
                            <option key={club} value={club}>
                                {club}
                            </option>
                            ))}
                        </select>
                    </div>
                )}

                <h3>Registra entre 1 y 4 clubs on has estat:</h3>
                    {trajectories.map((trajectoria, index) => (
                        <div className='trajectoria' key={index}>
                            <label htmlFor="club">Club on vas estar:</label>
                            <select id="club" value={trajectoria.club} onChange={(e) => handleInputChange(e, index)}>
                                {clubes.map((club) => (
                                <option key={club} value={club}>
                                    {club}
                                </option>
                                ))}
                            </select>
                            <label htmlFor="anyInici">Any d'inici:</label>
                            <select id="anyInici" value={trajectoria.anyInici} onChange={(e) => handleInputChange(e, index)}>
                                {anys.map((any) => (
                                <option key={any} value={any}>
                                    {any}
                                </option>
                                ))}
                            </select>
                            <label htmlFor="anyFinal">Any de sortida:</label>
                            <select id="anyFinal" value={trajectoria.anyFinal} onChange={(e) => handleInputChange(e, index)}>
                                {anys.map((any) => (
                                <option key={any} value={any}>
                                    {any}
                                </option>
                                ))}
                            </select>
                        </div>
                    ))}

                <div className='botonsRegistre'>
                    <button className='botoRegistre' type="submit">REGISTRA'T COM A NOU JUGADOR</button>
                    <button className='botoRegistre' type="button" onClick={handleAfegirTrajectoria}>AFEGIR ENTRADA</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default RegisterPlayer