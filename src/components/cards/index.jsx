import React from "react";
import styles from './card.module.css'

function Card({ title, description, background, link}) {
  return (
    <a href={link} className={styles.card} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <strong className={styles.title}>{title}</strong>
      <p className={styles.description}>{description}</p>
    </a>
    
  )
}

export default Card