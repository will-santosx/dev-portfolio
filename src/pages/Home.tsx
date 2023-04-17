import React from 'react'

import '../../styles/pages/Home.sass';
import DesktophomeImage from '../../images/virtual-character.png'
import MobilehomeImage from '../../images/mobile-virtual-character.png'

const Home = () => {
  return (
    <main className='home-page'>
      <img className='mobile-image' src={MobilehomeImage} alt="Personagem virtual de Willians Santos" />
      <div className='welcome-titles'>
        <span>Olá, me chamo</span>
        <h1>Willians Santos.</h1>
      </div>
      <div className='roles'>
        <div className='role-tags'><span className='role-circle r'>●</span> Desenvolvedor</div>
        <div className='role-tags'><span className='role-circle y'>●</span> Front-end</div>
        <div className='role-tags'><span className='role-circle g'>●</span> Web</div>
      </div>
      <div className='home-buttons'>
        <a href="#" target='_blank'><button>Currículo</button></a>
        <a href="#" target='_blank'><button>Certificados</button></a>
      </div>
      <img className='desktop-image' src={DesktophomeImage} alt="Personagem virtual de Willians Santos" />
    </main>
  )
}

export default Home