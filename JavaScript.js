const STORAGE_KEYS = {
    language: 'portfolioLanguage',
    theme: 'portfolioTheme'
};

const translations = {
    en: {
        meta: {
            title: 'Adrian Andrada Lockmann | Full-Stack Developer',
            description: 'Portfolio of Adrian Andrada Lockmann, a full-stack developer focused on web products, AI-assisted marketing systems, and practical digital experiences.',
            themeLight: '#fbfcf8',
            themeDark: '#0c1110'
        },
        brand: {
            home: 'Go to homepage'
        },
        nav: {
            aria: 'Primary navigation',
            about: 'About',
            ai: 'AI Systems',
            work: 'Work',
            skills: 'Skills',
            contact: 'Contact'
        },
        controls: {
            group: 'Display controls',
            languageLabel: 'ES',
            languageAria: 'Change language to Spanish',
            menu: 'Toggle navigation',
            themeDarkLabel: 'Dark',
            themeLightLabel: 'Light',
            themeDarkAria: 'Switch to dark mode',
            themeLightAria: 'Switch to light mode'
        },
        hero: {
            eyebrow: 'Full-stack developer / AI marketing systems',
            lede: 'I build polished web experiences and AI-assisted marketing systems with practical front-end craft, reliable back-end logic, and creative workflows powered by agents like Codex and Claude.',
            actionsAria: 'Primary actions',
            viewProjects: 'View projects',
            contactMe: 'Contact me',
            statsAria: 'Portfolio highlights',
            statCoding: 'Coding since',
            statTools: 'Core tools',
            statAi: 'Agent workflows'
        },
        profile: {
            aria: 'Developer profile',
            imageAlt: 'Portrait of Adrian Andrada Lockmann',
            availability: 'Available for freelance work',
            role: 'Web developer',
            title: 'Clean interfaces, calm systems, useful details.',
            copy: 'Focused on responsive layouts, maintainable code, API-driven interfaces, and projects that are easy for real people to understand and use.'
        },
        about: {
            eyebrow: 'About',
            title: 'A practical developer who turns rough ideas into usable web products.',
            copyOne: 'I am a self-taught developer with a strong bias toward building, learning, and refining. My work combines front-end structure, visual polish, and back-end thinking so each project has both a good surface and a dependable foundation.',
            copyTwo: 'I care about readable code, clear communication, responsive design, and keeping momentum from first idea to final delivery.',
            valuesAria: 'Working strengths',
            valueOneTitle: 'Frontend clarity',
            valueOneCopy: 'Interfaces that are easy to scan, responsive across devices, and built with careful visual hierarchy.',
            valueTwoTitle: 'Backend mindset',
            valueTwoCopy: 'Comfort with Python, Django, data flow, and the application logic that keeps products stable.',
            valueThreeTitle: 'Steady collaboration',
            valueThreeCopy: 'A responsible working style shaped around learning quickly, communicating clearly, and improving the result.'
        },
        ai: {
            eyebrow: 'AI marketing systems',
            title: 'Building creative engines with agents, automation, and product thinking.',
            lede: 'I use AI agents like Codex and Claude to design marketing systems that move from strategy to publishable content faster: campaign concepts, characters, prompts, landing copy, visual directions, and reusable creative packs.',
            sapTitle: 'Sap Sap character workflows',
            sapCopy: 'For Sap Sap-style projects, I help shape character-driven campaigns with story structures, 9:16 visual prompts, content packs, hooks, scripts, and asset planning that can scale across posts, ads, landing pages, and product education.',
            tagsAria: 'AI workflow tags',
            tagAgents: 'AI Agents',
            tagAutomation: 'Marketing Automation',
            cardOneTitle: 'Content pipelines',
            cardOneCopy: 'Systems for turning ideas into repeatable briefs, scripts, captions, prompts, and campaign assets.',
            cardTwoTitle: 'Character campaigns',
            cardTwoCopy: 'Brand worlds, recurring characters, story arcs, and visual consistency for social-first marketing.',
            cardThreeTitle: 'Web + marketing',
            cardThreeCopy: 'Landing pages, product messaging, automation-friendly assets, and interfaces that support growth work.'
        },
        projects: {
            eyebrow: 'Selected work',
            title: 'Projects with a clear idea, a working interface, and room to grow.',
            tagEcommerce: 'E-commerce',
            tagGameLogic: 'Game logic',
            tagMemoryGame: 'Memory game',
            tagCards: 'Cards',
            tagAudio: 'Audio',
            tagInteraction: 'Interaction',
            openProject: 'Open project',
            lootAlt: 'Lootseeker E-Commerce preview',
            quoteAlt: 'Random Quote Generator preview',
            simonAlt: 'Simon Says game preview',
            pokememoAlt: 'PokeMEMO project preview',
            pokedexAlt: 'Pokedex API project preview',
            drumAlt: 'Drum Machine project preview',
            lootCopy: 'A full e-commerce project with product browsing, commerce flows, and back-end structure.',
            quoteCopy: 'A compact front-end app focused on simple interaction, clean presentation, and quick feedback.',
            simonCopy: 'A memory game that turns event handling, state, and timing into a playful browser experience.',
            pokememoCopy: 'A Pokemon-inspired memory game with visual matching, user feedback, and replayable flow.',
            pokedexCopy: 'An API-driven Pokedex interface that practices data fetching, rendering, and searchable content.',
            drumCopy: 'An interactive sound pad that connects keyboard input, audio playback, and immediate UI response.'
        },
        skills: {
            eyebrow: 'Stack',
            title: 'A balanced toolkit for front-end, back-end, and responsive product work.',
            aria: 'Technical skills'
        },
        contact: {
            eyebrow: 'Contact',
            title: 'Have a project, idea, or collaboration in mind?',
            copy: 'Send me a message and I will get back to you with a clear next step.'
        },
        footer: {
            copy: '© {year} Adrian Andrada Lockmann. Built with HTML, CSS, and JavaScript.'
        }
    },
    es: {
        meta: {
            title: 'Adrian Andrada Lockmann | Desarrollador Full-Stack',
            description: 'Portfolio de Adrian Andrada Lockmann, desarrollador full-stack enfocado en productos web, sistemas de marketing asistidos por IA y experiencias digitales prácticas.',
            themeLight: '#fbfcf8',
            themeDark: '#0c1110'
        },
        brand: {
            home: 'Ir al inicio'
        },
        nav: {
            aria: 'Navegación principal',
            about: 'Sobre mí',
            ai: 'Sistemas IA',
            work: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        controls: {
            group: 'Controles de visualización',
            languageLabel: 'EN',
            languageAria: 'Cambiar idioma a inglés',
            menu: 'Alternar navegación',
            themeDarkLabel: 'Oscuro',
            themeLightLabel: 'Claro',
            themeDarkAria: 'Cambiar a modo oscuro',
            themeLightAria: 'Cambiar a modo claro'
        },
        hero: {
            eyebrow: 'Desarrollador full-stack / sistemas de marketing con IA',
            lede: 'Construyo experiencias web pulidas y sistemas de marketing asistidos por IA con criterio front-end, lógica back-end confiable y flujos creativos impulsados por agentes como Codex y Claude.',
            actionsAria: 'Acciones principales',
            viewProjects: 'Ver proyectos',
            contactMe: 'Contactame',
            statsAria: 'Datos destacados del portfolio',
            statCoding: 'Programando desde',
            statTools: 'Herramientas clave',
            statAi: 'Flujos con agentes'
        },
        profile: {
            aria: 'Perfil de desarrollador',
            imageAlt: 'Retrato de Adrian Andrada Lockmann',
            availability: 'Disponible para trabajos freelance',
            role: 'Desarrollador web',
            title: 'Interfaces claras, sistemas calmos, detalles útiles.',
            copy: 'Enfocado en layouts responsivos, código mantenible, interfaces conectadas a APIs y proyectos fáciles de entender y usar para personas reales.'
        },
        about: {
            eyebrow: 'Sobre mí',
            title: 'Un desarrollador práctico que convierte ideas iniciales en productos web usables.',
            copyOne: 'Soy un desarrollador autodidacta con una fuerte orientación a construir, aprender y mejorar. Mi trabajo combina estructura front-end, pulido visual y pensamiento back-end para que cada proyecto tenga una buena superficie y una base confiable.',
            copyTwo: 'Me importa escribir código legible, comunicar con claridad, diseñar de forma responsiva y mantener el impulso desde la primera idea hasta la entrega final.',
            valuesAria: 'Fortalezas de trabajo',
            valueOneTitle: 'Claridad frontend',
            valueOneCopy: 'Interfaces fáciles de escanear, responsivas en distintos dispositivos y construidas con una jerarquía visual cuidada.',
            valueTwoTitle: 'Mentalidad backend',
            valueTwoCopy: 'Comodidad con Python, Django, flujo de datos y la lógica de aplicación que mantiene estables los productos.',
            valueThreeTitle: 'Colaboración constante',
            valueThreeCopy: 'Una forma de trabajar responsable, orientada a aprender rápido, comunicar con claridad y mejorar el resultado.'
        },
        ai: {
            eyebrow: 'Sistemas de marketing con IA',
            title: 'Construyendo motores creativos con agentes, automatización y pensamiento de producto.',
            lede: 'Uso agentes de IA como Codex y Claude para diseñar sistemas de marketing que pasan más rápido de la estrategia al contenido publicable: conceptos de campaña, personajes, prompts, copy para landings, dirección visual y packs creativos reutilizables.',
            sapTitle: 'Flujos de personajes para Sap Sap',
            sapCopy: 'Para proyectos estilo Sap Sap, ayudo a crear campañas basadas en personajes con estructuras narrativas, prompts visuales 9:16, packs de contenido, hooks, guiones y planificación de assets que pueden escalar en posts, anuncios, landings y educación de producto.',
            tagsAria: 'Etiquetas de flujos de IA',
            tagAgents: 'Agentes IA',
            tagAutomation: 'Automatización de marketing',
            cardOneTitle: 'Pipelines de contenido',
            cardOneCopy: 'Sistemas para convertir ideas en briefs, guiones, captions, prompts y assets de campaña repetibles.',
            cardTwoTitle: 'Campañas con personajes',
            cardTwoCopy: 'Mundos de marca, personajes recurrentes, arcos narrativos y consistencia visual para marketing social-first.',
            cardThreeTitle: 'Web + marketing',
            cardThreeCopy: 'Landings, mensajes de producto, assets listos para automatización e interfaces que apoyan el crecimiento.'
        },
        projects: {
            eyebrow: 'Trabajo seleccionado',
            title: 'Proyectos con una idea clara, una interfaz funcional y espacio para crecer.',
            tagEcommerce: 'E-commerce',
            tagGameLogic: 'Lógica de juego',
            tagMemoryGame: 'Juego de memoria',
            tagCards: 'Cartas',
            tagAudio: 'Audio',
            tagInteraction: 'Interacción',
            openProject: 'Abrir proyecto',
            lootAlt: 'Vista previa de Lootseeker E-Commerce',
            quoteAlt: 'Vista previa de Random Quote Generator',
            simonAlt: 'Vista previa del juego Simon Says',
            pokememoAlt: 'Vista previa del proyecto PokeMEMO',
            pokedexAlt: 'Vista previa del proyecto Pokedex API',
            drumAlt: 'Vista previa del proyecto Drum Machine',
            lootCopy: 'Un proyecto e-commerce completo con exploración de productos, flujos comerciales y estructura back-end.',
            quoteCopy: 'Una app front-end compacta enfocada en interacción simple, presentación limpia y respuesta rápida.',
            simonCopy: 'Un juego de memoria que convierte manejo de eventos, estado y tiempos en una experiencia lúdica de navegador.',
            pokememoCopy: 'Un juego de memoria inspirado en Pokemon con emparejamiento visual, feedback para el usuario y flujo rejugable.',
            pokedexCopy: 'Una interfaz Pokedex conectada a una API para practicar fetch de datos, renderizado y contenido buscable.',
            drumCopy: 'Un pad de sonido interactivo que conecta input de teclado, reproducción de audio y respuesta visual inmediata.'
        },
        skills: {
            eyebrow: 'Stack',
            title: 'Un conjunto equilibrado de herramientas para front-end, back-end y productos responsivos.',
            aria: 'Habilidades técnicas'
        },
        contact: {
            eyebrow: 'Contacto',
            title: '¿Tenés un proyecto, idea o colaboración en mente?',
            copy: 'Mandame un mensaje y te respondo con un próximo paso claro.'
        },
        footer: {
            copy: '© {year} Adrian Andrada Lockmann. Construido con HTML, CSS y JavaScript.'
        }
    }
};

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageLabel = document.querySelector('[data-language-label]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');
const metaDescription = document.querySelector('meta[name="description"]');
const themeColor = document.querySelector('meta[name="theme-color"]');

let currentLanguage = getStoredValue(STORAGE_KEYS.language, 'en', ['en', 'es']);
let currentTheme = getStoredValue(STORAGE_KEYS.theme, 'light', ['light', 'dark']);

function getStoredValue(key, fallback, allowedValues) {
    const storedValue = window.localStorage.getItem(key);
    return allowedValues.includes(storedValue) ? storedValue : fallback;
}

function getTranslation(key, language = currentLanguage) {
    return key.split('.').reduce((group, part) => {
        if (!group || typeof group !== 'object') {
            return undefined;
        }

        return group[part];
    }, translations[language]);
}

function interpolate(value) {
    return value.replace('{year}', String(new Date().getFullYear()));
}

function setLanguage(language) {
    currentLanguage = translations[language] ? language : 'en';
    document.documentElement.lang = currentLanguage;
    window.localStorage.setItem(STORAGE_KEYS.language, currentLanguage);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translation = getTranslation(element.dataset.i18n);

        if (translation) {
            element.textContent = interpolate(translation);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const translation = getTranslation(element.dataset.i18nAria);

        if (translation) {
            element.setAttribute('aria-label', interpolate(translation));
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const translation = getTranslation(element.dataset.i18nAlt);

        if (translation) {
            element.setAttribute('alt', interpolate(translation));
        }
    });

    document.title = translations[currentLanguage].meta.title;

    if (metaDescription) {
        metaDescription.setAttribute('content', translations[currentLanguage].meta.description);
    }

    updateControlLabels();
}

function setTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    window.localStorage.setItem(STORAGE_KEYS.theme, currentTheme);

    if (themeColor) {
        themeColor.setAttribute('content', translations[currentLanguage].meta[currentTheme === 'dark' ? 'themeDark' : 'themeLight']);
    }

    updateControlLabels();
}

function updateControlLabels() {
    const currentTranslations = translations[currentLanguage];
    const nextThemeIsDark = currentTheme === 'light';

    if (languageLabel && languageToggle) {
        languageLabel.textContent = currentTranslations.controls.languageLabel;
        languageToggle.setAttribute('aria-label', currentTranslations.controls.languageAria);
    }

    if (themeLabel && themeToggle) {
        themeLabel.textContent = nextThemeIsDark
            ? currentTranslations.controls.themeDarkLabel
            : currentTranslations.controls.themeLightLabel;
        themeToggle.setAttribute('aria-label', nextThemeIsDark
            ? currentTranslations.controls.themeDarkAria
            : currentTranslations.controls.themeLightAria);
    }
}

setTheme(currentTheme);
setLanguage(currentLanguage);

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        setLanguage(currentLanguage === 'en' ? 'es' : 'en');
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

document.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('a[href^="#"]');

    if (!clickedLink) {
        return;
    }

    const targetId = clickedLink.getAttribute('href');
    const targetElement = targetId === '#top' ? document.body : document.querySelector(targetId);

    if (!targetElement) {
        return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (navLinks && navToggle) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
    const activeSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navItems.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach((section) => activeSectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.14
    });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
