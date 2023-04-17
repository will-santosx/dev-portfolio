import React from 'react'

import '../../styles/components/Social.sass'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='social-content'>
        <a href="https://www.linkedin.com/in/willians-dos-santos-212932254/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/will-santosx" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/leao.willians/" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default Social