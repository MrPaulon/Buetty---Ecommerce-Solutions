import { useState } from 'react'
import './App.scss'
import Navbar from './assets/modules/Navbar/Navbar.jsx'
import Accueil from './assets/pages/Accueil/Accueil.jsx'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Accueil/>
      </div>
    </>
  )
}

export default App
