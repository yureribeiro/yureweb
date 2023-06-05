import React, { useState, useEffect } from "react";
import  styles from './sidebar.module.css'
import minhafoto from '../../assets/minha-foto.jpeg'
import home from '../../assets/house.svg'
import github from '../../assets/github-logo.svg'
import envelope from '../../assets/envelope.svg'
import dev from '../../assets/dev.svg'
import globe from  '../../assets/globe.svg'
import vscodeIcon from '../../assets/vscode-icon.svg'
import { Link } from "react-router-dom"

function SidebarApp () {
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
    <sidebar className={styles.sidebar}>
      <div className={styles.contentPerfil}>
        <img src={minhafoto}  className={styles.fotoPerfil}/>
        <div>
          <p className={styles.namePerfil}>Yure Ribeiro</p>
          <small>developer</small>
        </div>
      </div>
      
      <nav className={styles.nav}>
        <Link 
          className={styles.link} 
          to="/"
          >
          <img src={home} alt="icone-home" />
          Início
        </Link>
        <a
          className={styles.link} 
          href="https://github.com/yureribeiro" 
          target="blank"
          >
          <img src={github} alt="github-icone" />
          GitHub
        </a>
        <Link
          className={styles.link} 
          to="/projects"
          >
          <img src={dev} alt="developer-icone" />
          Projetos
        </Link>
        <Link
          className={styles.link} 
          to="/vsthemes"
          >
          <img src={vscodeIcon} alt="paint-icone" />
          VSCode
        </Link>
        <Link
          className={styles.link} 
          to="/redes"
          >
          <img src={globe} alt="contato-icone" />
          Redes
        </Link>
        <Link
          className={styles.link} 
          to="/contact"
          >
          <img src={envelope} alt="globe-icone" />
          Contato
        </Link>
      </nav>


      <div className={styles.credits}>
        <p className={styles.time}>{time}</p>
      </div>
    </sidebar>
  )
}

export default SidebarApp