import React from "react"
import CardProject from "../../components/cardProjeto"
import QRcode from "../../assets/QRcode.png"

function Projects () {
  return (
    <CardProject 
      title={"QRcode Generator"}
      description={"Gerador de QRcode, basta inserir o texto ou link no input, será gerado um QR para download em PNG para compartilhar com quem quiser."}
      image={QRcode}
      link={"https://qrcodee.vercel.app"}
      titleLink={"Acesse QRcodee aqui"}
    />
  )
}

export default Projects