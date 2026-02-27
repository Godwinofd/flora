import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.collections'), href: '#collections' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, '#home')}>
            Flor<span>Amor</span>
          </a>

          <ul className="navbar-links">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <select className="language-selector" value={i18n.language.substring(0, 2)} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
                <option value="it">IT</option>
              </select>
            </li>
          </ul>

          <button
            className={`navbar-burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <select
          className="language-selector mobile-language-selector"
          value={i18n.language?.substring(0, 2) || 'es'}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
            setMenuOpen(false);
          }}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
        </select>
      </div>
    </>
  )
}
