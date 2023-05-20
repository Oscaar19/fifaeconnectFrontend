import React, { useContext } from 'react'
import { UserContext } from '../userContext';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addClub } from '../clubs/thunks';
import { useNavigate } from 'react-router-dom';

const RegisterClub = () => {
    let { authToken, setAuthToken } = useContext(UserContext);

    const dispatch = useDispatch();

    let navigate = useNavigate()

    const { register, control, handleSubmit,formState: { errors }} = useForm({
        defaultValues: {
          nom: "",
          foto: "",
        }
    });

    const afegir = data => {
        const data2 = { ...data, foto: data.foto[0]}
        dispatch(addClub(data2, authToken));
        navigate("/clubs");
    };

    return (
        <>
            <div className='club-form-container'>
                <form className="club-register-form">
                    <div className='info-container'>
                        <h3>Afegeix el nom del club que representes i una foto del seu logo. </h3>
                    </div>
                      

                    <div className='club-info-container'>
                        <input type="text" {...register("nom",{
                                        required: "Aquest camp és obligatori",
                                        maxLength: {value: 15,message: "Introdueix un nom mes curt."},
                                      })} placeholder='NOM DEL CLUB' />
                        {errors.nom && <p>{errors.nom.message}</p>}
                        <input type="file" {...register("foto",{
                                        required: "Aquest camp és obligatori",
                                      })}/>
                        {errors.foto && <p>{errors.foto.message}</p>}
                    </div>     
                    
                    <div className='botonsRegistre'>
                        <button className='botoRegistre' type="submit"onClick={handleSubmit(afegir)}>REGISTRA AQUEST CLUB</button>
                    </div>   
                </form>
            </div>
        </>
    )
}

export default RegisterClub