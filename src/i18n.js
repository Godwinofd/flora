import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: { home: 'Home', about: 'About', collections: 'Collections', gallery: 'Gallery', contact: 'Contact' },
            hero: {
                badge: 'Boutique de Flores — Torrevieja',
                title: 'Flowers with <1>Love</1>',
                tagline: 'Your Local Flower Shop',
                desc: 'Fresh, beautiful blooms arranged with care. From elegant flower boxes to hand-tied bouquets, we deliver joy across Torrevieja, La Zenia & Orihuela.',
                btnWhatapp: '💬 Order on WhatsApp',
                btnView: 'View Collections',
                scroll: 'Scroll'
            },
            about: {
                label: 'About Our Shop',
                title: 'Welcome to <1>FlorAmor</1>',
                p1: "Located in the heart of Torrevieja, FlorAmor is a local flower boutique dedicated to bringing you the freshest, most beautiful blooms. Whether you're looking for a simple gesture to brighten someone's day, an elegant flower box, or complete floral design for your wedding, we take pride in every stem we arrange.",
                p2: "We source our flowers daily to ensure quality and longevity, crafting each bouquet with care and attention to detail.",
                f1Title: 'Hand-Tied', f1Desc: 'Crafted with care by our florists',
                f2Title: 'Local Delivery', f2Desc: 'Delivering fresh flowers 7 days a week',
                f3Title: 'Fresh Blooms', f3Desc: 'Premium flowers sourced daily',
                f4Title: 'Weddings & Events', f4Desc: 'Custom floral design for your special day'
            },
            collections: {
                label: 'Our Collections',
                title: 'Shop Our <1>Flowers</1>',
                subtitle: 'Browse our signature styles, from delicate hand-tied bouquets to luxurious premium flower boxes.',
                petite: { title: 'Petite', price: '25 – 40€', desc: 'Beautiful, simple hand-tied bouquets perfect for a thoughtful "just because" gift.' },
                signature: { title: 'Signature', price: '45 – 80€', desc: 'Our most popular selection of elegant flower boxes and lush, medium-sized bouquets.', badge: 'Popular' },
                luxe: { title: 'Luxe', price: '100 – 350€', desc: 'Premium, large-scale arrangements featuring our finest blooms for when you want to make a statement.', badge: 'Premium' },
                wedding: { title: 'Wedding', price: 'Custom', desc: 'Custom bridal bouquets, centerpieces, and floral installations tailored to your vision.' }
            },
            gallery: {
                label: 'Our Portfolio',
                title: 'Recent <1>Work</1>',
                subtitle: 'Take a look at some of our favorite recent arrangements and wedding designs.',
                img1: 'Garden Roses', img2: 'Pink Peonies', img3: 'Romantic Bouquet', img4: 'Pastel Arrangement', img5: 'Elegant Centerpiece', img6: 'Sunflower Joy'
            },
            contact: {
                label: 'Get in Touch',
                title: "Let's Create Something <1>Beautiful</1>",
                subtitle: "Need to place an order or discuss wedding flowers? Send us a message or give us a call.",
                visit: 'Visit Us', call: 'Call or WhatsApp', hours: 'Delivery Hours', hoursDesc: '08:30 — 22:00, every day', areas: 'Service Areas',
                name: 'Your Name', email: 'Your Email', msg: 'How can we help you today?', subMsg: 'Send Message', sentMsg: '✓ Message Sent!'
            },
            footer: {
                desc: 'Your local flower boutique in Torrevieja, offering fresh everyday arrangements, elegant flower boxes, and bespoke wedding floristry.',
                quickLinks: 'Quick Links',
                collections: 'Collections',
                contact: 'Contact',
                directions: 'Get Directions',
                rights: '© {{year}} FlorAmor boutique. All rights reserved.',
                crafted: 'Crafted with 🤍 in Torrevieja'
            }
        }
    },
    es: {
        translation: {
            nav: { home: 'Inicio', about: 'Nosotros', collections: 'Colecciones', gallery: 'Galería', contact: 'Contacto' },
            hero: {
                badge: 'Boutique de Flores — Torrevieja',
                title: 'Flores con <1>Amor</1>',
                tagline: 'Tu Floristería Local',
                desc: 'Flores hermosas y frescas arregladas con cuidado. Desde elegantes cajas de flores hasta ramos atados a mano, entregamos alegría en Torrevieja, La Zenia y Orihuela.',
                btnWhatapp: '💬 Pedir por WhatsApp',
                btnView: 'Ver Colecciones',
                scroll: 'Descubrir'
            },
            about: {
                label: 'Sobre Nosotros',
                title: 'Bienvenidos a <1>FlorAmor</1>',
                p1: 'Ubicada en el corazón de Torrevieja, FlorAmor es una boutique floral local dedicada a traerte las flores más frescas y hermosas. Ya sea que busques un detalle sencillo para alegrar el día de alguien, una elegante caja de flores, o el diseño floral completo para tu boda, nos enorgullece cada tallo que arreglamos.',
                p2: 'Seleccionamos nuestras flores a diario para garantizar la calidad y durabilidad, creando cada ramo con cuidado y atención al detalle.',
                f1Title: 'Hecho a Mano', f1Desc: 'Creados con esmero por nuestros floristas',
                f2Title: 'Entrega Local', f2Desc: 'Entregamos flores frescas los 7 días',
                f3Title: 'Flores Frescas', f3Desc: 'Flores de primera calidad a diario',
                f4Title: 'Bodas y Eventos', f4Desc: 'Diseño floral a medida para tu gran día'
            },
            collections: {
                label: 'Nuestras Colecciones',
                title: 'Compra Tus <1>Flores</1>',
                subtitle: 'Explora nuestros estilos característicos, desde delicados ramos atados a mano hasta lujosas cajas de flores premium.',
                petite: { title: 'Petite', price: '25 – 40€', desc: 'Hermosos y sencillos ramos atados a mano, perfectos como un detalle especial.' },
                signature: { title: 'Signature', price: '45 – 80€', desc: 'Nuestra selección más popular de elegantes cajas de flores y ramos abundantes.', badge: 'Popular' },
                luxe: { title: 'Luxe', price: '100 – 350€', desc: 'Arreglos premium de gran tamaño con nuestras mejores flores para deslumbrar.', badge: 'Premium' },
                wedding: { title: 'Bodas', price: 'A Medida', desc: 'Ramos de novia personalizados, centros de mesa e instalaciones florales a tu gusto.' }
            },
            gallery: {
                label: 'Nuestro Portafolio',
                title: 'Trabajo <1>Reciente</1>',
                subtitle: 'Echa un vistazo a algunos de nuestros arreglos recientes favoritos y diseños para bodas.',
                img1: 'Rosas de Jardín', img2: 'Peonías Rosas', img3: 'Ramo Romántico', img4: 'Arreglo Pastel', img5: 'Centro de Mesa Elegante', img6: 'Alegría de Girasoles'
            },
            contact: {
                label: 'Ponte en Contacto',
                title: 'Creemos Algo <1>Hermoso</1>',
                subtitle: '¿Quieres hacer un pedido o hablar sobre las flores para tu boda? Envíanos un mensaje o llámanos.',
                visit: 'Visítanos', call: 'Llamada o WhatsApp', hours: 'Horario de Entrega', hoursDesc: '08:30 — 22:00, todos los días', areas: 'Áreas de Servicio',
                name: 'Tu Nombre', email: 'Tu Email', msg: '¿En qué podemos ayudarte hoy?', subMsg: 'Enviar Mensaje', sentMsg: '✓ ¡Mensaje Enviado!'
            },
            footer: {
                desc: 'Tu floristería local en Torrevieja, ofreciendo arreglos frescos diarios, elegantes cajas de flores y diseño floral para bodas a medida.',
                quickLinks: 'Enlaces Rápidos',
                collections: 'Colecciones',
                contact: 'Contacto',
                directions: 'Cómo Llegar',
                rights: '© {{year}} FlorAmor boutique. Todos los derechos reservados.',
                crafted: 'Hecho con 🤍 en Torrevieja'
            }
        }
    },
    de: {
        translation: {
            nav: { home: 'Startseite', about: 'Über uns', collections: 'Kollektionen', gallery: 'Galerie', contact: 'Kontakt' },
            hero: {
                badge: 'Boutique de Flores — Torrevieja',
                title: 'Blumen mit <1>Liebe</1>',
                tagline: 'Ihr lokaler Blumenladen',
                desc: 'Frische, wunderschöne Blumen mit Sorgfalt arrangiert. Von eleganten Blumenboxen bis hin zu handgebundenen Sträußen – wir liefern Freude in Torrevieja, La Zenia & Orihuela.',
                btnWhatapp: '💬 Über WhatsApp bestellen',
                btnView: 'Kollektionen ansehen',
                scroll: 'Scrollen'
            },
            about: {
                label: 'Über unseren Laden',
                title: 'Willkommen bei <1>FlorAmor</1>',
                p1: 'FlorAmor liegt im Herzen von Torrevieja und ist eine lokale Blumenboutique, die sich darauf spezialisiert hat, Ihnen die frischesten und schönsten Blumen zu bringen. Ob Sie nach einer einfachen Geste suchen, um jemandem den Tag zu verschönern, einer eleganten Blumenbox oder einem kompletten floralen Design für Ihre Hochzeit – wir sind stolz auf jeden Stiel, den wir arrangieren.',
                p2: 'Wir beziehen unsere Blumen täglich, um Qualität und Langlebigkeit zu gewährleisten, und fertigen jeden Strauß mit Sorgfalt und Liebe zum Detail.',
                f1Title: 'Handgebunden', f1Desc: 'Mit Sorgfalt von unseren Floristen gefertigt',
                f2Title: 'Lokale Lieferung', f2Desc: 'Wir liefern 7 Tage die Woche frische Blumen',
                f3Title: 'Frische Blumen', f3Desc: 'Täglich bezogene Premium-Blumen',
                f4Title: 'Hochzeiten & Events', f4Desc: 'Maßgeschneidertes florales Design für Ihren besonderen Tag'
            },
            collections: {
                label: 'Unsere Kollektionen',
                title: 'Kaufen Sie unsere <1>Blumen</1>',
                subtitle: 'Durchstöbern Sie unsere einzigartigen Styles, von zarten handgebundenen Sträußen bis hin zu luxuriösen Premium-Blumenboxen.',
                petite: { title: 'Petite', price: '25 – 40€', desc: 'Wunderschöne, einfache handgebundene Sträuße, perfekt für ein aufmerksames Geschenk "einfach so".' },
                signature: { title: 'Signature', price: '45 – 80€', desc: 'Unsere beliebteste Auswahl an eleganten Blumenboxen und üppigen, mittelgroßen Sträußen.', badge: 'Beliebt' },
                luxe: { title: 'Luxe', price: '100 – 350€', desc: 'Premium, großformatige Arrangements mit unseren feinsten Blumen, wenn Sie ein Statement setzen möchten.', badge: 'Premium' },
                wedding: { title: 'Hochzeit', price: 'Individuell', desc: 'Maßgeschneiderte Brautsträuße, Tischdekorationen und florale Installationen ganz nach Ihren Vorstellungen.' }
            },
            gallery: {
                label: 'Unser Portfolio',
                title: 'Aktuelle <1>Arbeiten</1>',
                subtitle: 'Werfen Sie einen Blick auf einige unserer liebsten aktuellen Arrangements und Hochzeitsdesigns.',
                img1: 'Gartenrosen', img2: 'Rosa Pfingstrosen', img3: 'Romantischer Strauß', img4: 'Pastell-Arrangement', img5: 'Elegante Tischdeko', img6: 'Sonnenblumenfreude'
            },
            contact: {
                label: 'Kontakt aufnehmen',
                title: 'Lassen Sie uns etwas <1>Schönes</1> erschaffen',
                subtitle: 'Möchten Sie eine Bestellung aufgeben oder über Hochzeitsblumen sprechen? Senden Sie uns eine Nachricht oder rufen Sie uns an.',
                visit: 'Besuchen Sie uns', call: 'Anruf oder WhatsApp', hours: 'Lieferzeiten', hoursDesc: '08:30 — 22:00, jeden Tag', areas: 'Liefergebiete',
                name: 'Ihr Name', email: 'Ihre E-Mail', msg: 'Wie können wir Ihnen heute helfen?', subMsg: 'Nachricht senden', sentMsg: '✓ Nachricht gesendet!'
            },
            footer: {
                desc: 'Ihre lokale Blumenboutique in Torrevieja, die frische Alltagsarrangements, elegante Blumenboxen und maßgeschneiderte Hochzeitsfloristik anbietet.',
                quickLinks: 'Schnelllinks',
                collections: 'Kollektionen',
                contact: 'Kontakt',
                directions: 'Wegbeschreibung',
                rights: '© {{year}} FlorAmor boutique. Alle Rechte vorbehalten.',
                crafted: 'Mit 🤍 in Torrevieja gefertigt'
            }
        }
    },
    fr: {
        translation: {
            nav: { home: 'Accueil', about: 'À propos', collections: 'Collections', gallery: 'Galerie', contact: 'Contact' },
            hero: {
                badge: 'Boutique de Flores — Torrevieja',
                title: 'Des fleurs avec <1>Amour</1>',
                tagline: 'Votre Fleuriste Local',
                desc: 'Des fleurs fraîches et magnifiques arrangées avec soin. Des élégantes boîtes à fleurs aux bouquets liés à la main, nous livrons de la joie à travers Torrevieja, La Zenia et Orihuela.',
                btnWhatapp: '💬 Commander sur WhatsApp',
                btnView: 'Voir nos Collections',
                scroll: 'Découvrir'
            },
            about: {
                label: 'À propos de notre boutique',
                title: 'Bienvenue chez <1>FlorAmor</1>',
                p1: 'Située au cœur de Torrevieja, FlorAmor est une boutique de fleurs locale dédiée à vous apporter les fleurs les plus fraîches et les plus belles. Que vous cherchiez un geste simple pour illuminer la journée de quelqu\'un, une élégante boîte de fleurs ou un design floral complet pour votre mariage, nous sommes fiers de chaque tige que nous arrangeons.',
                p2: 'Nous nous approvisionnons en fleurs quotidiennement pour garantir fraîcheur et longévité, en concevant chaque bouquet avec soin et attention aux détails.',
                f1Title: 'Lié à la main', f1Desc: 'Fabriqué avec soin par nos fleuristes',
                f2Title: 'Livraison locale', f2Desc: 'Livraison de fleurs fraîches 7 jours sur 7',
                f3Title: 'Fleurs fraîches', f3Desc: 'Fleurs premium approvisionnées chaque jour',
                f4Title: 'Mariages & Événements', f4Desc: 'Design floral sur mesure pour votre grand jour'
            },
            collections: {
                label: 'Nos Collections',
                title: 'Achetez vos <1>Fleurs</1>',
                subtitle: 'Découvrez nos styles signature, des délicats bouquets liés à la main aux luxueuses boîtes à fleurs premium.',
                petite: { title: 'Petite', price: '25 – 40€', desc: 'Beaux bouquets simples liés à la main, parfaits pour un cadeau attentionné "juste comme ça".' },
                signature: { title: 'Signature', price: '45 – 80€', desc: 'Notre sélection la plus populaire d\'élégantes boîtes à fleurs et de bouquets moyens luxuriants.', badge: 'Populaire' },
                luxe: { title: 'Luxe', price: '100 – 350€', desc: 'Arrangements premium de grande envergure mettant en vedette nos plus belles fleurs pout marquer les esprits.', badge: 'Premium' },
                wedding: { title: 'Mariage', price: 'Sur mesure', desc: 'Bouquets de mariée personnalisés, centres de table et installations florales adaptés à votre vision.' }
            },
            gallery: {
                label: 'Notre Portefeuille',
                title: 'Travaux <1>Récents</1>',
                subtitle: 'Jetez un œil à certains de nos récents arrangements préférés et créations de mariage.',
                img1: 'Roses de Jardin', img2: 'Pivoines Roses', img3: 'Bouquet Romantique', img4: 'Arrangement Pastel', img5: 'Centre de Table Élégant', img6: 'Joie de Tournesol'
            },
            contact: {
                label: 'Prendre Contact',
                title: 'Créons Quelque Chose de <1>Magnifique</1>',
                subtitle: 'Besoin de passer une commande ou de discuter de fleurs de mariage ? Envoyez-nous un message ou appelez-nous.',
                visit: 'Rendez-nous visite', call: 'Appelez ou WhatsApp', hours: 'Heures de livraison', hoursDesc: '08:30 — 22:00, tous les jours', areas: 'Zones de service',
                name: 'Votre Nom', email: 'Votre Email', msg: 'Comment pouvons-nous vous aider aujourd\'hui ?', subMsg: 'Envoyer le Message', sentMsg: '✓ Message Envoyé !'
            },
            footer: {
                desc: 'Votre boutique de fleurs locale à Torrevieja, offrant des arrangements frais quotidiens, d\'élégantes boîtes à fleurs et une fleuristerie de mariage sur mesure.',
                quickLinks: 'Liens Rapides',
                collections: 'Collections',
                contact: 'Contact',
                directions: 'Itinéraire',
                rights: '© {{year}} FlorAmor boutique. Tous droits réservés.',
                crafted: 'Créé avec 🤍 à Torrevieja'
            }
        }
    },
    it: {
        translation: {
            nav: { home: 'Home', about: 'Chi siamo', collections: 'Collezioni', gallery: 'Galleria', contact: 'Contatti' },
            hero: {
                badge: 'Boutique de Flores — Torrevieja',
                title: 'Fiori con <1>Amore</1>',
                tagline: 'Il tuo fioraio locale',
                desc: 'Fiori freschi e bellissimi disposti con cura. Dalle eleganti fioriere ai bouquet legati a mano, consegniamo gioia a Torrevieja, La Zenia e Orihuela.',
                btnWhatapp: '💬 Ordina su WhatsApp',
                btnView: 'Vedi le Collezioni',
                scroll: 'Scorri'
            },
            about: {
                label: 'Informazioni sul nostro negozio',
                title: 'Benvenuti a <1>FlorAmor</1>',
                p1: 'Situato nel cuore di Torrevieja, FlorAmor è una boutique floreale locale dedicata a offrirti i fiori più freschi e belli. Che tu stia cercando un gesto semplice per illuminare la giornata di qualcuno, un\'elegante scatola di fiori o un design floreale completo per il tuo matrimonio, siamo orgogliosi di ogni stelo che organizziamo.',
                p2: 'Ci riforniamo di fiori quotidianamente per garantire qualità e longevità, realizzando ogni bouquet con cura e attenzione ai dettagli.',
                f1Title: 'Legato a mano', f1Desc: 'Realizzato con cura dai nostri fioristi',
                f2Title: 'Consegna locale', f2Desc: 'Consegna di fiori freschi 7 giorni su 7',
                f3Title: 'Fiori Freschi', f3Desc: 'Fiori premium forniti ogni giorno',
                f4Title: 'Matrimoni ed Eventi', f4Desc: 'Design floreale personalizzato per il tuo giorno speciale'
            },
            collections: {
                label: 'Le Nostre Collezioni',
                title: 'Acquista i nostri <1>Fiori</1>',
                subtitle: 'Sfoglia i nostri stili inconfondibili, dai delicati bouquet legati a mano alle lussuose scatole di fiori premium.',
                petite: { title: 'Petite', price: '25 – 40€', desc: 'Bellissimi bouquet legati a mano perfetti per un regalo premuroso "solo perché".' },
                signature: { title: 'Signature', price: '45 – 80€', desc: 'La nostra selezione più popolare di eleganti scatole di fiori e bouquet lussureggianti di medie dimensioni.', badge: 'Popolare' },
                luxe: { title: 'Luxe', price: '100 – 350€', desc: 'Composizioni premium su larga scala con i nostri fiori più belli per quando vuoi fare colpo.', badge: 'Premium' },
                wedding: { title: 'Matrimonio', price: 'Su misura', desc: 'Bouquet da sposa personalizzati, centrotavola e installazioni floreali su misura per la tua visione.' }
            },
            gallery: {
                label: 'Il Nostro Portfolio',
                title: 'Lavori <1>Recenti</1>',
                subtitle: 'Dai un\'occhiata ad alcune delle nostre composizioni recenti preferite e ai design per matrimoni.',
                img1: 'Rose da Giardino', img2: 'Peonie Rosa', img3: 'Bouquet Romantico', img4: 'Composizione Pastello', img5: 'Centrotavola Elegante', img6: 'Gioia di Girasoli'
            },
            contact: {
                label: 'Mettiti in Contatto',
                title: 'Creiamo Qualcosa di <1>Bellissimo</1>',
                subtitle: 'Devi effettuare un ordine o discutere di fiori per matrimoni? Inviaci un messaggio o chiamaci.',
                visit: 'Vieni a trovarci', call: 'Chiama o WhatsApp', hours: 'Orari di consegna', hoursDesc: '08:30 — 22:00, tutti i giorni', areas: 'Aree di servizio',
                name: 'Il Tuo Nome', email: 'La Tua Email', msg: 'Come possiamo aiutarti oggi?', subMsg: 'Invia Messaggio', sentMsg: '✓ Messaggio Inviato!'
            },
            footer: {
                desc: 'La tua boutique di fiori locale a Torrevieja, che offre composizioni quotidiane fresche, eleganti fioriere e composizioni floreali per matrimoni su misura.',
                quickLinks: 'Link Rapidi',
                collections: 'Collezioni',
                contact: 'Contatto',
                directions: 'Ottieni Indicazioni',
                rights: '© {{year}} FlorAmor boutique. Tutti i diritti riservati.',
                crafted: 'Realizzato con 🤍 a Torrevieja'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        detection: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
