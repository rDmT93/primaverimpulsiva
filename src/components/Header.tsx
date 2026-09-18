import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.tsx'

const NAV_KEYS = ['about', 'services', 'projects', 'contact'] as const

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">BR</span>
          <span className="brand-name">{t.brand.name}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <a href={`#${key}`} onClick={() => setMenuOpen(false)}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-extras">
            <button
              type="button"
              className="lang-switch"
              onClick={toggleLang}
              aria-label={t.lang.switchTo}
            >
              <span className={lang === 'pt' ? 'is-active' : ''}>PT</span>
              <span aria-hidden="true">/</span>
              <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            </button>
            <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              {t.nav.quote}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
