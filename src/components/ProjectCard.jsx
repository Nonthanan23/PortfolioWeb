// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition duration-200 shadow-md hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 mb-2">
        {title}
      </h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-slate-400">
        {tech.map((t, i) => (
          <span key={i} className="bg-slate-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </a>
  )
}
