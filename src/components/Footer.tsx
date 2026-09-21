import { useLanguage } from '../i18n/LanguageContext.tsx'
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
        <p>{t.footer.company}</p>
      </div>
    </footer>
  )
}

export default Footer
