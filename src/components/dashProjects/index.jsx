import React from "react"
import { Link } from "react-router-dom"

import styles from './dashProject.module.css'
import projects from '../../assets/projetosimage.jpg'

const DashProjects = () => {

    return (
        <Link 
        className={styles.container} 
        style={{ backgroundImage: `url(${projects})`, backgroundSize: 'cover'}}
        to='/projects'
        >
            <h1 className={styles.title}>Projetos</h1>
        </Link>
    )
}

export default DashProjects