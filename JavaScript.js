const STORAGE_KEYS = {
    language: 'portfolioLanguage',
    theme: 'portfolioTheme',
    comandaOps: 'portfolioComandaOpsState'
};

const translations = {
    en: {
        meta: {
            title: 'Adrian Andrada Lockmann | Full-Stack Web Developer',
            description: 'Portfolio of Adrian Andrada Lockmann, a full-stack web developer focused on business tools, product interfaces, and practical AI-assisted workflows.',
            themeLight: '#fbfcf8',
            themeDark: '#0c1110'
        },
        brand: {
            home: 'Go to homepage'
        },
        nav: {
            aria: 'Primary navigation',
            about: 'About',
            ai: 'Systems',
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
            eyebrow: 'Full-stack web developer',
            lede: 'I build business tools and web products with clear interfaces, practical back-end thinking, and AI-assisted workflows where they help the work move faster without flattening the judgment.',
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
            role: 'Full-stack developer',
            title: 'Interfaces that explain the system behind them.',
            copy: 'Focused on product demos, maintainable code, API-ready interfaces, and workflows that keep product decisions visible.'
        },
        about: {
            eyebrow: 'About',
            title: 'A practical developer who turns rough ideas into working product surfaces.',
            copyOne: 'I am a self-taught developer with a strong bias toward building, learning, and refining. My work combines front-end structure, back-end thinking, and AI-assisted iteration so each project can move from idea to working product faster.',
            copyTwo: 'I care about readable code, clear communication, responsive design, and keeping human judgment in control of architecture, product decisions, tests, and delivery.',
            valuesAria: 'Working strengths',
            valueOneTitle: 'Product interfaces',
            valueOneCopy: 'Dashboards, workflows, and responsive screens that are easy to scan and practical to use.',
            valueTwoTitle: 'Backend mindset',
            valueTwoCopy: 'Comfort with Python, Django, data flow, API contracts, and the logic that keeps products stable.',
            valueThreeTitle: 'AI-assisted delivery',
            valueThreeCopy: 'Using Codex and Claude to accelerate planning, implementation, refactor, documentation, and QA.'
        },
        ai: {
            eyebrow: 'AI-assisted systems',
            title: 'Using agents as production infrastructure, not as decoration.',
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
            eyebrow: 'Selected product work',
            title: 'Demos that show product thinking, business logic, and AI-assisted delivery.',
            lede: 'The main work is organized around useful systems: operations dashboards, AI marketing workflows, technical creative tools, and polished front-end products.',
            tagEcommerce: 'E-commerce',
            tagMarketingSystem: 'Marketing system',
            openProject: 'Open project',
            viewWorkflow: 'View workflow',
            sapAlt: 'Sap Sap AI Marketing Studio preview',
            noisynthAlt: 'Noisynth audio tool preview',
            quoteAlt: 'Random Quote Creative Studio preview',
            lootAlt: 'Lootseeker E-Commerce preview',
            sapCopy: 'A workflow case study for character campaigns, prompt systems, content packs, and landing-ready assets.',
            sapNote: 'Workflow note: agents support strategy, content structure, asset planning, and iteration.',
            noisynthCopy: 'A technical creative audio tool with sequencer, synth controls, MIDI-oriented thinking, and export flow.',
            noisynthNote: 'Portfolio note: strongest as the next deployable technical case study.',
            noisynthStatus: 'Local build, deploy next',
            quoteCopy: 'A polished bilingual microproduct with resilient quote APIs, local fallback, favorites, and creative prompts.',
            quoteNote: 'Workflow note: rebuilt from a broken API dependency into a more resilient product.',
            lootCopy: 'A modernized Django marketplace with product discovery, seller accounts, cart logic, checkout fallback, and environment-ready settings.',
            lootNote: 'Case-study note: refreshed from a legacy learning build into a cleaner full-stack commerce demo.',
            lootStatus: 'Modernized Django storefront'
        },
        comanda: {
            eyebrow: 'Featured case study',
            title: 'ComandaOps Dashboard',
            copy: 'A browser-ready restaurant operations demo for tables, orders, kitchen flow, and shift metrics. It turns the original mobile app idea into a product recruiters can open and test.',
            stackAria: 'ComandaOps stack',
            stackAi: 'AI-assisted workflow',
            problemLabel: 'Problem',
            problem: 'Restaurants need a fast way to read table status, kitchen pressure, and open orders during service.',
            solutionLabel: 'Solution',
            solution: 'A compact dashboard with mock data, persistent state, order actions, and a clean workflow from table to kitchen.',
            aiLabel: 'AI workflow',
            ai: 'Agents help compress planning, implementation, refactor, copy, and QA while product decisions stay human-led.',
            nextLabel: 'Next full-stack step',
            next: 'Replace mock state with Django/FastAPI endpoints, role-based auth, and real kitchen/table data.',
            demoEyebrow: 'Live static demo',
            demoTitle: 'Shift control',
            reset: 'Reset demo',
            metricsAria: 'ComandaOps shift metrics',
            metricTables: 'Active tables',
            metricOrders: 'Open orders',
            metricQueue: 'Kitchen queue',
            metricRevenue: 'Closed revenue',
            actionsAria: 'ComandaOps actions',
            actionCreate: 'New order',
            actionAdvance: 'Advance next',
            actionClose: 'Close ready',
            tablesTitle: 'Tables',
            tablesHint: 'Click actions to simulate service',
            kitchenTitle: 'Kitchen queue',
            table: 'Table',
            available: 'Available',
            noOrders: 'No open orders. Add one to start the shift.',
            statusNew: 'New',
            statusPreparing: 'Preparing',
            statusReady: 'Ready',
            created: 'New order added',
            advanced: 'Order advanced',
            closed: 'Ready order closed',
            resetDone: 'Demo reset',
            noReady: 'No ready orders',
            updated: 'Updated',
            orderLabel: 'Order',
            amountLabel: 'Ticket',
            menu: {
                pizza: 'Pizza napolitana',
                burger: 'Burger combo',
                pasta: 'Fresh pasta',
                salad: 'House salad',
                lemonade: 'Lemonade',
                coffee: 'Coffee'
            }
        },
        learning: {
            eyebrow: 'Learning lab',
            title: 'Earlier browser exercises, kept as supporting work.',
            simon: 'State, timing, game logic',
            pokememo: 'Cards, matching, replay flow',
            pokedex: 'API fetch, search, rendering',
            drum: 'Audio input and UI response'
        },
        skills: {
            eyebrow: 'Stack',
            title: 'A balanced toolkit for front-end, back-end, AI workflows, and responsive product work.',
            techTitle: 'Development stack',
            aria: 'Technical skills',
            marketingTitle: 'Marketing + AI systems',
            marketingAria: 'Marketing and AI skills',
            marketingOneTitle: 'AI agent workflows',
            marketingOneCopy: 'Codex, Claude, and agent-assisted systems for planning, coding, refactor, documentation, and QA.',
            marketingTwoTitle: 'Prompt design',
            marketingTwoCopy: 'Structured prompts for visuals, scripts, landing copy, campaign assets, and creative direction.',
            marketingThreeTitle: 'Content systems',
            marketingThreeCopy: 'Repeatable pipelines for hooks, captions, briefs, story packs, and publishing-ready ideas.',
            marketingFourTitle: 'Character campaigns',
            marketingFourCopy: 'Narrative worlds, recurring characters, 9:16 story flows, and brand-consistent visual planning.'
        },
        contact: {
            eyebrow: 'Contact',
            title: 'Have a product, system, or collaboration in mind?',
            copy: 'Send me a message and I will get back to you with a clear next step.'
        },
        footer: {
            copy: '\u00a9 {year} Adrian Andrada Lockmann. Built with HTML, CSS, and JavaScript.'
        }
    },
    es: {
        meta: {
            title: 'Adrian Andrada Lockmann | Desarrollador Web Full-Stack',
            description: 'Portfolio de Adrian Andrada Lockmann, desarrollador web full-stack enfocado en herramientas de negocio, interfaces de producto y flujos practicos asistidos por IA.',
            themeLight: '#fbfcf8',
            themeDark: '#0c1110'
        },
        brand: {
            home: 'Ir al inicio'
        },
        nav: {
            aria: 'Navegacion principal',
            about: 'Sobre mi',
            ai: 'Sistemas',
            work: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        controls: {
            group: 'Controles de visualizacion',
            languageLabel: 'EN',
            languageAria: 'Cambiar idioma a ingles',
            menu: 'Alternar navegacion',
            themeDarkLabel: 'Oscuro',
            themeLightLabel: 'Claro',
            themeDarkAria: 'Cambiar a modo oscuro',
            themeLightAria: 'Cambiar a modo claro'
        },
        hero: {
            eyebrow: 'Desarrollador web full-stack',
            lede: 'Construyo herramientas de negocio y productos web con interfaces claras, pensamiento back-end practico y flujos asistidos por IA cuando ayudan a avanzar sin reemplazar el criterio.',
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
            role: 'Desarrollador full-stack',
            title: 'Interfaces que explican el sistema que tienen detras.',
            copy: 'Enfocado en demos de producto, codigo mantenible, interfaces listas para API y flujos que mantienen visibles las decisiones de producto.'
        },
        about: {
            eyebrow: 'Sobre mi',
            title: 'Un desarrollador practico que convierte ideas iniciales en superficies de producto funcionales.',
            copyOne: 'Soy un desarrollador autodidacta con una fuerte orientacion a construir, aprender y mejorar. Mi trabajo combina estructura front-end, pensamiento back-end e iteracion asistida por IA para llevar cada proyecto de idea a producto funcional mas rapido.',
            copyTwo: 'Me importa escribir codigo legible, comunicar con claridad, disenar de forma responsiva y mantener el criterio humano en arquitectura, decisiones de producto, pruebas y entrega.',
            valuesAria: 'Fortalezas de trabajo',
            valueOneTitle: 'Interfaces de producto',
            valueOneCopy: 'Dashboards, flujos y pantallas responsivas faciles de escanear y practicas para usar.',
            valueTwoTitle: 'Mentalidad backend',
            valueTwoCopy: 'Comodidad con Python, Django, flujo de datos, contratos de API y la logica que mantiene estables los productos.',
            valueThreeTitle: 'Entrega asistida por IA',
            valueThreeCopy: 'Uso Codex y Claude para acelerar planificacion, implementacion, refactor, documentacion y QA.'
        },
        ai: {
            eyebrow: 'Sistemas asistidos por IA',
            title: 'Uso agentes como infraestructura de produccion, no como decoracion.',
            lede: 'Uso agentes de IA como Codex y Claude para disenar sistemas de marketing que pasan mas rapido de la estrategia al contenido publicable: conceptos de campana, personajes, prompts, copy para landings, direccion visual y packs creativos reutilizables.',
            sapTitle: 'Flujos de personajes para Sap Sap',
            sapCopy: 'Para proyectos estilo Sap Sap, ayudo a crear campanas basadas en personajes con estructuras narrativas, prompts visuales 9:16, packs de contenido, hooks, guiones y planificacion de assets que pueden escalar en posts, anuncios, landings y educacion de producto.',
            tagsAria: 'Etiquetas de flujos de IA',
            tagAgents: 'Agentes IA',
            tagAutomation: 'Automatizacion de marketing',
            cardOneTitle: 'Pipelines de contenido',
            cardOneCopy: 'Sistemas para convertir ideas en briefs, guiones, captions, prompts y assets de campana repetibles.',
            cardTwoTitle: 'Campanas con personajes',
            cardTwoCopy: 'Mundos de marca, personajes recurrentes, arcos narrativos y consistencia visual para marketing social-first.',
            cardThreeTitle: 'Web + marketing',
            cardThreeCopy: 'Landings, mensajes de producto, assets listos para automatizacion e interfaces que apoyan crecimiento.'
        },
        projects: {
            eyebrow: 'Trabajo de producto seleccionado',
            title: 'Demos que muestran pensamiento de producto, logica de negocio y entrega asistida por IA.',
            lede: 'El trabajo principal esta organizado alrededor de sistemas utiles: dashboards operativos, flujos de marketing con IA, herramientas tecnicas creativas y productos front-end pulidos.',
            tagEcommerce: 'E-commerce',
            tagMarketingSystem: 'Sistema de marketing',
            openProject: 'Abrir proyecto',
            viewWorkflow: 'Ver flujo',
            sapAlt: 'Vista previa de Sap Sap AI Marketing Studio',
            noisynthAlt: 'Vista previa de herramienta de audio Noisynth',
            quoteAlt: 'Vista previa de Random Quote Creative Studio',
            lootAlt: 'Vista previa de Lootseeker E-Commerce',
            sapCopy: 'Un case study de workflow para campanas con personajes, sistemas de prompts, packs de contenido y assets listos para landing.',
            sapNote: 'Nota de flujo: los agentes apoyan estrategia, estructura de contenido, planificacion de assets e iteracion.',
            noisynthCopy: 'Una herramienta tecnica creativa de audio con secuenciador, controles de synth, pensamiento MIDI y flujo de exportacion.',
            noisynthNote: 'Nota de portfolio: es el proximo case study tecnico mas fuerte para desplegar.',
            noisynthStatus: 'Build local, proximo deploy',
            quoteCopy: 'Un microproducto bilingue pulido con APIs resilientes de frases, fallback local, favoritos y prompts creativos.',
            quoteNote: 'Nota de flujo: reconstruido desde una dependencia API rota hacia un producto mas resiliente.',
            lootCopy: 'Un marketplace Django modernizado con busqueda de productos, cuentas de vendedores, logica de carrito, checkout demo y configuracion por entorno.',
            lootNote: 'Nota de case study: actualizado desde un proyecto de aprendizaje legacy hacia una demo full-stack mas presentable.',
            lootStatus: 'Storefront Django modernizado'
        },
        comanda: {
            eyebrow: 'Case study destacado',
            title: 'ComandaOps Dashboard',
            copy: 'Una demo de operaciones gastronomicas lista para navegador: mesas, comandas, flujo de cocina y metricas del turno. Convierte la idea original de app movil en un producto que un recruiter puede abrir y probar.',
            stackAria: 'Stack de ComandaOps',
            stackAi: 'Workflow asistido por IA',
            problemLabel: 'Problema',
            problem: 'Los restaurantes necesitan leer rapido el estado de mesas, presion de cocina y pedidos abiertos durante el servicio.',
            solutionLabel: 'Solucion',
            solution: 'Un dashboard compacto con datos mockeados, estado persistente, acciones de pedido y un flujo claro desde mesa hasta cocina.',
            aiLabel: 'Workflow IA',
            ai: 'Los agentes ayudan a comprimir planificacion, implementacion, refactor, copy y QA mientras las decisiones de producto siguen lideradas por criterio humano.',
            nextLabel: 'Siguiente paso full-stack',
            next: 'Reemplazar el estado mockeado con endpoints Django/FastAPI, auth por roles y datos reales de cocina/mesas.',
            demoEyebrow: 'Demo estatica en vivo',
            demoTitle: 'Control de turno',
            reset: 'Reiniciar demo',
            metricsAria: 'Metricas del turno de ComandaOps',
            metricTables: 'Mesas activas',
            metricOrders: 'Comandas abiertas',
            metricQueue: 'Cola de cocina',
            metricRevenue: 'Caja cerrada',
            actionsAria: 'Acciones de ComandaOps',
            actionCreate: 'Nueva comanda',
            actionAdvance: 'Avanzar siguiente',
            actionClose: 'Cerrar lista',
            tablesTitle: 'Mesas',
            tablesHint: 'Usa acciones para simular servicio',
            kitchenTitle: 'Cola de cocina',
            table: 'Mesa',
            available: 'Libre',
            noOrders: 'No hay comandas abiertas. Agrega una para iniciar el turno.',
            statusNew: 'Nueva',
            statusPreparing: 'Preparando',
            statusReady: 'Lista',
            created: 'Nueva comanda agregada',
            advanced: 'Comanda avanzada',
            closed: 'Comanda lista cerrada',
            resetDone: 'Demo reiniciada',
            noReady: 'No hay comandas listas',
            updated: 'Actualizado',
            orderLabel: 'Comanda',
            amountLabel: 'Ticket',
            menu: {
                pizza: 'Pizza napolitana',
                burger: 'Combo burger',
                pasta: 'Pasta fresca',
                salad: 'Ensalada de casa',
                lemonade: 'Limonada',
                coffee: 'Cafe'
            }
        },
        learning: {
            eyebrow: 'Learning lab',
            title: 'Ejercicios anteriores de navegador, mantenidos como trabajo de apoyo.',
            simon: 'Estado, tiempos, logica de juego',
            pokememo: 'Cartas, matching, flujo rejugable',
            pokedex: 'Fetch de API, busqueda, renderizado',
            drum: 'Audio input y respuesta visual'
        },
        skills: {
            eyebrow: 'Stack',
            title: 'Un conjunto equilibrado de herramientas para front-end, back-end, flujos IA y productos responsivos.',
            techTitle: 'Stack de desarrollo',
            aria: 'Habilidades tecnicas',
            marketingTitle: 'Marketing + sistemas IA',
            marketingAria: 'Habilidades de marketing e IA',
            marketingOneTitle: 'Flujos con agentes IA',
            marketingOneCopy: 'Codex, Claude y sistemas asistidos por agentes para planificacion, codigo, refactor, documentacion y QA.',
            marketingTwoTitle: 'Diseno de prompts',
            marketingTwoCopy: 'Prompts estructurados para visuales, guiones, copy de landings, assets de campana y direccion creativa.',
            marketingThreeTitle: 'Sistemas de contenido',
            marketingThreeCopy: 'Pipelines repetibles para hooks, captions, briefs, packs narrativos e ideas listas para publicar.',
            marketingFourTitle: 'Campanas con personajes',
            marketingFourCopy: 'Mundos narrativos, personajes recurrentes, flujos 9:16 y planificacion visual consistente con la marca.'
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Tenes un producto, sistema o colaboracion en mente?',
            copy: 'Mandame un mensaje y te respondo con un proximo paso claro.'
        },
        footer: {
            copy: '\u00a9 {year} Adrian Andrada Lockmann. Construido con HTML, CSS y JavaScript.'
        }
    }
};

const COMANDA_TABLES = 8;
const COMANDA_STATUS_ORDER = ['new', 'preparing', 'ready'];
const COMANDA_MENU = [
    { key: 'pizza', amount: 36 },
    { key: 'burger', amount: 32 },
    { key: 'pasta', amount: 29 },
    { key: 'salad', amount: 18 },
    { key: 'lemonade', amount: 8 },
    { key: 'coffee', amount: 6 }
];
const COMANDA_BLUEPRINTS = [
    [{ key: 'pizza', qty: 2 }, { key: 'lemonade', qty: 2 }],
    [{ key: 'burger', qty: 1 }, { key: 'salad', qty: 1 }],
    [{ key: 'pasta', qty: 2 }, { key: 'coffee', qty: 2 }],
    [{ key: 'pizza', qty: 1 }, { key: 'burger', qty: 1 }, { key: 'lemonade', qty: 1 }]
];

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
let comandaState = loadComandaState();

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

        if (typeof translation === 'string') {
            element.textContent = interpolate(translation);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const translation = getTranslation(element.dataset.i18nAria);

        if (typeof translation === 'string') {
            element.setAttribute('aria-label', interpolate(translation));
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const translation = getTranslation(element.dataset.i18nAlt);

        if (typeof translation === 'string') {
            element.setAttribute('alt', interpolate(translation));
        }
    });

    document.title = translations[currentLanguage].meta.title;

    if (metaDescription) {
        metaDescription.setAttribute('content', translations[currentLanguage].meta.description);
    }

    updateControlLabels();
    updateThemeColor();
    renderComandaOps();
}

function setTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    window.localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
    updateControlLabels();
    updateThemeColor();
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

function updateThemeColor() {
    if (!themeColor) {
        return;
    }

    themeColor.setAttribute(
        'content',
        translations[currentLanguage].meta[currentTheme === 'dark' ? 'themeDark' : 'themeLight']
    );
}

function createSeedComandaState() {
    return {
        nextId: 4,
        servedTotal: 214,
        lastMessageKey: 'updated',
        orders: [
            {
                id: 1,
                table: 2,
                status: 'new',
                items: [{ key: 'pizza', qty: 2 }, { key: 'lemonade', qty: 2 }],
                amount: 88
            },
            {
                id: 2,
                table: 5,
                status: 'preparing',
                items: [{ key: 'burger', qty: 1 }, { key: 'salad', qty: 1 }],
                amount: 50
            },
            {
                id: 3,
                table: 7,
                status: 'ready',
                items: [{ key: 'pasta', qty: 2 }, { key: 'coffee', qty: 2 }],
                amount: 70
            }
        ]
    };
}

function loadComandaState() {
    const fallback = createSeedComandaState();
    const storedValue = window.localStorage.getItem(STORAGE_KEYS.comandaOps);

    if (!storedValue) {
        return fallback;
    }

    try {
        const parsed = JSON.parse(storedValue);
        const isValidState = Array.isArray(parsed.orders)
            && Number.isFinite(parsed.nextId)
            && Number.isFinite(parsed.servedTotal);

        return isValidState ? parsed : fallback;
    } catch {
        return fallback;
    }
}

