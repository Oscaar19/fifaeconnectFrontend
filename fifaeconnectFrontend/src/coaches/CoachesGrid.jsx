import React from 'react'
import SettingsMenu from '../layout/SettingsMenu';
import CoachGrid from './CoachGrid';

const CoachesGrid = () => {

    const coaches = [
        { id: 1, nombre: 'Coach 1', foto: './src/jugadors/aaa.jpg', info: 'Información del coach 1 aquí' },
        { id: 2, nombre: 'Coach 2', foto: './src/jugadors/aaa.jpg', info: 'Información del coach 2 aquí' },
        { id: 3, nombre: 'Coach 3', foto: './src/jugadors/aaa.jpg', info: 'Información del coach 3 aquí' },
        { id: 4, nombre: 'Coach 3', foto: './src/jugadors/aaa.jpg', info: 'Información del coach 3 aquí' },
        { id: 5, nombre: 'Coach 3', foto: './src/jugadors/aaa.jpg', info: 'Información del coach 3 aquí' },
    ];

    return (
        <div className="roster-container">
            <SettingsMenu/>
            <div className="roster-grid">
                {coaches.map((coach) => (
                <CoachGrid key={coach.id} coach={coach} />
                ))}
            </div>
        </div>
    )
}

export default CoachesGrid