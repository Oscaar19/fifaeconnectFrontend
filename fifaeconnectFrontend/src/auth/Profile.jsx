import React from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="roster-page">
            <h1 className="roster-nombre">EL MEU NOM</h1>
            <div className="roster-foto">
                <img src='/src/jugadors/aaa.jpg' alt='Foto de perfil'/>
                <div className="roster-redes-sociales">
                <h3>Xarxes Socials</h3>
                <ul>
                    <li>TWITTER:</li>
                    <li>EMAIL:</li>
                    <li>LINKEDIN:</li>
                </ul>
                </div>
            </div>
            <div className="roster-info">
                <h3>EXPERIÈNCIA</h3>
                <ul>
                    <li>TWITTER:</li>
                    <li>INSTAGRAM:</li>
                    <li>LINKEDIN:</li>
                </ul>
            </div>
            <div className='botones'>
                <Link className='botoRegistre' to={"/registermanager"}>Actualitza el meu perfil</Link>
                <Link className='botoRegistre' to={"/registerplayer"}>Registra'm com a jugador</Link>
                <Link className='botoRegistre' to={"/registercoach"}>Registra'm com a coach</Link>
                <Link className='botoRegistre' to={"/registermanager"}>Registra'm com a manager</Link>
            </div>
        </div>
    )
}

export default Profile