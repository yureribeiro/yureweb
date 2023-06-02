import React from "react"
import SetupItens from '../../components/desksetup'
import styles from "./desksetup.module.css"

function Desksetup () {
  return (
    <>
    <section className={styles.container}>
      <SetupItens/>
    </section>
    </>
  )
}

export default Desksetup