import React from 'react';
import ClubGrid from './ClubGrid';

const ClubsGrid = () => {

    const clubs = [
        { id: 1, name: 'Club AAAA', logo: './src/jugadors/aaa.jpg' },
        { id: 2, name: 'Club B', logo: './src/jugadors/aaa.jpg' },
        { id: 3, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
        { id: 4, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
        { id: 5, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
        { id: 6, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
        { id: 7, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
        { id: 8, name: 'Club C', logo: './src/jugadors/aaa.jpg' },
    ];
      
    return (
        <div className="clubs-grid">
            {clubs.map((club) => (
                <ClubGrid key={club.id} club={club} />
            ))}
        </div>
    );
};

export default ClubsGrid;
