import React from 'react'

import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiTypescript, SiJquery, SiReact, SiSass, SiGithub, SiGit, SiFigma } from "react-icons/si";

const technologies = [
  { id: 'html', name: 'HTML5', icon: <SiHtml5/>, url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
  { id: 'css', name: 'CSS3', icon: <SiCss3/>, url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
  { id: 'javascript', name: 'Javascript', icon: <SiJavascript/>, url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap/>, url: 'https://getbootstrap.com' },
  { id: 'tailwind', name: 'Tailwind', icon: <SiTailwindcss/>, url: 'https://tailwindcss.com' },
  { id: 'typescript', name: 'Typescript', icon: <SiTypescript/>, url: 'https://www.typescriptlang.org' },
  { id: 'jquery', name: 'JQuery', icon: <SiJquery/>, url: 'https://jquery.com' },
  { id: 'sass', name: 'SASS', icon: <SiSass/>, url: 'https://sass-lang.com' },
  { id: 'react', name: 'ReactJS', icon: <SiReact/>, url: 'https://react.dev' },
  { id: 'git', name: 'Git', icon: <SiGit/>, url: 'https://git-scm.com' },
  { id: 'github', name: 'Github', icon: <SiGithub/>, url: 'https://github.com' },
  { id: 'figma', name: 'Figma', icon: <SiFigma/>, url: 'https://www.figma.com' },
]

function ToolsCards() {
  return (
    <>
      {technologies.map((tech) => (
        <div className='tools-card' id={tech.id} key={tech.id}>
          {tech.icon}
          <h3>{tech.name}</h3>
          <a href={tech.url} target='_blank'><button>Saiba mais</button></a>
        </div>
      ))}
    </>
  )
}

export default ToolsCards