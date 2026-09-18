import { useLanguage } from '../i18n/LanguageContext.tsx'

function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">{projects.eyebrow}</p>
        <h2>{projects.title}</h2>

        <div className="projects-grid">
          {projects.items.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-thumb" aria-hidden="true" />
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
