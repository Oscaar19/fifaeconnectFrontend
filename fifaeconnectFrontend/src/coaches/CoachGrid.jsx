import React from 'react'
import { Link } from 'react-router-dom'

const CoachGrid = ({coach}) => {
    return (
        <Link className="tarjeta-staff" to={"/coaches/"+coach.id}>
            <div className="staff-grid">
                <img src={"http://127.0.0.1:8000/storage/"+coach.foto.ruta} className="user-photo"/>
                <div className="user-info">
                    <h2 className="user-name">{coach.nom}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CoachGrid