import React from "react"

import styles from './dashboard.module.css'

import Card from "../../components/cards"
import GithubStates from "../../components/github"
import DashProjects from "../../components/dashProjects"
import PerfilGitHub from "../../components/perfilGitHub"

function Dashboard() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.myTitle}>Bem vindo ao meu espaço!</h1>
        <p className={styles.myDescription}>
        Fascinado por programação e tecnologia em geral, estou sempre desenvolvendo aplicações utilizando todo o ecossistema JavaScript, tanto no front-end quanto no back-end e mobile. <br />
        Aqui você encontrará informações relevantes sobre meus projetos, minhas redes sociais e minhas contribuições no GitHub. Além disso, também posso responder a perguntas sobre meu ambiente de trabalho, como temas e extensões que utilizo no Visual Studio Code.
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
          <Card
            title={'Desk Setup'}
            description={'Componentes e links do meu setup de mesa'}
            link={'/desksetup'}
          />
        </section>
        </div>
          <section className={styles.gitStates}>
            <h1 className={styles.title}>GitHub status</h1>
            <PerfilGitHub />
            <GithubStates />
          </section>
      </div>
    </>
  )
}

export default Dashboard