import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { useFieldArray, useForm } from 'react-hook-form';
import { addCoach } from '../coaches/thunks';
import { getClubs } from '../clubs/thunks';
import { useNavigate } from 'react-router-dom';

const RegisterCoach = () => {

  let { authToken, setAuthToken } = useContext(UserContext);

  const dispatch = useDispatch();

  let navigate = useNavigate()

  const { register, control, handleSubmit,formState: { errors }} = useForm({
      defaultValues: {
        twitter: "",
        linkedin: "",
        foto: "",
        fa: "",
        club_id: "",
        experiencies: [{ descripcio: ""}]
      }
  });

  const {fields,append} = useFieldArray({control,name: "experiencies",rules: { maxLength: 4 }});

  const afegir = data => {
    const data2 = { ...data, foto: data.foto[0]}
    dispatch(addCoach(data2, authToken));
    navigate("/coaches");
  };

  const [esAgenteLibre, setEsAgenteLibre] = useState(false);


  const { clubs = [], isLoading=true} = useSelector((state) => state.clubs);

  const handleFaChange = (event) => {
    setEsAgenteLibre(event.target.value === "1");
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
            <h3>Escriu com a màxim 3 experiencies a clubs que hagis tingut:</h3>
            <div className='titulos-container'>
              {fields.map((item, index) => (
                <div className='titulacion' key={item.id}>
                  <div className='titulo-container'>
                    <label>Experiència:</label>
                    <input type="text" {...register(`experiencies.${index}.descripcio`)}/>
                  </div>
                </div>
              ))}                       
            </div> 
            <div className='xarxes_container'>
              <div>
                <h3>Escriu les teves xarxes socials i afegeix una foto teva. </h3>
              </div>
              <div >
                <input className='xarxa' type="text" placeholder="URL TWITTER" {...register("twitter",{
                                        required: "Aquest camp és obligatori",
                                        pattern:{value:/^(https?:\/\/)?(www\.)?twitter\.com\/([a-zA-Z0-9_]){1,15}\/?$/,message: "Introdueix una url de twitter vàlida."}
                                      })}/>
                {errors.twitter && <p>{errors.twitter.message}</p>}
              </div>
              <br />
              <div>
                <input className='xarxa' type="text" placeholder="URL LINKEDIN" {...register("linkedin",{
                                        required: "Aquest camp és obligatori",
                                        pattern:{value:/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/([a-zA-Z0-9_-]){1,30}\/?$/,message: "Introdueix una url de linkedin vàlida."}
                                      })}/>
                {errors.linkedin && <p>{errors.linkedin.message}</p>}
              </div>
              <br />
              <div>
                <input className='xarxa' type="file" {...register("foto",{
                                        required: "Aquest camp és obligatori",
                                      })}/>
                {errors.foto && <p>{errors.foto.message}</p>}
              </div>
            </div> 
            <div className='botonsRegistre'>
              <button className='botoRegistre' type="submit"onClick={(e) => {e.preventDefault();append({ descripcio: ""})}}>AFEGEIX UNA ENTRADA</button>
              <button className='botoRegistre' type="submit"onClick={handleSubmit(afegir)}>REGISTRA'M</button>
            </div>   
          </form>
        </div>
      )}
    </>
  )
}

export default RegisterCoach