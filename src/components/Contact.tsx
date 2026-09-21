import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'
import { INSTAGRAM_URL } from '../constants.ts'

const CONTACT_EMAIL = 'primaverimpulsiva.lda@gmail.com'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const WHATSAPP_NUMBER = '351934867205'

type Status = 'idle' | 'sending' | 'success' | 'error'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const { t } = useLanguage()
  const { contact } = t

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formData.append('_subject', 'Novo contacto através do site Primaverimpulsiva')
    formData.append('_template', 'table')

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()
      const ok = response.ok && String(result.success) === 'true'
      setStatus(ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
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

          <div className="contact-actions">
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {contact.whatsapp}
            </a>
            <a
              className="btn btn-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              {contact.instagram}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' ? (
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
              <input
                className="form-honeypot"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              {status === 'error' && (
                <p className="form-error" role="alert">
                  <strong>{contact.form.errorTitle}</strong> {contact.form.errorText}
                </p>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? contact.form.sending : contact.form.submit}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
