import { useState } from 'react'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import Header from './layout/Header'
import Footer from './layout/Footer'
import JugadorsGrid from './jugadors/JugadorsGrid'
import Jugador from './jugadors/Jugador'

import { Routes, Route } from "react-router-dom";

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<><Header/><JugadorsGrid /></>}/>
        <Route path="/jugadors" element={<><Header/><JugadorsGrid /></>}/>
        <Route path="/jugadors/:id" element={ <Jugador/> } />
      </Routes>
    </>   
    
  )
}

export default App
