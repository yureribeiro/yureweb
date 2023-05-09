import React from 'react'
import styles from '../extencions/extencions.module.css'

const Extencion = ({title, description, image}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img src={image} className={styles.image}/>
    </div>
  )
}

export default Extencion