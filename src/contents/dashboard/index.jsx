import React from "react";
import Card from "../../components/cards";
import setup from '../../assets/card-setup.jpg'
import projects from '../../assets/card-projetos.jpg'
import social from '../../assets/socialmidias.jpg'
import contato from '../../assets/contato.jpg'
import styles from './dashboard.module.css'


function Dashboard() {
  return (
    <>
      <section className={styles.cards}>
        <Card
          title={'Sites e Aplicativos'}
          description={'Meus Principais projetos WEB e MOBILE'}
          background={projects}
          link={'/projects'}
        />
        <Card
          title={'Redes Sociais'}
          description={'Linkedin, canal no youtube, instagram e mais... '}
          background={social}
          link={'/redes'}
        />
        <Card
          title={'Contato'}
          description={'Email comercial para serviços e mais'}
          background={contato}
          link={'/contact'}
        />
        <Card
          title={'Desk Setup'}
          description={'Componentes e links do meu setup de mesa'}
          background={setup}
          link={'/desksetup'}
        />
      </section>
    </>
  )
}

export default Dashboard