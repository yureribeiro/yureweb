import React from "react";
import './sidebar.css'
import minhafoto from '../../assets/minha-foto.jpeg'
import home from '../../assets/house.svg'
import github from '../../assets/github-logo.svg'
import envelope from '../../assets/envelope.svg'

function Sidebar () {
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
        <a 
          className="link" 
          href="/"
          >
          <img src={home} alt="icone-home" />
          INÍCIO
        </a>
        <a 
          className="link" 
          href="https://github.com/yureribeiro" 
          target="blank"
          >
          <img src={github} alt="github-icone" />
          GITHUB
        </a>
        <a 
          className="link" 
          href="/contact"
          >
          <img src={envelope} alt="contato-icone" />
          CONTATO
        </a>
      </nav>
    </sidebar>
  )
}

export default Sidebar