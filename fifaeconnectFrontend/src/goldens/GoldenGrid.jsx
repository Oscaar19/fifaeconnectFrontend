import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const GoldenGrid = ({golden}) => {
    let contingut;

    if (golden.roles[0].name === 'jugador') {
        contingut = <Link className="tarjeta-staff" to={"/jugadors/"+golden.id}>
                        <div className="staff-grid">
                            <img src={"http://equip08.insjoaquimmir.cat/storage/"+golden.foto.ruta} className="user-photo"/>
                            <div className="user-info">
                                <h2 className="user-name">{golden.nom}</h2>
                            </div>
                        </div>
                    </Link>;
    } else if (golden.roles[0].name === 'coach') {
        contingut = <Link className="tarjeta-staff" to={"/coaches/"+golden.id}>
                        <div className="staff-grid">
                            <img src={"http://equip08.insjoaquimmir.cat/storage/"+golden.foto.ruta} className="user-photo"/>
                            <div className="user-info">
                                <h2 className="user-name">{golden.nom}</h2>
                            </div>
                        </div>
                    </Link>
    }

    return (
        contingut
    )
}

export default GoldenGrid