// src/sections/Projects.jsx
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This site — designed with React, Tailwind, and deployed on Netlify.',
    tech: ['React', 'TailwindCSS', 'Netlify'],
    link: 'https://github.com/Nonthanan23/PortfolioWeb.git'
  },
  {
    title: 'Connect Four',
    description: 'A simple full-stack task manager with drag-and-drop UI.',
    tech: ['React', 'Typescript'],
    link: 'https://github.com/Nonthanan23/Connect4ts.git'
  },
  {
    title: 'Memory Game',
    description: 'Uses OpenWeather API to fetch live weather based on geolocation.',
    tech: ['Java', 'HPML', 'CSS'],
    link: 'https://github.com/Nonthanan23/MemoryGame_fe23_Java1.git'
  }
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
