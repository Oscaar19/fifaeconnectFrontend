import { useState } from 'react'
import './App.css'
import LoginRegister from './auth/LoginRegister'
import Header from './layout/Header'
import Footer from './layout/Footer'
import JugadorsGrid from './jugadors/JugadorsGrid'

function App() {

  return (
    <>
      <div className="app">
        <Header/>
        <JugadorsGrid />
      </div>
    </>
  )
}

export default App
