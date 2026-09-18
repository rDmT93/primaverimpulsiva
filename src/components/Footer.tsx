import { useLanguage } from '../i18n/LanguageContext.tsx'

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="brand-mark">BR</span>
          <span className="brand-name">{t.brand.name}</span>
        </div>
        <p>
          &copy; {year} {t.brand.name}. {t.footer.rights}
        </p>
        <p>{t.footer.license}</p>
      </div>
    </footer>
  )
}

export default Footer
