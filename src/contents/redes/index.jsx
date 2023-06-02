import React from 'react'
import youtubelogo from '../../assets/youtube-logo.svg'
import linkedinlogo from '../../assets/linkedin-logo.svg'
import instagramlogo from '../../assets/instagram-logo.svg'
import githublogo from '../../assets/github-logo.svg'
import LinkRedes from '../../components/redes'

import styles from "./redes.module.css"

function Redes () {
  return (
    <div className={styles.containerRedesELinks}>
      <h2 className={styles.titleContainerRedes}>Me acompanhe nas redes</h2>
      <div className={styles.divLinks}>
        <LinkRedes 
          image={youtubelogo}
          title={'Youtube'}
          description={'Canal focado em setup de mesa, periféricos e tecnologia'}
          link={'https://www.youtube.com/channel/UC0JDDjvBJv4vAk9plW8Wpug'}
          textLink={'@yure-ribeiro'}
        />
        <LinkRedes 
          image={linkedinlogo}
          title={'Linkedin'}
          description={'Compartilho alguns projetos, rotina de estudos, e network'}
          link={'https://www.linkedin.com/in/yureribeirodev'}
          textLink={'yureribeirodev'}
        />
        <LinkRedes 
          image={instagramlogo}
          title={'Instagram'}
          description={'Blog pessoal, um pouco de código do dia a dia e dicas, videos de setup e tecnologia'}
          link={'https://www.instagram.com/yure.ribeiroo'}
          textLink={'@yure.ribeiroo'}
        />
         <LinkRedes 
          image={githublogo}
          title={'GitHub'}
          description={'Projetos pessoais, colaborativos e exercícios de JavaScript'}
          link={'https://github.com/yureribeiro'}
          textLink={'yureribeiro'}
        />
      </div>
    </div>
  )
}

export default Redes