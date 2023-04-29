import React from 'react'

const RegisterPlayer = () => {
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className='nombre-container'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={handleNombreChange}
                    required
                />
            </div>
            

            <div className='apellido-container'>
                <label htmlFor="apellido">Apellido:</label>
                <input
                    id="apellido"
                    type="text"
                    value={apellido}
                    onChange={handleApellidoChange}
                    required
                />
            </div>
            
            <div className='email-container'>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            
            <div className='contraseña-container'>
                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    id="contraseña"
                    type="password"
                    value={contraseña}
                    onChange={handleContraseñaChange}
                    required
                />
            </div>
            

            <div className='confirmacion'></div>
            <label htmlFor="confirmacion-contraseña">Confirmación de contraseña:</label>
            <input
                id="confirmacion-contraseña"
                type="password"
                value={confirmacionContraseña}
                onChange={handleConfirmacionContraseñaChange}
                required
            />

            <label htmlFor="es-agente-libre">¿Es agente libre?</label>
            <select id="es-agente-libre" onChange={handleEsAgenteLibreChange}>
                <option value="no">No</option>
                <option value="si">Sí</option>
            </select>

            {esAgenteLibre ? null : (
                <div>
                <label htmlFor="club">Club:</label>
                <select id="club" value={club} onChange={handleClubChange}>
                    {clubes.map((club) => (
                    <option key={club} value={club}>
                        {club}
                    </option>
                    ))}
                </select>
                </div>
            )}

            <button type="submit">Registrarse</button>
        </form>
    )
}

export default RegisterPlayer