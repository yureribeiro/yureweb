import React from "react"
import styles from "./cardProjeto.module.css"

const CardProject = ({title, tech, libs, description, link, github, titleLink, image}) => {

    return (
        <div className={styles.container}>
            <section className={styles.titleContent}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
                <div className={styles.buttonsContent}>
                    <a href={github} target="_blank" className={styles.links}>GitHub</a>
                    <a href={link} target="_blank" className={styles.links}>{titleLink}</a>
                </div>
            </section>
            <div className={styles.imageContent}>
               <img src={image}  className={styles.image}/>
                    <div className={styles.tecsContent}>
                        <div>
                            <p className={styles.label}>Ferramentas</p>
                            <p className={styles.tech}>{tech}</p>
                        </div>
                        <div>
                            <p className={styles.label}>Libs e APIs</p>
                            <p className={styles.tech}>{libs}</p>
                        </div>
                    </div>
            </div>
        </div>
       
    )
}

export default CardProject