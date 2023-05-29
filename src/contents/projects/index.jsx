import React, {useState}from "react"
import CardProject from "../../components/cardProjeto"
import styles from "./projects.module.css"

import arrowRight from "../../assets/arrow-right.svg"
import QRcode from "../../assets/QRcode.png"
import BittcsyMockup from '../../assets/bittcsy.png'

function Projects () {

  const projectData = [
    {
      title: "Bittcsy",
      tech: "React Native - Expo - Node - Prisma - Postgres",
      description:
        "O Bittcsy é um aplicativo móvel, que permite aos usuários acompanhar o mercado e verificar o status das criptomoedas, ler as últimas notícias relacionadas ao mundo cripto, moedas mais pesquisadas e participar do forum de discussões.",
      image: BittcsyMockup,
      link: "https://play.google.com/store/apps/details?id=com.yureribeirodev.Bittcsy",
      titleLink: "Disponível na Google Play",
    },
    {
      title: "QRcodee",
      description:
        "Gerador de QRcode, basta inserir o texto ou link no input, será gerado um QR para download em PNG para compartilhar com quem quiser.",
      image: QRcode,
      link: "https://qrcodee.vercel.app",
      titleLink: "Acesse QRcodee aqui",
    },
  ]

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      // se exceder os projetos disponíveis, redefine-o para 0
      const newIndex = prevIndex + 1
      return newIndex >= projectData.length ? 0 : newIndex
    })
  }

  const currentProject = projectData[currentProjectIndex]

  return (
    <>
        <CardProject 
       title={currentProject.title}
       tech={currentProject.tech}
       description={currentProject.description}
       image={currentProject.image}
       link={currentProject.link}
       titleLink={currentProject.titleLink}
    />
      <button 
      onClick={handleNextProject} 
      className={styles.buttonNext}>
       <img src={arrowRight} alt="next" />
      </button>
    </>

  )
}

export default Projects