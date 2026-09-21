import { useLanguage } from '../i18n/LanguageContext.tsx'
import { INSTAGRAM_URL } from '../constants.ts'
import logoMark from '../assets/logo-mark.png'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <img className="brand-mark" src={logoMark} alt={t.brand.name} />
          <span className="brand-name">{t.brand.name}</span>
        </div>
        <a
          className="footer-social"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.contact.instagram}
          title={t.contact.instagram}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <p>{t.footer.company}</p>
      </div>
    </footer>
  )
}

export default Footer
