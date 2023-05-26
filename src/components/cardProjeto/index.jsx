import React from "react"
import styles from "./cardProjeto.module.css"

const CardProject = ({title, description, link, titleLink, image}) => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContent}>
                 <h1 className={styles.title}>{title}</h1>
                 <a href={link} target="_blank" className={styles.link}>{titleLink}</a>
            </div>
            <div className={styles.imageContent}>
           <img src={image}  className={styles.image}/>
           <p className={styles.description}>{description}</p>
           
            </div>
        </div>
       
    )
}

export default CardProject