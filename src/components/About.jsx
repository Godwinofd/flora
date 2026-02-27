import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()
    return (
        <section id="about" className="about">
            <div className="container about-grid">
                <div className="about-image reveal">
                    <img src="/images/about.png" alt="FlorAmor flower boutique interior" />
                </div>

                <div className="about-text">
                    <span className="section-label reveal">{t('about.label')}</span>
                    <h2 className="section-title reveal reveal-delay-1">
                        <Trans i18nKey="about.title" components={{ 1: <em /> }} />
                    </h2>
                    <p className="reveal reveal-delay-2">
                        {t('about.p1')}
                    </p>
                    <p className="reveal reveal-delay-2">
                        {t('about.p2')}
                    </p>

                    <div className="about-features reveal reveal-delay-3">
                        <div className="about-feature">
                            <div className="about-feature-icon">🌹</div>
                            <div>
                                <h4>{t('about.f1Title')}</h4>
                                <p>{t('about.f1Desc')}</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">🚚</div>
                            <div>
                                <h4>{t('about.f2Title')}</h4>
                                <p>{t('about.f2Desc')}</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">💐</div>
                            <div>
                                <h4>{t('about.f3Title')}</h4>
                                <p>{t('about.f3Desc')}</p>
                            </div>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-icon">💍</div>
                            <div>
                                <h4>{t('about.f4Title')}</h4>
                                <p>{t('about.f4Desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
