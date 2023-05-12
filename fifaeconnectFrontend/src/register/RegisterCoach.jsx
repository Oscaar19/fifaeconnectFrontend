import React, { useContext, useState } from 'react'
import { UserContext } from '../userContext';
import { useDispatch } from 'react-redux';
import { useFieldArray, useForm } from 'react-hook-form';

const RegisterCoach = () => {

  let { authToken, setAuthToken } = useContext(UserContext);

  const dispatch = useDispatch();

  // let navigate = useNavigate()

  const { register, control, handleSubmit} = useForm({
      defaultValues: {
        fa: "",
        club_actual: "",
        experiencies: [{ descripcio: ""}]
      }
  });

  const {fields,append} = useFieldArray({control,name: "experiencies",rules: { maxLength: 4 }});

  const afegir = data => {
    console.log(data)
    //navigate(-1)
  };

  const [esAgenteLibre, setEsAgenteLibre] = useState(false);


  const clubes = ["Real Madrid", "Barcelona", "Atlético de Madrid", "Valencia"];

  const handleFaChange = (event) => {
    setEsAgenteLibre(event.target.value === "1");
  };

  return (
    <>
      <div className='form-container'>
        <form className="register-roster">
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
              <select {...register(`club_actual`)}>
                {clubes.map((club) => (
                  <option key={club} value={club}>
                    {club}
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
          <div className='botonsRegistre'>
            <button className='botoRegistre' type="submit"onClick={(e) => {e.preventDefault();append({ descripcio: ""})}}>AFEGEIX UNA ENTRADA</button>
            <button className='botoRegistre' type="submit"onClick={handleSubmit(afegir)}>REGISTRA'M COM A COACH</button>
          </div>   
        </form>
      </div>
    </>
  )
}

export default RegisterCoach