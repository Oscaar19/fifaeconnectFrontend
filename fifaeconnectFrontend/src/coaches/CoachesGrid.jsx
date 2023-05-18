import React, { useContext, useEffect } from 'react'
import CoachGrid from './CoachGrid';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCoaches } from './thunks';
import CoachesSettings from './CoachesSettings';

const CoachesGrid = () => {

    let {authToken,setAuthToken} = useContext(UserContext)
    const { coaches = [], isLoading=true, missatge=""} = useSelector((state) => state.coaches);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoaches()); 
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : (
                <div className="roster-container">
                    <CoachesSettings/>
                    <div className="roster-grid">
                        {coaches.map((coach) => (
                            <CoachGrid key={coach.id} coach={coach} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default CoachesGrid