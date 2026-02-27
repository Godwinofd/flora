import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Collections() {
    const { t } = useTranslation()

    const collections = [
        {
            title: t('collections.petite.title'),
            price: t('collections.petite.price'),
            description: t('collections.petite.desc'),
            image: '/images/petite.png',
            badge: null,
        },
        {
            title: t('collections.signature.title'),
            price: t('collections.signature.price'),
            description: t('collections.signature.desc'),
            image: '/images/signature.png',
            badge: t('collections.signature.badge'),
        },
        {
            title: t('collections.luxe.title'),
            price: t('collections.luxe.price'),
            description: t('collections.luxe.desc'),
            image: '/images/luxe.png',
            badge: t('collections.luxe.badge'),
        },
        {
            title: t('collections.wedding.title'),
            price: t('collections.wedding.price'),
            description: t('collections.wedding.desc'),
            image: '/images/wedding.png',
            badge: null,
        },
    ]

    return (
        <section id="collections" className="collections">
            <div className="container">
                <div className="section-header">
                    <span className="section-label reveal">{t('collections.label')}</span>
                    <h2 className="section-title reveal reveal-delay-1">
                        <Trans i18nKey="collections.title" components={{ 1: <em /> }} />
                    </h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        {t('collections.subtitle')}
                    </p>
                </div>

                <div className="collections-grid">
                    {collections.map((item, i) => (
                        <div key={i} className={`collection-card reveal reveal-delay-${i + 1}`}>
                            {item.badge && (
                                <div className="collection-card-badge">{item.badge}</div>
                            )}
                            <div className="collection-card-image">
                                <img src={item.image} alt={`${item.title} arrangement`} />
                                <div className="collection-card-overlay"></div>
                            </div>
                            <div className="collection-card-body">
                                <h3>{item.title}</h3>
                                <div className="price">{item.price}</div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
