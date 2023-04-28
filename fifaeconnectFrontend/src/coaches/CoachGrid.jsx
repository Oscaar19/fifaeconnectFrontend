import React from 'react'
import { Link } from 'react-router-dom'

const CoachGrid = ({coach}) => {
    return (
        <Link className="tarjeta-staff" to={"/coaches/"+coach.id}>
            <div className="staff-grid">
                <img src={coach.foto} className="user-photo"/>
                <div className="user-info">
                <h2 className="user-name">{coach.nombre}</h2>
                <p className="user-club">Club donde Juega</p>
                </div>
            </div>
        </Link>
    )
}

export default CoachGrid