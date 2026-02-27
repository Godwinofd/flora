import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const year = new Date().getFullYear()
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="navbar-logo">
                            Flor<span>Amor</span>
                        </a>
                        <p>{t('footer.desc')}</p>
                        <div className="footer-social" style={{ marginTop: '20px' }}>
                            <a
                                href="https://www.instagram.com/floramor.torrevieja/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                📸
                            </a>
                            <a
                                href="https://wa.me/34603104550"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                💬
                            </a>
                            <a href="tel:+34603104550" aria-label="Phone">
                                📞
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4>{t('footer.quickLinks')}</h4>
                        <div className="footer-links">
                            <a href="#home">{t('nav.home')}</a>
                            <a href="#about">{t('nav.about')}</a>
                            <a href="#collections">{t('nav.collections')}</a>
                            <a href="#gallery">{t('nav.gallery')}</a>
                            <a href="#contact">{t('nav.contact')}</a>
                        </div>
                    </div>

                    <div>
                        <h4>{t('footer.collections')}</h4>
                        <div className="footer-links">
                            <a href="#collections">{t('collections.petite.title')} (25–40€)</a>
                            <a href="#collections">{t('collections.signature.title')} (45–80€)</a>
                            <a href="#collections">{t('collections.luxe.title')} (100–350€)</a>
                            <a href="#collections">{t('collections.wedding.title')}</a>
                        </div>
                    </div>

                    <div>
                        <h4>{t('footer.contact')}</h4>
                        <div className="footer-links">
                            <a href="tel:+34603104550">+34 603 104 550</a>
                            <a href="https://wa.me/34603104550" target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                            <a href="https://www.instagram.com/floramor.torrevieja/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                            <a href="https://maps.google.com/?q=Calle+Ramón+Gallud+1+Torrevieja" target="_blank" rel="noopener noreferrer">
                                {t('footer.directions')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>{t('footer.rights', { year })}</span>
                    <span>{t('footer.crafted')}</span>
                </div>
            </div>
        </footer>
    )
}
