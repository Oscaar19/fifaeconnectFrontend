import React from 'react'
import { Link } from 'react-router-dom'

const ManagerGrid = ({manager}) => {
    return (
        <Link className="tarjeta-staff" to={"/managers/"+manager.id}>
            <div className="staff-grid">
                <img src={"http://equip08.insjoaquimmir.cat/storage/"+manager.foto.ruta} className="user-photo"/>
                <div className="user-info">
                    <h2 className="user-name">{manager.nom}</h2>
                </div>
            </div>
        </Link>
    )
}

export default ManagerGrid