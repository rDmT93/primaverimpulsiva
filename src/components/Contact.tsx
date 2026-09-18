import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()
  const { contact } = t

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p>{contact.lead}</p>

          <ul className="contact-list">
            {contact.info.map((item) => (
              <li key={item.label}>
                <span className="contact-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success" role="status">
              <h3>{contact.form.successTitle}</h3>
              <p>{contact.form.successText}</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label htmlFor="name">{contact.form.name}</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">{contact.form.email}</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone">{contact.form.phone}</label>
                <input id="phone" name="phone" type="tel" />
              </div>
              <div className="form-row">
                <label htmlFor="message">{contact.form.message}</label>
                <textarea id="message" name="message" rows={4} required />
              </div>
              <button type="submit" className="btn btn-primary">
                {contact.form.submit}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
