import React from 'react'
import '../../styles/components/Header.sass'

import { NavLink } from 'react-router-dom'

import { BiHomeAlt2, BiInfoCircle, BiWrench, BiFolder, BiMessage } from 'react-icons/bi'

function Header() {
  return (
    <header>
        <nav>
            <ul>

                <li className='mobile-nav'><NavLink to={'/'}><BiHomeAlt2/></NavLink></li>
                <li className='mobile-nav'><NavLink to={'/sobre'}><BiInfoCircle/></NavLink></li>
                <li className='mobile-nav'><NavLink to={'/tecnologias'}><BiWrench/></NavLink></li>
                <li className='mobile-nav'><NavLink to={'/projetos'}><BiFolder/></NavLink></li>
                <li className='mobile-nav'><NavLink to={'/contato'}><BiMessage/></NavLink></li>

                <li className='desktop-nav'><NavLink to={'/'}>Início</NavLink></li>
                <li className='desktop-nav'><NavLink to={'/sobre'}>Sobre</NavLink></li>
                <li className='desktop-nav'><NavLink to={'/tecnologias'}>Tecnologias</NavLink></li>
                <li className='desktop-nav'><NavLink to={'/projetos'}>Projetos</NavLink></li>
                <li className='desktop-nav'><NavLink to={'/contato'}>Contato</NavLink></li>

            </ul>
        </nav>
    </header>
  )
}

export default Header