import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const RegisterManager = () => {

    //const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [titulaciones, setTitulaciones] = useState([{ titulo: "", any: "" }]);

    const handleAgregarTitulacion = () => {
        setTitulaciones([...titulaciones, { titulo: "", any: "" }]);
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
                    <h3>Afegeix com a màxim 4 de les teves titulacions/cursos finalitzats aqui sota i registra't com a manager. </h3>
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
                                <label htmlFor={`any-${index}`}>Any finalització:</label>
                                <input
                                    type="text"
                                    id={`any-${index}`}
                                    name="any"
                                    value={titulacion.any}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>
                        </div>
                    ))}
                </div>         
                
                <div className='botonsRegistre'>
                    <button className='botoRegistre' type="button" onClick={handleAgregarTitulacion}>
                        AFEGIR ENTRADA
                    </button>

                    <button className='botoRegistre' type="submit">REGISTRA'M COM A MANAGER</button>
                </div>   
            </form>

        </>
        

    )
}

export default RegisterManager