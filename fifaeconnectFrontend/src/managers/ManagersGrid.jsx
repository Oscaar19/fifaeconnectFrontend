import React, { useContext, useEffect } from 'react'
import ManagerGrid from './ManagerGrid';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../userContext';
import { getManagers } from './thunks';
import ManagersSettings from './ManagersSettings';

const ManagersGrid = () => {

    let {authToken,setAuthToken} = useContext(UserContext)
    const { managers = [], isLoading=true, missatge=""} = useSelector((state) => state.managers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getManagers(authToken)); 
    }, []);

    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : ( 
                <div className="roster-container">
                    <ManagersSettings/>
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