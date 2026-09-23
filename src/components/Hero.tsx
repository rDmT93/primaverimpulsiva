import { useLanguage } from '../i18n/LanguageContext.tsx'
import heroFlyer from '../assets/hero-flyer.jpg'

function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <img className="hero-flyer" src={heroFlyer} alt={hero.flyerAlt} />
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            {hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="#services">
            {hero.ctaSecondary}
          </a>
        </div>

        <dl className="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
