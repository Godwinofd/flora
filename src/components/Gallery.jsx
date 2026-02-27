import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Gallery() {
    const { t } = useTranslation()

    const galleryItems = [
        {
            src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
            label: t('gallery.img1'),
        },
        {
            src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
            label: t('gallery.img2'),
        },
        {
            src: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80',
            label: t('gallery.img3'),
        },
        {
            src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
            label: t('gallery.img4'),
        },
        {
            src: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80',
            label: t('gallery.img5'),
        },
        {
            src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80',
            label: t('gallery.img6'),
        },
    ]

    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="section-label reveal">{t('gallery.label')}</span>
                    <h2 className="section-title reveal reveal-delay-1">
                        <Trans i18nKey="gallery.title" components={{ 1: <em /> }} />
                    </h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item, i) => (
                        <div key={i} className={`gallery-item reveal reveal-delay-${(i % 4) + 1}`}>
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <span>{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
