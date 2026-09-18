import { useLanguage } from '../i18n/LanguageContext.tsx'

function Services() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <p className="eyebrow">{services.eyebrow}</p>
        <h2>{services.title}</h2>
        <p className="section-lead">{services.lead}</p>

        <div className="services-grid">
          {services.items.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
