import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const GoldenGrid = ({golden}) => {
    return (
        <Link className="tarjeta-staff" to={"/jugadors/"+golden.id}>
            <div className="staff-grid">
                <img src={golden.foto.ruta} className="user-photo"/>
                <div className="user-info">
                    <h2 className="user-name">{golden.nom}</h2>
                </div>
            </div>
        </Link>
    )
}

export default GoldenGrid