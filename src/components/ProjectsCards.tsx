import React from 'react'

import { HiOutlineChartPie, HiFilm, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'

const myProjects = [
    {
        id: 'studyTaskify', 
        title: 'StudyTaskify', 
        icon: <HiOutlineChartPie/>, 
        description: "Interface agradável - Drag'n drop - Responsivo - Primeiro projeto com JQuery", 
        techs: 'HTML, Typescript, SASS, JQuery',
        repURL: 'https://github.com/will-santosx/study-taskify-app', 
    },
    {
        id: 'studyFlix', 
        title: 'StudyFlix', 
        icon: <HiFilm/>, 
        description: 'Consumo de API com Axios - Reponsividade - TheMovieDB API', 
        techs: 'HTML, Typescript, SASS, Axios',
        repURL: 'https://github.com/will-santosx/study-flix-app', 
    },
]

const ProjectsCards = () => {
  return (
    <>
        {myProjects.map((project) => (
            <div className='project-card' id={project.id} key={project.id}>
                <div className="project-content">
                    <div className='project-header'>
                        <h3>{project.title}</h3>
                        <span>{project.techs}</span>
                    </div>
                    <p>{project.description}</p>
                    <a href={project.repURL}><button>Repositório</button></a>
                </div>
                <div className="project-icon">
                    {project.icon}
                </div>
            </div>
        ))}
        <div className='project-card' id='comingSoon' key='comingSoon'>
            <div className="project-content">
                <div className='project-header'>
                    <h3>Em breve...</h3>
                </div>
                <p>Novos projetos em breve; Aprendizado constante</p>
                <button id='coming-soon-button'>...</button>
            </div>
            <div className="project-icon">
                <HiOutlineDotsCircleHorizontal/>
            </div>
        </div>
    </>
  )
}

export default ProjectsCards