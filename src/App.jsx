import React , { useState } from 'react'
import Sidebar from './components/sidebar'
import { Routes, Route } from "react-router-dom"
import Dashboard from './contents/dashboard'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>

         <Sidebar />

        <main className='content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
          </Routes>
        </main>

      </div>
    </div>
  )
}

export default App
