import React, { useState, useEffect } from "react";
import './sidebar.css'
import minhafoto from '../../assets/minha-foto.jpeg'
import home from '../../assets/house.svg'
import github from '../../assets/github-logo.svg'
import envelope from '../../assets/envelope.svg'
import desk from '../../assets/desksetup.svg'
import dev from '../../assets/dev.svg'
import globe from  '../../assets/globe.svg'
import vscodeIcon from '../../assets/vscode-icon.svg'
import { Link } from "react-router-dom";

function Sidebar () {
  const [time, setTime] = useState('')

    useEffect(() => {
      const interval = setInterval(() => {
       const now = new Date()
       const hours = now.getHours().toString().padStart(2, '0')
       const minutes = now.getMinutes().toString().padStart(2, '0')
       const seconds = now.getSeconds().toString().padStart(2, '0')
       setTime(`${hours}:${minutes}:${seconds}`)
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
    }, [])

  
  return (
    <sidebar className='sidebar' >
      <div className="content-perfil">
        <img src={minhafoto}  className="foto-perfil"/>
        <div>
          <p className="name-perfil">Yure Ribeiro</p>
          <small>developer</small>
        </div>
      </div>
      
      <nav className="nav">
        <Link 
          className="link" 
          to="/"
          >
          <img src={home} alt="icone-home" />
          Início
        </Link>
        <a
          className="link" 
          href="https://github.com/yureribeiro" 
          target="blank"
          >
          <img src={github} alt="github-icone" />
          GitHub
        </a>
        <Link
          className="link" 
          to="/projects"
          >
          <img src={dev} alt="developer-icone" />
          Projetos
        </Link>
        <Link
          className="link" 
          to="/vsthemes"
          >
          <img src={vscodeIcon} alt="paint-icone" />
          VSCode
        </Link>
        <Link
          className="link" 
          to="/desksetup"
          >
          <img src={desk} alt="setup-icone" />
          Desk Setup
        </Link>
        <Link
          className="link" 
          to="/redes"
          >
          <img src={globe} alt="contato-icone" />
          Redes
        </Link>
        <Link
          className="link" 
          to="/contact"
          >
          <img src={envelope} alt="globe-icone" />
          Contato
        </Link>
        {/* vsthemes */}
      </nav>


      <div className="credits">
        <p className="time">{time}</p>
      </div>
    </sidebar>
  )
}

export default Sidebar