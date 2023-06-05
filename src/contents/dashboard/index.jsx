import React from "react"

import styles from './dashboard.module.css'

import Card from "../../components/cards"
import GithubStates from "../../components/github"
import PerfilGitHub from "../../components/perfilGitHub"
import DashProjects from "../../components/dashProjects"


function Dashboard() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.myTitle}>Descubra</h1>
        <p className={styles.myDescription}>
        Fascinado por programação e tecnologia em geral, estou sempre desenvolvendo soluções utilizando todo o ecossistema da linguagem JavaScript, tanto no front-end (cliente), quanto no back-end (servidor) e mobile (dispositivos móveis).<br />
        Aqui você encontrará informações relevantes sobre meus projetos, minhas redes sociais e minhas contribuições no GitHub. Além disso, um pouco sobre meu ambiente de trabalho, como temas e extensões que utilizo no Visual Studio Code.
        </p>
        <DashProjects />
        <section className={styles.cards}>
          <Card
            title={'Redes Sociais'}
            description={'Linkedin, Youtube, Instagram e mais...'}           
            link={'/redes'}
          />
          <Card
            title={'Contato'}
            description={'Email comercial para prestação de serviços'}         
            link={'/contact'}
          />
        </section>
        </div>
          <section className={styles.gitStates}>
            <h1 className={styles.title}>GitHub</h1>
            <PerfilGitHub />
            <GithubStates />
          </section>
      </div>
    </>
  )
}

export default Dashboard