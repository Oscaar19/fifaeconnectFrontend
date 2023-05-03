import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const RegisterManager = () => {

    //const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [titulaciones, setTitulaciones] = useState([{ titulo: "", anio: "" }]);

    const handleAgregarTitulacion = () => {
        setTitulaciones([...titulaciones, { titulo: "", anio: "" }]);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const nuevaListaTitulaciones = [...titulaciones];
        nuevaListaTitulaciones[index][name] = value;
        setTitulaciones(nuevaListaTitulaciones);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titulaciones);
    };


    return (

        <>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className='info-container'>
                    <h3>Afegeix les teves titulacions/cursos finalitzats aqui sota i registra't com a manager.</h3>
                </div>
                
                <div className='titulos-container'>
                    {titulaciones.map((titulacion, index) => (
                        <div className='titulacion' key={index}>
                            <div className='titulo-container'>
                                <label htmlFor={`titulo-${index}`}>Títol/Curs:</label>
                                <input
                                    type="text"
                                    id={`titulo-${index}`}
                                    name="titulo"
                                    value={titulacion.titulo}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>

                            <div className='años-container'>
                                <label htmlFor={`anio-${index}`}>Any finalització:</label>
                                <input
                                    type="text"
                                    id={`anio-${index}`}
                                    name="anio"
                                    value={titulacion.anio}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>            
            </form>

            <div className='botonsRegistre'>
                <button className='botoRegistre' type="button" onClick={handleAgregarTitulacion}>
                    AFEGIR TITULACIÓ
                </button>

                <button className='botoRegistre' type="submit">REGISTRA'M COM A MANAGER</button>
            </div>
        </>
        

    )
}

export default RegisterManager