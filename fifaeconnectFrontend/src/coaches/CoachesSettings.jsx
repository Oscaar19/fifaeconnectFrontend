import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const CoachesSettings = () => {
    return (
        <div className="settings-menu">
            <Link to={"/goldens"}><i className="bi bi-star-fill"></i></Link>
            <div className="dropdown">
                <button className="buttons"><i className="bi bi-filter"></i></button>
                <div className="dropdown-content">
                    <Link className='faOption' to={"/coaches/freeagents"}>Mira els coaches FA</Link>            
                </div>
            </div>
        </div>
    )
}

export default CoachesSettings