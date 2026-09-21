import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import type { ProjectId } from '../i18n/translations.ts'
import PhotoGallery from './PhotoGallery.tsx'

const ruinModules = import.meta.glob('../assets/projects/reabilitacao-ruina/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const GALLERIES: Record<ProjectId, string[]> = {
  ruin: Object.keys(ruinModules)
    .sort((a, b) => a.localeCompare(b))
    .map((path) => ruinModules[path]),
}

function Projects() {
  const { t } = useLanguage()
  const { projects } = t
  const [openId, setOpenId] = useState<ProjectId | null>(null)
  const openProject = projects.items.find((project) => project.id === openId)

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">{projects.eyebrow}</p>
        <h2>{projects.title}</h2>

        <div className="projects-grid">
          {projects.items.map((project) => {
            const photos = GALLERIES[project.id]
            return (
              <button
                type="button"
                className="project-card"
                key={project.id}
                onClick={() => setOpenId(project.id)}
              >
                <div className="project-thumbs">
                  <figure>
                    <img src={photos[0]} alt="" loading="lazy" />
                    <figcaption>{projects.before}</figcaption>
                  </figure>
                  <figure>
                    <img src={photos[photos.length - 1]} alt="" loading="lazy" />
                    <figcaption>{projects.after}</figcaption>
                  </figure>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <span className="project-cta">
                    {projects.viewPhotos} ({photos.length}) &rarr;
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {openProject && (
        <PhotoGallery
          photos={GALLERIES[openProject.id]}
          title={openProject.title}
          labels={projects}
          onClose={() => setOpenId(null)}
        />
      )}
    </section>
  )
}

export default Projects
