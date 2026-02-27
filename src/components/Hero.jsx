import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()
    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <img src="/images/hero.png" alt="Luxury flower arrangement by FlorAmor" />
            </div>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="hero-badge">{t('hero.badge')}</div>
                <h1 className="hero-title">
                    <Trans i18nKey="hero.title" components={{ 1: <em /> }} />
                </h1>
                <p className="hero-tagline">{t('hero.tagline')}</p>
                <p className="hero-description">
                    {t('hero.desc')}
                </p>
                <div className="hero-buttons">
                    <a
                        href="https://wa.me/34603104550"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        {t('hero.btnWhatapp')}
                    </a>
                    <a href="#collections" className="btn btn-outline"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        {t('hero.btnView')}
                    </a>
                </div>
            </div>

            <div className="hero-scroll">
                <span>{t('hero.scroll')}</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    )
}
