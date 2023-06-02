import React from 'react'
import { Routes, Route } from "react-router-dom"

import SidebarApp from './components/sidebar'
import Dashboard from './contents/dashboard'
import Projects from './contents/projects'
import Desksetup from './contents/desksetup'
import Redes from './contents/redes'
import Contact from './contents/contact'
import VSthemes from './contents/vsThemes'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>

         <SidebarApp />

        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/desksetup" element={<Desksetup />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vsthemes" element={<VSthemes />} />
          </Routes>
        </main>

      </div>
    </div>
  )
}

export default App
