import React from 'react'
import { Routes, Route } from "react-router-dom"

import Sidebar from './components/sidebar'
import Dashboard from './contents/dashboard'
import Projects from './contents/projects'
import DeskSetup from './contents/desksetup'
import Redes from './contents/redes'
import Contact from './contents/contact'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>

         <Sidebar />

        <main className='content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/desksetup" element={<DeskSetup />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </div>
  )
}

export default App
