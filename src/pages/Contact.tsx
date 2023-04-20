import React, { FormEvent, useState } from 'react'
import '../../styles/pages/Contact.sass'

import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {

  function invalidInput (event: FormEvent) {
    let inputInvalid = event.target as HTMLInputElement;
    inputInvalid.classList.add('invalid-input');
    inputInvalid.addEventListener('input', () => {
      if (document.activeElement == inputInvalid) {
        inputInvalid.classList.remove('invalid-input');
      };
    })
  }

  return (
    <main className='contact-page'>
      <h1>Entre em contato diretamente comigo!</h1>
      <form id='contact-form' action="https://formsubmit.co/e32134f4ee91c22f07d642eb9c82f02e" method="POST">
        <div className='contact-inputs-container'>
          <input onInvalid={invalidInput} type="text" name='Nome' id='contact-input-firstname' placeholder='Primeiro nome' maxLength={20} minLength={3} required />
          <input onInvalid={invalidInput} type="text" name='Sobrenome' id='contact-input-lastname' placeholder='Segundo nome' maxLength={36} minLength={3} required />
        </div>
        <input onInvalid={invalidInput} type="text" name='_subject' id='contact-input-subject' placeholder='Assunto' maxLength={40} minLength={5} required />
        <input onInvalid={invalidInput} type="email" name="_replyto" id="contact-input-email" placeholder='Email' max={48} minLength={5} required />
        <textarea name="Mensagem" id="contact-textarea-message" cols={20} rows={10} placeholder='Digite sua mensagem'/>
        <button type='submit'>ENVIAR <FaPaperPlane/></button>
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_next" value="http://localhost:5173/sucesso"></input>
      </form>
    </main>
  )
}

export default Contact