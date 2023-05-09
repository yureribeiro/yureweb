import React from "react"
import styles from '../vsThemes/vsthemes.module.css'
import rosePine from '../../assets/rosepine.png'
import oneDarkPro from '../../assets/onedarkpro.png'

import consoleNinja from '../../assets/consoleninja.png'
import totalTypeScript from '../../assets/typescriptextensão.png'
import liveServer from '../../assets/liveserver.png'
import imagePreview from '../../assets/imagepreview.png'
import vscodeIcons from '../../assets/vscode-icons.png'
import codeSnap from '../../assets/codesnap.png'
import bracketChaves from '../../assets/bracketchaves.png'
import autoRenameTag from '../../assets/autorenametag.png'

import Extencion from "../../components/extencions" 

const VSthemes = () => {
  return (
    <div className={styles.container} > 
      <p className={styles.titleSection}>Temas :</p>
        <section className={styles.section}>
          <Extencion 
          title={'Rosé Pine'}
          description={'Meu tema atual do vsCode, não e muito colorido deixando o código até mais clean visualmente.'}
          image={rosePine}
          />
          <Extencion 
          title={'One Dark Pro'}
          description={'Outro tema que utilizei bastante no vsCode, bom para quem está aprendendo ele, ajuda a identificar o que cada string significa no código.'}
          image={oneDarkPro}
          />
      </section>

      <p className={styles.titleSection}>Extensões :</p>
        <section className={styles.section}>
          <Extencion 
          title={'Console Ninja'}
          description={'Extensão muito interessante para não precisar ir no Browser para ver os console.logs e erros. É dos mesmos criadores do Quokka.js, porém ainda está em base beta e sem recursos "PROs".'}
          image={consoleNinja}
        />
          <Extencion 
          title={'Total TypeScript'}
          description={'Extensão muito boa para Typescript, ajudar a entender aqueles erros super genéricos. Além de ajudar de ensinar a sintaxe do Typescript.'}
          image={totalTypeScript}
          />
        </section>
        <section className={styles.section}>
          <Extencion 
          title={'Image Preview'}
          description={'Image preview mostra uma pré-visualização de imagens de urls assim como imagens importadas da máquina do usuário, dessa forma nos ajuda a evitar links quebrados ou importar imagens que não existem.'}
          image={imagePreview}
          />
          <Extencion 
          title={'Auto Rename Tag'}
          description={'ao alterar uma tag de abertura em HTML/XLM, ele automaticamente altera também a tag de fechamento, trazendo maior produtividade'}
          image={autoRenameTag}
          />
        </section>
        <section className={styles.section}>
          <Extencion 
          title={'Bracket Pair Colorizer'}
          description={'Ajuda a identificar de uma forma melhor o escopo de uma função, declaração, classe, etc. Dando uma cor especifica para colchetes ou parentes, assim mesmo tendo varias declarações dentro de uma função, fica mais fácil identificar o inicio e fim de cada uma.'}
          image={bracketChaves}
          />
          <Extencion 
          title={'Live Server'}
          description={'cria um servidor de desenvolvimento para ti, assim dando uma funcionalidade de live reload para o seu projecto a cada modificação feita no mesmo.'}
          image={liveServer}
          />
        </section>
        <section className={styles.section}>
          <Extencion 
          title={'Vscode-Icons'}
          description={'Deixe os icones de suas pastas e arquivos mais intuitivos e modernos.'}
          image={vscodeIcons}
          />
          <Extencion 
          title={'Code Snap'}
          description={' Faça belas capturas de tela do seu código no VS Code, mostrando linhas e muitas outras opções de configuração.'}
          image={codeSnap}
          />
        </section>
    </div>
  )
}

export default VSthemes