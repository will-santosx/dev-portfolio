import React from 'react'
import '../../styles/pages/Projects.sass'

import ProjectsCards from '../components/ProjectsCards'

const Projects = () => {
  return (
    <main className='projects-page'>
      <img id='github-infos-stats' src="https://github-readme-stats.vercel.app/api/?username=will-santosx&theme=discord_old_blurple&layout=compact&locale=pt-br&show_icons=true" alt="Informações do Github" />
      <div className='projects-cards-container'>
        <ProjectsCards/>
      </div>
    </main>
  )
}

export default Projects