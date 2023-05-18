import React, { useContext, useEffect } from 'react';
import ClubGrid from './ClubGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getClubs } from './thunks';

const ClubsGrid = () => {

    const { clubs = [], isLoading=true, missatge=""} = useSelector((state) => state.clubs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClubs());        
    }, []);
      
    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="clubs-grid">
                    {clubs.map((club) => (
                        <ClubGrid key={club.id} club={club} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ClubsGrid;
