import React from 'react'

import '../../styles/components/Social.sass'

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='social-content'>
        <a href="#" target='_blank'><FaLinkedin/></a>
        <a href="#" target='_blank'><FaGithub/></a>
        <a href="#" target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default Social