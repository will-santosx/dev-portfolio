import React from 'react'
import '../../styles/pages/SuccessMessage.sass'

import { NavLink } from 'react-router-dom';
import { HiBadgeCheck } from 'react-icons/hi'

const SuccessMessage = () => {
  return (
    <main className='success-page'>
        <HiBadgeCheck/>
        <h1>Mensagem enviada com sucesso!</h1>
        <span>Obrigado por sua mensagem. Não esqueça de conferir o seu email, será por lá que você irá receber possíveis respostas.</span>
        <NavLink to={'/'}><button>Volte a página principal</button></NavLink>
    </main>
  )
}

export default SuccessMessage