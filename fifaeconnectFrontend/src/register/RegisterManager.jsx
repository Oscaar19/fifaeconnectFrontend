import React, { useContext, useState } from 'react'
import { useForm,useFieldArray } from "react-hook-form"
import { UserContext } from '../userContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addManager } from '../managers/thunks';

const RegisterManager = () => {

    let { authToken, setAuthToken } = useContext(UserContext);

    const dispatch = useDispatch();

    // let navigate = useNavigate()

    const { register, control, handleSubmit} = useForm({
        defaultValues: {
          twitter: "",
          linkedin: "",
          foto: "",
          titulacions: [{ descripcio: "", any_finalitzacio: "" }]
        }
    });

    const afegir = data => {
        console.log(data);
        const data2 = { ...data, foto: data.foto[0]}
        dispatch(addManager(data2, authToken));
        //navigate(-1)
    };

    const {fields,append} = useFieldArray({control,name: "titulacions",rules: { maxLength: 4 }});

    

    return (

        <>
            <div className='form-container'>
                <form className="register-form">
                    <div className='info-container'>
                        <h3>Afegeix com a màxim 4 de les teves titulacions/cursos finalitzats aqui sota i registra't com a manager. </h3>
                    </div>
                    
                    <div className='titulos-container'>
                        {fields.map((item, index) => (
                            <div className='titulacion' key={item.id}>
                                <div className='titulo-container'>
                                    <label>Títol/Curs:</label>
                                    <input type="text" {...register(`titulacions.${index}.descripcio`)}/>
                                </div>
                                <div className='años-container'>
                                    <label>Any finalització:</label>
                                    <input type="text" {...register(`titulacions.${index}.any_finalitzacio`)}/>
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
                        <button className='botoRegistre' type="submit"onClick={(e) => {e.preventDefault();append({ descripcio: "", any_finalitzacio: "" })}}>AFEGEIX UNA ENTRADA</button>
                        <button className='botoRegistre' type="submit"onClick={handleSubmit(afegir)}>REGISTRA'M</button>
                    </div>   
                </form>
            </div>
        </>
        

    )
}

export default RegisterManager