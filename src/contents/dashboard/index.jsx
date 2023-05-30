import React from "react"

import styles from './dashboard.module.css'

import Card from "../../components/cards"
import GithubStates from "../../components/github"
import DashProjects from "../../components/dashProjects"

function Dashboard() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <DashProjects />
        <section className={styles.cards}>
          <Card
            title={'Redes Sociais'}
            description={'Linkedin, canal no youtube, instagram e mais... '}           
            link={'/redes'}
          />
          <Card
            title={'Contato'}
            description={'Email comercial para serviços e mais'}         
            link={'/contact'}
          />
          <Card
            title={'Desk Setup'}
            description={'Componentes e links do meu setup de mesa'}
            link={'/desksetup'}
          />
        </section>
        </div>
          <section className={styles.gitStates}>
            <GithubStates />
          </section>
      </div>
    </>
  )
}

export default Dashboard