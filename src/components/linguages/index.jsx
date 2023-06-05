import React from "react"
import styles from "./linguages.module.css"

const Linguages = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.javascript}></div>
                <div className={styles.css}></div>
                <div className={styles.html}></div>
                <div className={styles.typescript}></div>
                <div className={styles.ejs}></div>
            </div>
            <div className={styles.linguages}>
                <div className={styles.flex}>
                    <p className={styles.label}>JavaScript</p>
                    <p className={styles.jsPorcent}>81.71%</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.label}>Typescript</p>
                    <p className={styles.tsPorcent}>0.13%</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.label}>HTML</p>
                    <p className={styles.htmlPorcent}>6.59%</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.label}>CSS</p>
                    <p className={styles.cssPorcent}>10.79%</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.label}>EJS</p>
                    <p className={styles.ejsPorcent}>0.78%</p>
                </div>
            </div>
        </section>
    )
}

export default Linguages