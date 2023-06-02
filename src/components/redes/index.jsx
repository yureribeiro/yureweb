import React from "react"
import styles from './linkredes.module.css'

const LinkRedes = ({image, title, description, link, textLink}) => {
  return (
    <div className={styles.containerRedes}>
      <div className={styles.contentTitle}>
        <img src={image} className={styles.imageRedes}/>
        <h3 className={styles.titleRedes}>{title}</h3>
      </div>
      <p className={styles.descriptionRedes}>{description}</p>
      <a href={link} className={styles.linkRedes} target="blank">{textLink}</a>
    </div>
  )
}

export default LinkRedes