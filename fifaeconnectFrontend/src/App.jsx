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
import Profile from './auth/Profile'
import RegisterManager from './register/RegisterManager'
import RegisterPlayer from './register/RegisterPlayer'
import RegisterCoach from './register/RegisterCoach';

function App() {

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

    <UserContext.Provider value= {{ anys, setAnys }}>
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
          <Route path="/elmeuperfil" element={<Profile/>}/>
          <Route path="/registermanager" element={<><Header/><RegisterManager/></>}/>
          <Route path="/registerplayer" element={<><Header/><RegisterPlayer/></>}/>
          <Route path="/registercoach" element={<><Header/><RegisterCoach/></>}/>
        </Routes>
      </>       
    </UserContext.Provider>
      
    
  )
}

export default App
