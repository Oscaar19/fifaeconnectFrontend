import React from 'react'
import { Link } from 'react-router-dom'

const ManagerGrid = ({manager}) => {
    return (
        <Link className="tarjeta-staff" to={"/managers/"+manager.id}>
            <div className="staff-grid">
                <img src={manager.foto_id} className="user-photo"/>
                <div className="user-info">
                    <h2 className="user-name">{manager.nom}</h2>
                    <p className="user-club">{manager.club_id}</p>
                </div>
            </div>
        </Link>
    )
}

export default ManagerGrid