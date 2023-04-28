import React from 'react'
import SettingsMenu from '../layout/SettingsMenu';
import ManagerGrid from './ManagerGrid';

const ManagersGrid = () => {

    const managers = [
        { id: 1, nombre: 'Manager 1', foto: './src/jugadors/aaa.jpg', info: 'Información del manager 1 aquí' },
        { id: 2, nombre: 'Manager 2', foto: './src/jugadors/aaa.jpg', info: 'Información del manager 2 aquí' },
        { id: 3, nombre: 'Manager 3', foto: './src/jugadors/aaa.jpg', info: 'Información del manager 3 aquí' },
        { id: 4, nombre: 'Manager 4', foto: './src/jugadors/aaa.jpg', info: 'Información del manager 3 aquí' },
        { id: 5, nombre: 'Manager 5', foto: './src/jugadors/aaa.jpg', info: 'Información del manager 3 aquí' },
      ];

    return (
        <div className="roster-container">
            <SettingsMenu/>
            <div className="roster-grid">
                {managers.map((manager) => (
                <ManagerGrid key={manager.id} manager={manager} />
                ))}
            </div>
        </div>
    )
}

export default ManagersGrid