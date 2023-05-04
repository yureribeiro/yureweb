import React from "react"
import './linkredes.css'

const LinkRedes = ({image, title, description, link, textLink}) => {
  return (
    <div className="containerRedes">
      <div className="contentTitle">
        <img src={image} className="imageRedes"/>
        <h3 className="titleRedes">{title}</h3>
      </div>
      <p className="descriptionRedes">{description}</p>
      <a href={link} className="linkRedes" target="blank">{textLink}</a>
    </div>
  )
}

export default LinkRedes