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
                <a href="/registermanager"><button className='botoRegistre'>Actualitza el meu perfil</button></a>
                <a href="/registerplayer"><button className='botoRegistre'>Registra'm com a jugador</button></a>
                <a href="/registercoach"><button className='botoRegistre'>Registra'm com a coach</button></a>
                <a href="/registermanager"><button className='botoRegistre'>Registra'm com a manager</button></a>
            </div>
        </div>
    )
}

export default Profile