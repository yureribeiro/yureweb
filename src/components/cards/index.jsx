import React from "react";
import styles from './card.module.css'
import { Link } from "react-router-dom";
function Card({ title, description, link}) {
  return (
    <Link to={link} className={styles.card}>
      <strong className={styles.title}>{title}</strong>
      <p className={styles.description}>{description}</p>
    </Link>
    
  )
}

export default Card