function saveComandaState() {
    window.localStorage.setItem(STORAGE_KEYS.comandaOps, JSON.stringify(comandaState));
}

function calculateOrderAmount(items) {
    return items.reduce((total, item) => {
        const menuItem = COMANDA_MENU.find((candidate) => candidate.key === item.key);
        return total + ((menuItem?.amount || 0) * item.qty);
    }, 0);
}

function getLeastBusyTable() {
    const tableLoads = Array.from({ length: COMANDA_TABLES }, (_, index) => ({
        table: index + 1,
        count: comandaState.orders.filter((order) => order.table === index + 1).length
    }));

    tableLoads.sort((a, b) => a.count - b.count || a.table - b.table);
    return tableLoads[0].table;
}

function createComandaOrder() {
    const blueprint = COMANDA_BLUEPRINTS[comandaState.nextId % COMANDA_BLUEPRINTS.length];
    const items = blueprint.map((item) => ({ ...item }));

    comandaState.orders.unshift({
        id: comandaState.nextId,
        table: getLeastBusyTable(),
        status: 'new',
        items,
        amount: calculateOrderAmount(items)
    });

    comandaState.nextId += 1;
    comandaState.lastMessageKey = 'created';
    saveComandaState();
    renderComandaOps();
}

function advanceComandaOrder() {
    const orderToAdvance = comandaState.orders.find((order) => order.status !== 'ready');

    if (!orderToAdvance) {
        comandaState.lastMessageKey = 'noReady';
        renderComandaOps();
        return;
    }

    const currentIndex = COMANDA_STATUS_ORDER.indexOf(orderToAdvance.status);
    orderToAdvance.status = COMANDA_STATUS_ORDER[Math.min(currentIndex + 1, COMANDA_STATUS_ORDER.length - 1)];
    comandaState.lastMessageKey = 'advanced';
    saveComandaState();
    renderComandaOps();
}

