import React, { useState } from "react"
import emailjs from '@emailjs/browser'
import styles from './contact.module.css'
import wpplogo from '../../assets/whatsapp-logo.svg'
import ConfirmEmail from "../../components/confirmEmail"

function Contact () {
  const [confirm, setConfirm] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if(name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_jcc4gei', 'template_wpmnpdn', templateParams, 'mmRto9EDWK03A5uk-')
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      setConfirm(true)
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }


  return (
    <section className={styles.container}>
       <h1 className={styles.title}>Entre em contato comigo por Email ou WhatsApp!</h1>

    <form onSubmit={sendEmail} className={styles.form}>
      <label className={styles.label}>Nome</label>
      <input 
      className={styles.input}
      type="text" 
      placeholder="Digite seu Nome"
      name="name" 
      onChange={(e) => setName(e.target.value)}
      value={name} 
      />
      <label className={styles.label}>Email</label>
      <input 
      className={styles.input}
      type="text" 
      placeholder="Digite seu Email"
      name="email" 
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
      <label className={styles.label}>Mensagem</label>
      <textarea 
      className={styles.textArea}
      type="text" 
      placeholder="Digite sua mensagem"
      name="message" 
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      />

      <div className={styles.buttonsDiv}>
         <input 
          className={styles.button}
          type='submit' 
          value='Enviar'
          />
          
            <a 
            href="https://wa.me/message/IVLV4RSMIJ7WO1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.buttonWpp}> 
              <img 
              className={styles.imageWpp} 
              src={wpplogo} 
              alt="whatsapp"
              />
            WhatsApp
            </a>
            {confirm ? (             
              <div className={styles.confirmContainer}>
                <ConfirmEmail />
              </div>
              ) : (
              <p className={styles.none}>.</p>
            )}
      </div>
    </form>
    </section>
  )
}

export default Contact