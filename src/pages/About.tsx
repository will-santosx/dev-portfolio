import React from 'react'
import '../../styles/pages/About.sass'

import ReactCountryFlag from "react-country-flag"

const About = () => {
  return (
    <main className='about-page'>
      <div className='about-me'>
        <h1>Aqui vai um pequeno resumo...</h1>
        <p>
          Olá, meu nome é David Willians Leão dos Santos, ou Willians Santos, como prefiro ser chamado. Tenho 16 anos e sou natural de Mato Grosso, Brasil. Atualmente, tenho 6 meses de experiência como desenvolvedor front-end junior.<br/><br/>

          Desde criança, sempre tive uma curiosidade natural sobre tecnologia e computadores. Meu pai também é um desenvolvedor, e talvez isso tenha sido o motivo da minha paixão e curiosidade pela área.<br/><br/>

          Meu objetivo profissional é ingressar no mercado de trabalho como desenvolvedor front-end, adquirir mais experiência e conhecimento, e ajudar a empresa a alcançar seus objetivos e progresso.<br/><br/>

          Sou uma pessoa que adora desafios e aprendizados constantes, por isso sempre busco aprender novas tecnologias e ferramentas. Sou autodidata e possuo habilidades de comunicação e resolução de conflitos, o que me permite trabalhar bem em equipe.
        </p>
      </div>
      <div className='languages-content'>
        <div className='language-container'>
        <div className='flags'>
            <ReactCountryFlag countryCode='br' style={{width: '3rem', height: '3rem', borderRadius: '50%'}} svg/>
          </div>
          <span>Língua materna</span>
        </div>
        <div className='language-container'>
          <div className='flags'>
            <ReactCountryFlag countryCode='us' style={{width: '3rem', height: '3rem', borderRadius: '50%'}} svg/>
          </div>
          <span>Nível básico-intermediário</span>
        </div>
      </div>
    </main>
  )
}

export default About