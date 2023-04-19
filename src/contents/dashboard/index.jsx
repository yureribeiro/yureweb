import React from "react";
import Card from "../../components/cards";
import desk from '../../assets/desksetup.svg'
import dev from '../../assets/dev.svg'
import globe from  '../../assets/globe.svg'
import './dashboard.css'


function Dashboard() {
  return (
    <>
    <section className="cards">
        <Card
          title={'Sites e Aplicativos'}
          imagem={dev}
          description={'Meus Principais projetos WEB e MOBILE'}
        />
        <Card
          title={'Desk Setup'}
          imagem={desk}
          description={'Componentes e links do meu setup de mesa'}
        />
        <Card
          title={'Redes Sociais'}
          imagem={globe}
          description={'Youtube, Instagram, Linkedin e +'}
        />
        <Card
          title={'exemplo'}
          imagem={desk}
          description={'Lorem ispum asdaasd dasdsd asdasd'}
        />
    </section>

    </>
  )
}

export default Dashboard