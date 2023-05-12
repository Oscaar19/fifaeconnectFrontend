import React, { useContext, useEffect } from 'react'
import SettingsMenu from '../layout/SettingsMenu';
import ManagerGrid from './ManagerGrid';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../userContext';
import { getManagers } from './thunks';

const ManagersGrid = () => {

    let {authToken,setAuthToken} = useContext(UserContext)
    const { managers = [], page=0, isLoading=true, missatge=""} = useSelector((state) => state.managers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getManagers(authToken));        
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="roster-container">
                    <SettingsMenu/>
                    <div className="roster-grid">
                        {managers.map((manager) => (
                            <ManagerGrid key={manager.id} manager={manager} />
                        ))}
                    </div>
                </div> 
            )}
        </>
        
        
    )
}

export default ManagersGrid