function closeReadyComandaOrder() {
    const readyIndex = comandaState.orders.findIndex((order) => order.status === 'ready');

    if (readyIndex === -1) {
        comandaState.lastMessageKey = 'noReady';
        renderComandaOps();
        return;
    }

    const [closedOrder] = comandaState.orders.splice(readyIndex, 1);
    comandaState.servedTotal += closedOrder.amount;
    comandaState.lastMessageKey = 'closed';
    saveComandaState();
    renderComandaOps();
}

function resetComandaDemo() {
    comandaState = createSeedComandaState();
    comandaState.lastMessageKey = 'resetDone';
    saveComandaState();
    renderComandaOps();
}

function formatComandaItems(items) {
    const menuTranslations = translations[currentLanguage].comanda.menu;

    return items
        .map((item) => `${item.qty}x ${menuTranslations[item.key] || item.key}`)
        .join(' / ');
}

function getStatusLabel(status) {
    const key = status === 'ready'
        ? 'statusReady'
        : status === 'preparing'
            ? 'statusPreparing'
            : 'statusNew';

    return translations[currentLanguage].comanda[key];
}

function renderComandaOps() {
    const tablesContainer = document.querySelector('[data-comanda-tables]');
    const ordersContainer = document.querySelector('[data-comanda-orders]');

    if (!tablesContainer || !ordersContainer) {
        return;
    }

    const text = translations[currentLanguage].comanda;
    const activeTables = new Set(comandaState.orders.map((order) => order.table));
    const kitchenQueue = comandaState.orders.filter((order) => order.status !== 'ready').length;

    updateMetric('tables', activeTables.size);
    updateMetric('orders', comandaState.orders.length);
    updateMetric('queue', kitchenQueue);
    updateMetric('revenue', `$${comandaState.servedTotal}`);

    tablesContainer.replaceChildren();
    Array.from({ length: COMANDA_TABLES }, (_, index) => index + 1).forEach((tableNumber) => {
        const tableOrders = comandaState.orders.filter((order) => order.table === tableNumber);
        const tableCard = document.createElement('article');
        tableCard.className = `ops-table${tableOrders.length ? ' is-active' : ''}`;

        const label = document.createElement('span');
        label.textContent = `${text.table} ${tableNumber}`;

        const value = document.createElement('strong');
        value.textContent = tableOrders.length ? String(tableOrders.length) : text.available;

        const hint = document.createElement('small');
        hint.textContent = tableOrders.length
            ? getStatusLabel(tableOrders[0].status)
            : text.available;

        tableCard.append(label, value, hint);
        tablesContainer.appendChild(tableCard);
    });

    ordersContainer.replaceChildren();

    if (!comandaState.orders.length) {
        const empty = document.createElement('p');
        empty.className = 'ops-empty';
        empty.textContent = text.noOrders;
        ordersContainer.appendChild(empty);
    } else {
        [...comandaState.orders]
            .sort((a, b) => COMANDA_STATUS_ORDER.indexOf(a.status) - COMANDA_STATUS_ORDER.indexOf(b.status))
            .forEach((order) => {
                const orderCard = document.createElement('article');
                orderCard.className = `ops-order is-${order.status}`;

                const topLine = document.createElement('div');

                const title = document.createElement('strong');
                title.textContent = `${text.orderLabel} #${order.id} / ${text.table} ${order.table}`;

                const status = document.createElement('span');
                status.textContent = getStatusLabel(order.status);

                topLine.append(title, status);

                const items = document.createElement('p');
                items.textContent = formatComandaItems(order.items);

                const amount = document.createElement('small');
                amount.textContent = `${text.amountLabel}: $${order.amount}`;

                orderCard.append(topLine, items, amount);
                ordersContainer.appendChild(orderCard);
            });
    }

    const updateElement = document.querySelector('[data-comanda-last-update]');
    if (updateElement) {
        updateElement.textContent = `${text.updated}: ${text[comandaState.lastMessageKey] || text.updated}`;
    }
}

function updateMetric(metric, value) {
    const element = document.querySelector(`[data-comanda-metric="${metric}"]`);

    if (element) {
        element.textContent = String(value);
    }
}

function initializeComandaOps() {
    document.querySelectorAll('[data-comanda-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.comandaAction;

            if (action === 'create') {
                createComandaOrder();
            }

            if (action === 'advance') {
                advanceComandaOrder();
            }

            if (action === 'close') {
                closeReadyComandaOrder();
            }
        });
    });

    const resetButton = document.querySelector('[data-comanda-reset]');

    if (resetButton) {
        resetButton.addEventListener('click', resetComandaDemo);
    }
}

initializeComandaOps();
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
