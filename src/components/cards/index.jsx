import React from "react";
import { Link } from "react-router-dom";
import './card.css'

function Card({ title, description, background, link}) {
  return (
    <a href={link} className="card" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <strong className="title">{title}</strong>
      <p className="description">{description}</p>
    </a>
    
  )
}

export default Card