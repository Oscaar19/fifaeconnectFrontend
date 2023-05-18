import React, { useContext, useEffect } from 'react'
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getGoldens } from './thunks';
import GoldenGrid from './GoldenGrid';

const GoldensGrid = () => {
    let {authToken,setAuthToken} = useContext(UserContext)
    const { goldens = [], isLoading=true, missatge=""} = useSelector((state) => state.goldens);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGoldens(authToken)); 
    }, []);
    return (
        <>
            { isLoading ? (<div> Carregant ...</div>) : (
                <div className="roster-container">
                    <div className="roster-grid">
                        {goldens.map((golden) => (
                            <GoldenGrid key={golden.id} golden={golden}/>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default GoldensGrid