import { useLanguage } from '../i18n/LanguageContext.tsx'

function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="values-list">
          {about.values.map((value) => (
            <li key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
