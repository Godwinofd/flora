import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label reveal">{t('contact.label')}</span>
                    <h2 className="section-title reveal reveal-delay-1">
                        <Trans i18nKey="contact.title" components={{ 1: <em /> }} />
                    </h2>
                    <p className="section-subtitle reveal reveal-delay-2">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="reveal">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">📍</div>
                                <div>
                                    <h4>{t('contact.visit')}</h4>
                                    <p>Calle Ramón Gallud, 1<br />03181 Torrevieja, Alicante</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">📞</div>
                                <div>
                                    <h4>{t('contact.call')}</h4>
                                    <p>
                                        <a href="tel:+34603104550">+34 603 104 550</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">🕐</div>
                                <div>
                                    <h4>{t('contact.hours')}</h4>
                                    <p>{t('contact.hoursDesc')}</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">🌍</div>
                                <div>
                                    <h4>{t('contact.areas')}</h4>
                                    <p>Torrevieja · La Zenia · Orihuela</p>
                                </div>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-group">
                                    <input
                                        type="text"
                                        placeholder={t('contact.name')}
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <input
                                        type="email"
                                        placeholder={t('contact.email')}
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <textarea
                                        placeholder={t('contact.msg')}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    {submitted ? t('contact.sentMsg') : t('contact.subMsg')}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="contact-map reveal reveal-delay-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6!2d-0.6844!3d37.9774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63aa1dbfbfbfbf%3A0x0!2sCalle%20Ram%C3%B3n%20Gallud%2C%201%2C%2003181%20Torrevieja%2C%20Spain!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="FlorAmor location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
