import React from "react";
import Card from "../../components/cards";
import setup from '../../assets/card-setup.jpg'
import projects from '../../assets/card-projetos.jpg'
import social from '../../assets/socialmidias.jpg'
import contato from '../../assets/contato.jpg'
import './dashboard.css'


function Dashboard() {
  return (
    <>
 <section className="cards">
  <Card
    title={'Sites e Aplicativos'}
    description={'Meus Principais projetos WEB e MOBILE'}
    background={projects}
    link={'/projects'}
  />
  <Card
    title={'Desk Setup'}
    description={'Componentes e links do meu setup de mesa'}
    background={setup}
    link={'/desksetup'}
  />
  <Card
    title={'Redes Sociais'}
    description={'Linkedin, canal no youtube, instagram e mais... '}
    background={social}
    link={'/redes'}
  />
  <Card
    title={'Contato'}
    description={'Fale comigo para serviços e mais...'}
    background={contato}
    link={'/contact'}
  />
</section>
    </>
  )
}

export default Dashboard