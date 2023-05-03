import React from 'react'

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
                <button className='botoRegistre'><a href="/registermanager">Actualitza el meu perfil</a></button>
                <button className='botoRegistre'><a href="/registerplayer">Registra'm com a jugador</a></button>
                <button className='botoRegistre'><a href="/registermanager">Registra'm com a coach</a></button>
                <button className='botoRegistre'><a href="/registermanager">Registra'm com a manager</a></button>
            </div>
        </div>
    )
}

export default Profile