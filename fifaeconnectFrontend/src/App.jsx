import { useEffect, useState } from 'react'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import Header from './layout/Header'
import { UserContext } from "./userContext";

import JugadorsGrid from './jugadors/JugadorsGrid'
import Jugador from './jugadors/Jugador'

import { Routes, Route } from "react-router-dom";


import ClubsGrid from './clubs/ClubsGrid'
import Club from './clubs/Club'

import CoachesGrid from './coaches/CoachesGrid'
import Coach from './coaches/Coach'
import ManagersGrid from './managers/ManagersGrid'
import Manager from './managers/Manager'
import RegisterManager from './register/RegisterManager'
import RegisterPlayer from './register/RegisterPlayer'
import RegisterCoach from './register/RegisterCoach';
import RegisterClub from './register/RegisterClub';
import GoldensGrid from './goldens/GoldensGrid';
import JugadorsFaGrid from './jugadors/fa/JugadorsFaGrid';
import CoachesFaGrid from './coaches/fa/CoachesFaGrid';
import ManagersFaGrid from './managers/fa/ManagersFaGrid';

function App() {

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  const [anys, setAnys] = useState([]);

  useEffect(() => {
    const anyActual = new Date().getFullYear();
    const anysArray = Array.from(
      { length: anyActual - 2000 + 1 },
      (_, i) => 2000 + i
    );
    setAnys(anysArray);
  }, []);

  return (

    <UserContext.Provider value= {{ anys, setAnys,authToken, setAuthToken,usuari, setUsuari }}>
      {authToken ? (
        <>
          <Routes>
            <Route path="/" element={<><Header/><JugadorsGrid /></>}/>
            <Route path="/jugadors" element={<><Header/><JugadorsGrid /></>}/>
            <Route path="/jugadors/:id" element={ <Jugador/> } />
            <Route path="/clubs" element={<><Header/><ClubsGrid /></>}/>
            <Route path="/clubs/:id" element={ <Club/> } />
            <Route path="/coaches" element={<><Header/><CoachesGrid /></>}/>
            <Route path="/coaches/:id" element={ <Coach/> } />
            <Route path="/managers" element={<><Header/><ManagersGrid /></>}/>
            <Route path="/managers/:id" element={ <Manager/> } />
            <Route path="/registermanager" element={<><Header/><RegisterManager/></>}/>
            <Route path="/registerplayer" element={<><Header/><RegisterPlayer/></>}/>
            <Route path="/registercoach" element={<><Header/><RegisterCoach/></>}/>
            <Route path="/jugadors/freeagents" element={<><Header/><JugadorsFaGrid/></>}/>
            <Route path="/coaches/freeagents" element={<><Header/><CoachesFaGrid/></>}/>
            <Route path="/managers/freeagents" element={<><Header/><ManagersFaGrid/></>}/>
            <Route path="/registerclub" element={<><Header/><RegisterClub/></>}/>
            <Route path="/goldens" element={<><Header/><GoldensGrid/></>}/>
          </Routes>
        </> 
      ) : (
        <LoginRegister />
      )}      
    </UserContext.Provider>
      
    
  )
}

export default App
