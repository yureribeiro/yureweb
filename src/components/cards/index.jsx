import React from "react";
import './card.css'

function Card({imagem, title, description}) {
  return (
    <div className="card">
      <strong className="title">{title}</strong>
      <img className="imagem-card" src={imagem} alt="icone" />
      <small className="description">{description}</small>
    </div>
  )
}

export default Card