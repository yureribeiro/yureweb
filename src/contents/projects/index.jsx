import React, { useState } from "react"
import CardProject from "../../components/cardProjeto"
import QRcode from "../../assets/QRcode.png"
import Licurt from "../../assets/licurtmockups.png"
import BittcsyMockup from '../../assets/bittcsymockups.png'
import Financy from '../../assets/financymockup.png'
import arrowRight from "../../assets/arrow-right.svg"
import styles from "./button.module.css"

function Projects () {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projectData = [
    {
      title: "Bittcsy",
      tech: "React Native - Expo (EAS) - Node.js - Prisma - PostgresSQL",
      libs: "CryptoPanic - CoinGecko - Reanimated - Axios - React Navigation...",
      description:
        "O Bittcsy é um aplicativo móvel, que permite aos usuários acompanhar o mercado e verificar o status das criptomoedas, ler as últimas notícias relacionadas ao mundo cripto, moedas mais pesquisadas e participar do forum de discussões.",
      image: BittcsyMockup,
      link: "https://play.google.com/store/apps/details?id=com.yureribeirodev.Bittcsy",
      github: "https://github.com/yureribeiro/Bittcsy",
      titleLink: "Google Play",
    },
    {
      title: "Licurt",
      tech: "HTML5 - CSS - JavaScript",
      libs: "Shortcut API",
      description:
        "Ideal para quem compartilha muitos links, para evitar links enormes, use o Licurt para obter um link curto que redireciona para o seu link original. - (estatísticas avançadas em breve)",
      image: Licurt,
      link: "https://qrcodee.vercel.app",
      github: "https://github.com/yureribeiro/Licurt",
      titleLink: "Visite o Site",
    },
    {
      title: "Financy",
      tech: "React.js - Node.js - Sequelize - PostgresSQL - Styled Components",
      libs: "API Rest",
      description:
        "*Projeto sendo migrado para NEXT.JS* Com o Financy fica fácil de gerenciar suas vendas através das categorias cadastradas. Além de Gráficos para acompanhar o desempenho anual, baixar relatório mensal em pdf e mais...",
      image: Financy,
      link: "https://dashsistem.vercel.app",
      github: "https://github.com/yureribeiro/Dashboard",
      titleLink: "Manutenção",
    },
    {
      title: "QRcodee",
      tech: "React.js - CSS ",
      libs: "QRcode - React-QR-code",
      description:
        "Gerador de QRcode, basta inserir o texto ou link no input, será gerado um QR para download em PNG para compartilhar com quem quiser.",
      image: QRcode,
      link: "https://qrcodee.vercel.app",
      github: "https://github.com/yureribeiro/QRCode",
      titleLink: "Gere seu QRCODE",
    },
  ]

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= projectData.length ? 0 : newIndex
    })
  }

  const currentProject = projectData[currentProjectIndex]

  return (
    <div>
          <CardProject 
          title={currentProject.title}
          libs={currentProject.libs}
          tech={currentProject.tech}
          description={currentProject.description}
          image={currentProject.image}
          link={currentProject.link}
          github={currentProject.github}
          titleLink={currentProject.titleLink}
        />

                  <button 
                    onClick={handleNextProject} 
                    className={styles.buttonNext}>
                   <img src={arrowRight} alt="proximo" />
                  </button> 
      </div>
  )
}

export default Projects