// ===== LANGUAGE & CV SWITCHER =====
const CV_FILES = {
    en: 'assets/Abderrahmen_Khemir_CV_EN.pdf',
    fr: 'assets/Abderrahmen_Khemir_CV_FR.pdf'
};

const I18N = {
    en: {
        pageTitle: 'Abderrahmen Khemir — AI & Software Engineer',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.education': 'Education',
        'nav.certificates': 'Certificates',
        'nav.contact': 'Contact',
        'cta.viewCv': 'View CV',
        'cta.viewProjects': 'View Projects',
        'hero.eyebrow': 'AI & Automation Engineer · Tunisia',
        'hero.lead': 'Computer engineer specialized in AI integration, intelligent agents, and full-stack software development. Driven by curiosity and dedicated to turning complex real-world challenges into scalable, high-impact solutions.',
        'hero.cliLabel': 'Reach out directly',
        'hero.copied': 'Copied',
        'card.focusKey': 'focus',
        'card.focusVal': 'Local AI Agents & Full-Stack',
        'card.degreeKey': 'degree',
        'card.degreeVal': 'ENISo · Distributed Systems',
        'about.index': '01 // About',
        'about.title': 'About Me',
        'about.p1': 'I\'m a computer engineer with hands-on experience designing <strong>AI agents</strong>, integrating <strong>Large Language Models</strong>, and building machine learning pipelines. I enjoy combining modern AI tools with real-world business systems to automate complex tasks.',
        'about.p2': 'My journey took me from embedded computing at <strong>ENISo</strong> to internships at <strong>Capgemini</strong>, <strong>Tunisie Telecom</strong>, and <strong>Warzeez Solutions</strong>, where I built local AI agents, secure data platforms, and telecom dashboards.',
        'about.p3': 'I was also selected among the <strong>top 10 Tunisian students</strong> for the Huawei Seeds for the Future bootcamp in China.',
        'skills.title': 'Technical Skills',
        'skills.ai': 'AI & Automation',
        'skills.prog': 'Programming',
        'skills.backend': 'Backend & Tools',
        'projects.index': '02 // Projects',
        'projects.title': 'My Projects',
        'projects.subtitle': 'Private products & open-source repositories',
        'projects.filterAll': 'All',
        'projects.filterPrivate': 'Private',
        'projects.filterPublic': 'Public',
        'projects.loading': 'Loading projects...',
        'exp.index': '03 // Experience',
        'exp.title': 'Work Experience',
        'exp.item1Date': 'Feb 2026 – May 2026',
        'exp.item1Title': 'End of Studies Intern — Warzeez Solutions',
        'exp.item1Desc': 'Built a local AI agent automating Odoo operations via natural language across Odoo Discuss, AI Module, and Telegram. Developed custom Odoo modules, a FastAPI service, and n8n workflows with a local LLM (Qwen 3-VL) and Whisper — keeping all data fully private.',
        'exp.item2Date': 'Oct 2025 — 10 days',
        'exp.item2Title': 'Bootcamp Trainee — Huawei (China)',
        'exp.item2Desc': 'Selected among top 10 Tunisian engineering students for Seeds for the Future. Trained in AI, Cloud, 5G, and IoT by Huawei engineers. Visited DJI, Tencent, and tech hubs in Shenzhen & Dongguan.',
        'exp.item3Date': 'Jun – Jul 2025',
        'exp.item3Title': 'Intern — Capgemini Tunis',
        'exp.item3Desc': 'Developed a secure data management platform with import/export for XML, CSV, JSON. Implemented AES/RSA encryption and file signature verification. Built with Python, SQLAlchemy, and MySQL.',
        'exp.item4Date': 'Jun – Jul 2024',
        'exp.item4Title': 'Intern — Tunisie Telecom Nabeul',
        'exp.item4Desc': 'Assisted telecom technicians with Wi-Fi, phone lines, and 4G infrastructure. Developed an Angular-based internal dashboard for managing Tunisie Telecom services using the company\'s official UI/UX theme.',
        'edu.index': '04 // Education',
        'edu.title': 'Education',
        'edu.item1Title': 'National Engineering School of Sousse (ENISo)',
        'edu.item1Desc': 'Industrial Computer Engineering — Specialization: Distributed Systems',
        'edu.item2Title': 'Nabeul Preparatory Institute (IPEIN)',
        'edu.item2Desc': 'Preparatory Engineering Exam — PT',
        'edu.item3Title': 'Korba High School',
        'edu.item3Desc': 'Tunisian Baccalaureate — Technology Section',
        'vol.index': '05 // Activities',
        'vol.title': 'Volunteering & Activities',
        'vol.item1Title': 'EUREKA Club',
        'vol.item1Desc': 'Vice President — Leading initiatives, coordinating events, and mentoring members within the engineering student community.',
        'vol.item2Title': 'Soli and Green',
        'vol.item2Desc': 'Active Member — Contributed to sustainability and social solidarity projects across community initiatives.',
        'vol.item3Title': 'TRIART Conservatory',
        'vol.item3Desc': 'Guitarist — Six years of musical training and performance, developing discipline, creativity, and stage confidence.',
        'certs.index': '06 // Certificates',
        'certs.title': 'Certificates',
        'langs.index': '07 // Languages',
        'langs.title': 'Languages',
        'langs.arName': 'Arabic',
        'langs.arLevel': 'Native',
        'langs.frName': 'French',
        'langs.frLevel': 'Fluent',
        'langs.enName': 'English',
        'langs.itName': 'Italian',
        'langs.esName': 'Spanish',
        'langs.basicLevel': 'Beginner',
        'contact.index': '08 // Contact',
        'contact.title': 'Get In Touch',
        'contact.sendEmail': 'Send Email',
        'contact.emailLabel': 'Email',
        'contact.phoneLabel': 'Phone',
        'contact.locLabel': 'Location',
        'contact.locValue': 'Tunisia',
        'contact.onlineLabel': 'Find me online',
        'footer.copy': '&copy; 2026 Abderrahmen Khemir. Built with HTML, CSS &amp; JS.',
        'footer.top': 'Back to top &uarr;',
        'modal.code': 'Code',
        'modal.liveDemo': 'Live Demo'
    },
    fr: {
        pageTitle: 'Abderrahmen Khemir — Ingénieur IA & Logiciel',
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.experience': 'Expérience',
        'nav.education': 'Formation',
        'nav.certificates': 'Certifications',
        'nav.contact': 'Contact',
        'cta.viewCv': 'Voir le CV',
        'cta.viewProjects': 'Voir les projets',
        'hero.eyebrow': 'Ingénieur IA & Automatisation · Tunisie',
        'hero.lead': 'Ingénieur en informatique spécialisé dans l’intégration de l’IA, les agents intelligents et le développement full-stack. Animé par la curiosité et déterminé à transformer des défis complexes en solutions évolutives à fort impact.',
        'hero.cliLabel': 'Contact direct',
        'hero.copied': 'Copié',
        'card.focusKey': 'domaine',
        'card.focusVal': 'Agents IA locaux & Full-Stack',
        'card.degreeKey': 'diplôme',
        'card.degreeVal': 'ENISo · Systèmes distribués',
        'about.index': '01 // À propos',
        'about.title': 'À propos de moi',
        'about.p1': 'Je suis ingénieur en informatique avec une expérience pratique dans la conception d’<strong>agents IA</strong>, l’intégration de <strong>grands modèles de langage (LLM)</strong> et la création de pipelines de machine learning. J’aime associer les outils d’IA modernes aux systèmes d’entreprise réels pour automatiser des tâches complexes.',
        'about.p2': 'Mon parcours m’a mené de l’informatique embarquée à l’<strong>ENISo</strong> jusqu’à des stages chez <strong>Capgemini</strong>, <strong>Tunisie Telecom</strong> et <strong>Warzeez Solutions</strong>, où j’ai développé des agents IA locaux, des plateformes de données sécurisées et des tableaux de bord télécoms.',
        'about.p3': 'J’ai également été sélectionné parmi les <strong>10 meilleurs étudiants tunisiens</strong> pour le bootcamp Huawei Seeds for the Future en Chine.',
        'skills.title': 'Compétences techniques',
        'skills.ai': 'IA & Automatisation',
        'skills.prog': 'Langages',
        'skills.backend': 'Backend & Outils',
        'projects.index': '02 // Projets',
        'projects.title': 'Mes Projets',
        'projects.subtitle': 'Produits privés & dépôts open-source',
        'projects.filterAll': 'Tous',
        'projects.filterPrivate': 'Privés',
        'projects.filterPublic': 'Publics',
        'projects.loading': 'Chargement des projets...',
        'exp.index': '03 // Expérience',
        'exp.title': 'Expérience professionnelle',
        'exp.item1Date': 'Fév 2026 – Mai 2026',
        'exp.item1Title': 'Stagiaire Fin d’Études — Warzeez Solutions',
        'exp.item1Desc': 'Développement d’un agent IA local automatisant les opérations Odoo en langage naturel via Odoo Discuss, le module IA et Telegram. Création de modules Odoo personnalisés, d’un service FastAPI et de workflows n8n avec un LLM local (Qwen 3-VL) et Whisper — en gardant toutes les données entièrement privées.',
        'exp.item2Date': 'Oct 2025 — 10 jours',
        'exp.item2Title': 'Stagiaire Bootcamp — Huawei (Chine)',
        'exp.item2Desc': 'Sélectionné parmi les 10 meilleurs étudiants ingénieurs tunisiens pour Seeds for the Future. Formé en IA, Cloud, 5G et IoT par des ingénieurs Huawei. Visite de DJI, Tencent et de pôles technologiques à Shenzhen et Dongguan.',
        'exp.item3Date': 'Juin – Juil 2025',
        'exp.item3Title': 'Stagiaire — Capgemini Tunis',
        'exp.item3Desc': 'Développement d’une plateforme sécurisée de gestion de données avec import/export XML, CSV et JSON. Implémentation du chiffrement AES/RSA et de la vérification de signatures de fichiers. Développée avec Python, SQLAlchemy et MySQL.',
        'exp.item4Date': 'Juin – Juil 2024',
        'exp.item4Title': 'Stagiaire — Tunisie Telecom Nabeul',
        'exp.item4Desc': 'Assistance aux techniciens télécoms sur le Wi-Fi, les lignes téléphoniques et l’infrastructure 4G. Développement d’un tableau de bord interne sous Angular pour la gestion des services Tunisie Telecom selon la charte UI/UX officielle de l’entreprise.',
        'edu.index': '04 // Formation',
        'edu.title': 'Formation',
        'edu.item1Title': 'École Nationale d’Ingénieurs de Sousse (ENISo)',
        'edu.item1Desc': 'Génie Informatique Industrielle — Spécialité : Systèmes distribués',
        'edu.item2Title': 'Institut Préparatoire aux Études d’Ingénieur de Nabeul (IPEIN)',
        'edu.item2Desc': 'Concours National d’Entrée aux Écoles d’Ingénieurs — PT',
        'edu.item3Title': 'Lycée de Korba',
        'edu.item3Desc': 'Baccalauréat Tunisien — Section Technique',
        'vol.index': '05 // Engagements',
        'vol.title': 'Engagement associatif & Activités',
        'vol.item1Title': 'Club EUREKA',
        'vol.item1Desc': 'Vice-Président — Pilotage d’initiatives, coordination d’événements et accompagnement des membres au sein de la communauté étudiante ingénieure.',
        'vol.item2Title': 'Soli and Green',
        'vol.item2Desc': 'Membre actif — Contribution à des projets de développement durable et de solidarité sociale à travers des initiatives associatives.',
        'vol.item3Title': 'Conservatoire TRIART',
        'vol.item3Desc': 'Guitariste — Six années de formation musicale et de pratique scénique, développant discipline, créativité et aisance sur scène.',
        'certs.index': '06 // Certifications',
        'certs.title': 'Certifications',
        'langs.index': '07 // Langues',
        'langs.title': 'Langues',
        'langs.arName': 'Arabe',
        'langs.arLevel': 'Langue maternelle',
        'langs.frName': 'Français',
        'langs.frLevel': 'Courant',
        'langs.enName': 'Anglais',
        'langs.itName': 'Italien',
        'langs.esName': 'Espagnol',
        'langs.basicLevel': 'Débutant',
        'contact.index': '08 // Contact',
        'contact.title': 'Me contacter',
        'contact.sendEmail': 'Envoyer un e-mail',
        'contact.emailLabel': 'E-mail',
        'contact.phoneLabel': 'Téléphone',
        'contact.locLabel': 'Localisation',
        'contact.locValue': 'Tunisie',
        'contact.onlineLabel': 'En ligne',
        'footer.copy': '&copy; 2026 Abderrahmen Khemir. Conçu avec HTML, CSS &amp; JS.',
        'footer.top': 'Haut de page &uarr;',
        'modal.code': 'Code',
        'modal.liveDemo': 'Démo en ligne'
    }
};

const DYNAMIC_STRINGS = {
    en: {
        badgePrivate: 'Private',
        badgePrivateModal: 'Private Product',
        badgePublic: 'Open Source',
        details: 'Details',
        screens: 'screens',
        live: 'Live',
        closedSource: 'Closed Source',
        noDesc: 'No description available.',
        emptyCategory: 'No projects in this category yet.',
        loadError: 'Could not load projects right now.',
        loadingScreenshots: 'Loading screenshots...',
        viewReport: 'View Project Report',
        noLocalScreenshots: 'no local screenshots attached',
        openPreview: 'Open live preview'
    },
    fr: {
        badgePrivate: 'Privé',
        badgePrivateModal: 'Produit privé',
        badgePublic: 'Open Source',
        details: 'Détails',
        screens: 'captures',
        live: 'Démo',
        closedSource: 'Code privé',
        noDesc: 'Aucune description disponible.',
        emptyCategory: 'Aucun projet dans cette catégorie.',
        loadError: 'Impossible de charger les projets pour le moment.',
        loadingScreenshots: 'Chargement des captures...',
        viewReport: 'Voir le rapport',
        noLocalScreenshots: 'aucune capture locale disponible',
        openPreview: 'Ouvrir l’aperçu en ligne'
    }
};

let currentLang = 'en';

function getInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'fr') return urlLang;

    try {
        const stored = localStorage.getItem('portfolio_lang');
        if (stored === 'en' || stored === 'fr') return stored;
    } catch {
        // Ignore storage restrictions
    }
    return 'en';
}

function setLanguage(lang) {
    currentLang = lang === 'fr' ? 'fr' : 'en';
    const dict = I18N[currentLang];

    document.documentElement.lang = currentLang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    const cvHref = CV_FILES[currentLang];
    document.querySelectorAll('.js-cv-link').forEach(link => {
        link.href = cvHref;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    try {
        localStorage.setItem('portfolio_lang', currentLang);
    } catch {
        // Ignore storage restrictions
    }

    if (allProjects.length) {
        renderProjects();
    }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// ===== MOBILE MENU =====
const hamburgerBtn = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===== COPY EMAIL CLI PILL =====
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyEmailIcon = document.getElementById('copyEmailIcon');

if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
        const email = 'abderahmen.khemir@gmail.com';
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                tempInput.remove();
            }
            copyEmailBtn.classList.add('copied');
            if (copyEmailIcon) copyEmailIcon.className = 'fas fa-check';
            setTimeout(() => {
                copyEmailBtn.classList.remove('copied');
                if (copyEmailIcon) copyEmailIcon.className = 'far fa-copy';
            }, 1800);
        } catch (err) {
            console.warn('Could not copy email address:', err);
        }
    });
}

// ===== PROJECTS CONFIGURATION =====
const GITHUB_USERNAME = 'abdoukhemir';

// 1. Private Projects List (Hardcoded details with Demo links, no Code links)
const PRIVATE_PROJECTS = [
    {
        name: 'PotaLang',
        homepage: 'https://potalang.netlify.app/',
        language: 'Android · Offline-First · Mobile App',
        fullDescription: 'A playful, privacy-first Android language learning app featuring Pota the potato chef and the Veggie Gang. Covers 7 languages (French, Spanish, German, Portuguese, Italian, English, and Arabic) from A1 to C2 through an 8-part lesson method, 86 voiced story episodes, character voices, freshness-based smart review, optional CEFR milestone exams, and a dedicated 42-lesson Arabic Alphabet Path with real native voice recordings, full harakat vowel marks, and stroke-order tracing. Built with a local-first architecture so progress stays on-device and lessons work offline.',
        fullDescriptionFr: 'Une application Android d’apprentissage des langues ludique et axée sur la confidentialité avec Pota et le Veggie Gang. Couvre 7 langues (français, espagnol, allemand, portugais, italien, anglais et arabe) du niveau A1 au C2 grâce à une méthode en 8 étapes, 86 épisodes d’histoires audio, des voix de personnages, une révision intelligente, des tests de niveau CECR optionnels et un parcours dédié de 42 leçons pour l’alphabet arabe avec voix réelles, voyelles complètes (harakat) et tracé lettre par lettre. Conçue offline-first : la progression reste locale sur l’appareil.',
        screenshots: [
            'https://potalang.netlify.app/img/feature-graphic.png',
            'https://potalang.netlify.app/img/screens/screen-home.png',
            'https://potalang.netlify.app/img/screens/screen-alphabet.png',
            'https://potalang.netlify.app/img/screens/screen-story.png'
        ],
        isPrivate: true
    },
    {
        name: 'Restauronio',
        homepage: 'https://restauronio-frontend.onrender.com/',
        language: 'TypeScript · Next.js · Node.js · Supabase',
        fullDescription: 'A complete multi-tenant restaurant SaaS platform built as a TypeScript monorepo. Features include modular licensing, real-time Kitchen Display System (KDS), intelligent reservation and floor management, POS order processing, AI-powered customer chat agents via WhatsApp and web, multi-language digital menus with RTL support, AI-assisted theme generation, and hourly usage-based billing. The backend runs on Node.js with Express and Supabase PostgreSQL, while the frontend is built with Next.js and Tailwind CSS. Designed to serve multiple restaurant businesses from a single shared infrastructure with isolated tenant data, centralized admin controls, and per-restaurant module licensing.',
        fullDescriptionFr: 'Une plateforme SaaS multi-tenant complète pour la restauration, conçue comme un monorepo TypeScript. Inclut la gestion modulaire des licences, un système d’affichage cuisine (KDS) en temps réel, la gestion des réservations et des salles, l’encaissement POS, des agents conversationnels IA sur WhatsApp et web, des menus numériques multilingues compatibles RTL, la génération de thèmes assistée par IA et une facturation horaire à l’usage. Le backend repose sur Node.js, Express et Supabase PostgreSQL, et le frontend sur Next.js et Tailwind CSS.',
        screenshots: [
            'assets/screenshots/restauronio/screenshot-1.png',
            'assets/screenshots/restauronio/screenshot-2.png',
            'assets/screenshots/restauronio/screenshot-3.png',
            'assets/screenshots/restauronio/screenshot-4.png',
            'assets/screenshots/restauronio/screenshot-5.png',
            'assets/screenshots/restauronio/screenshot-6.png',
            'assets/screenshots/restauronio/screenshot-7.png',
            'assets/screenshots/restauronio/screenshot-8.png',
            'assets/screenshots/restauronio/screenshot-9.png',
            'assets/screenshots/restauronio/screenshot-10.png',
            'assets/screenshots/restauronio/screenshot-11.png',
            'assets/screenshots/restauronio/screenshot-12.png',
            'assets/screenshots/restauronio/screenshot-13.png'
        ],
        isPrivate: true
    },
    {
        name: 'Receipto',
        homepage: 'https://receipto-cihc.onrender.com/',
        language: 'React · Node.js · Vision AI',
        fullDescription: 'An AI-powered personal finance application that automates expense tracking. Users can manually log expenses or simply take a photo of any receipt. The system uses Vision AI models to automatically extract line items, total costs, tax amounts, and merchant details from receipt images. Built with a React frontend and Node.js backend, it provides real-time spending analytics, category breakdowns, and budget insights.',
        fullDescriptionFr: 'Une application de finances personnelles propulsée par l’IA qui automatise le suivi des dépenses. Les utilisateurs peuvent saisir leurs dépenses ou photographier n’importe quel reçu. Des modèles Vision AI extraient automatiquement les articles, montants totaux, taxes et informations du commerçant. Développée avec React en frontend et Node.js en backend, elle offre des analyses en temps réel, une répartition par catégorie et des indicateurs budgétaires.',
        isPrivate: true
    }
];

// 2. Repositories to EXCLUDE from the public GitHub list
const EXCLUDED_REPOS = [
    'abdoukhemir.github.io',
    'n8n',
    'reel-animations4',
    'abd3d'
];

let allProjects = [];
let activeFilter = 'all';

function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[character]));
}

function sanitizeUrl(url) {
    if (!url || typeof url !== 'string') return '';
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed) || /^assets\//i.test(trimmed)) {
        return trimmed;
    }
    return '';
}

function getProjectDescription(project) {
    const t = DYNAMIC_STRINGS[currentLang];
    if (currentLang === 'fr' && project.fullDescriptionFr) {
        return project.fullDescriptionFr;
    }
    return project.fullDescription || project.description || t.noDesc;
}

async function loadProjects() {
    const grid = document.getElementById('projects-grid');
    allProjects = [...PRIVATE_PROJECTS];
    renderProjects();

    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const repos = await res.json();

        const publicRepos = repos.filter(repo => {
            if (repo.fork) return false;
            const normalizedName = repo.name.toLowerCase();
            return !EXCLUDED_REPOS.some(excluded =>
                normalizedName.includes(excluded.toLowerCase())
            );
        });

        publicRepos.forEach(repo => {
            allProjects.push({
                name: repo.name,
                title: repo.name.replace(/[-_]+/g, ' '),
                description: repo.description || '',
                language: repo.language || 'Code',
                html_url: repo.html_url,
                homepage: repo.homepage,
                isPrivate: false
            });
        });

        renderProjects();
    } catch (err) {
        console.error('Failed to load public repos from GitHub:', err);
        if (!allProjects.length) {
            grid.innerHTML = `<p class="loading">${escapeHTML(DYNAMIC_STRINGS[currentLang].loadError)}</p>`;
        }
    }
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const t = DYNAMIC_STRINGS[currentLang];
    grid.innerHTML = '';

    const filtered = allProjects.filter(project => {
        if (activeFilter === 'private') return project.isPrivate;
        if (activeFilter === 'public') return !project.isPrivate;
        return true;
    });

    if (!filtered.length) {
        grid.innerHTML = `<p class="loading">${escapeHTML(t.emptyCategory)}</p>`;
        return;
    }

    filtered.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
}

function createProjectCard(project) {
    const t = DYNAMIC_STRINGS[currentLang];
    const card = document.createElement('article');
    card.className = 'project-card';
    card.tabIndex = 0;

    const repoName = project.name;
    const title = project.title || project.name.replace(/-/g, ' ');
    const safeLanguages = project.language || 'Code';
    const fullDescription = getProjectDescription(project);
    const truncatedDesc = fullDescription.length > 145
        ? `${fullDescription.substring(0, 145).trim()}...`
        : fullDescription;

    const openDetails = () => openProjectModal(
        repoName,
        title,
        fullDescription,
        project.html_url,
        project.homepage,
        safeLanguages,
        project.screenshots,
        project.isPrivate
    );

    card.addEventListener('click', openDetails);
    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openDetails();
        }
    });

    const techItems = safeLanguages
        ? safeLanguages.split(/[·,]/).map(item => item.trim()).filter(Boolean)
        : [];
    const techTags = techItems
        .slice(0, 4)
        .map(item => `<span>${escapeHTML(item)}</span>`)
        .join('');

    const screenshotCount = Array.isArray(project.screenshots) && project.screenshots.length
        ? ` <span class="project-screens-tag">· ${project.screenshots.length} ${escapeHTML(t.screens)}</span>`
        : '';

    const codeUrl = sanitizeUrl(project.html_url);
    const demoUrl = sanitizeUrl(project.homepage);

    card.innerHTML = `
        <div class="project-header">
            <h3>${escapeHTML(title)}</h3>
            <span class="project-badge ${project.isPrivate ? 'badge-private' : 'badge-public'}">
                ${escapeHTML(project.isPrivate ? t.badgePrivate : t.badgePublic)}
            </span>
        </div>
        <p class="project-desc">${escapeHTML(truncatedDesc)}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-footer">
            <span class="project-read-more">${escapeHTML(t.details)}${screenshotCount} &rarr;</span>
            <div class="project-links">
                ${!project.isPrivate && codeUrl ? `<a href="${escapeHTML(codeUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="card-link link-code"><i class="fab fa-github"></i> Code</a>` : ''}
                ${demoUrl ? `<a href="${escapeHTML(demoUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="card-link link-demo"><i class="fas fa-external-link-alt"></i> ${escapeHTML(t.live)}</a>` : ''}
                ${project.isPrivate && !demoUrl ? `<span class="card-link link-closed">${escapeHTML(t.closedSource)}</span>` : ''}
            </div>
        </div>
    `;
    return card;
}

document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter || 'all';
        renderProjects();
    });
});

// Initialize language & load projects
setLanguage(getInitialLang());
loadProjects();

// ===== PROJECT DETAILS MODAL =====
let currentSlideIndex = 0;
let modalSlides = [];
let currentModalProject = { title: '', demoUrl: '' };

async function openProjectModal(repoName, title, fullDescription, githubUrl, demoUrl, languages, screenshots, isPrivate) {
    const t = DYNAMIC_STRINGS[currentLang];
    const modal = document.getElementById('projectModal');
    const gallery = document.getElementById('modalGallery');
    const previewRepoName = repoName.replace(/\s+/g, '-');
    const previewUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${previewRepoName}`;

    currentModalProject = { title, demoUrl: sanitizeUrl(demoUrl) };

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const badgeSlot = document.getElementById('modalBadgeSlot');
    badgeSlot.innerHTML = `<span class="project-badge ${isPrivate ? 'badge-private' : 'badge-public'}">${escapeHTML(isPrivate ? t.badgePrivateModal : t.badgePublic)}</span>`;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('projectModalDescription').textContent = fullDescription || t.noDesc;
    document.getElementById('projectModalTech').innerHTML = (languages || 'Code')
        .split(/[·,]/)
        .map(language => `<span>${escapeHTML(language.trim())}</span>`)
        .join('');

    const safeGithubUrl = sanitizeUrl(githubUrl);
    const safeDemoUrl = sanitizeUrl(demoUrl);
    const codeLink = document.getElementById('projectCodeLink');
    const demoLink = document.getElementById('projectDemoLink');

    codeLink.href = safeGithubUrl || '#';
    codeLink.style.display = safeGithubUrl ? 'inline-flex' : 'none';
    demoLink.href = safeDemoUrl || '#';
    demoLink.style.display = safeDemoUrl ? 'inline-flex' : 'none';
    document.getElementById('modalReportContainer').innerHTML = '';

    gallery.innerHTML = `<div class="gallery-loading"><i class="fas fa-spinner fa-spin"></i> ${escapeHTML(t.loadingScreenshots)}</div>`;

    if (Array.isArray(screenshots) && screenshots.length) {
        modalSlides = screenshots.map(url => ({ type: 'image', url }));
    } else if (isPrivate) {
        modalSlides = [];
    } else {
        try {
            const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/screenshots`);
            if (!response.ok) throw new Error(`Screenshot request failed: ${response.status}`);

            const files = await response.json();
            modalSlides = files
                .filter(file => file.type === 'file' && /\.(png|jpe?g|webp|gif)$/i.test(file.name))
                .map(file => ({ type: 'image', url: file.download_url }));
        } catch (error) {
            modalSlides = [];
        }
    }

    if (!isPrivate) {
        try {
            const videosResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/assets/videos`);
            if (videosResponse.ok) {
                const videoFiles = await videosResponse.json();
                const videoSlides = videoFiles
                    .filter(file => file.type === 'file' && /\.(mp4|webm|ogg)$/i.test(file.name))
                    .map(file => ({ type: 'video', url: file.download_url }));
                modalSlides.push(...videoSlides);
            }
        } catch (error) {
            // Optional videos directory not present
        }
    }

    if (!modalSlides.length && !isPrivate) {
        modalSlides = [{ type: 'image', url: previewUrl }];
    }

    if (!isPrivate) {
        try {
            const reportUrl = await findProjectReport(repoName);
            if (reportUrl) {
                document.getElementById('modalReportContainer').innerHTML = `
                    <a class="btn-report" href="${escapeHTML(reportUrl)}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file-pdf"></i> ${escapeHTML(t.viewReport)}
                    </a>
                `;
            }
        } catch (error) {
            // Optional report not present
        }
    }

    currentSlideIndex = 0;
    renderProjectSlide();
}

async function findProjectReport(repoName) {
    const reportResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/report.pdf`);
    if (reportResponse.ok) {
        return `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/report.pdf`;
    }

    const reportsResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/contents/reports`);
    if (!reportsResponse.ok) return null;

    const reports = await reportsResponse.json();
    const report = reports.find(file => file.type === 'file' && /\.pdf$/i.test(file.name));
    return report
        ? `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/reports/${report.name}`
        : null;
}

function renderGalleryFallback() {
    const t = DYNAMIC_STRINGS[currentLang];
    const gallery = document.getElementById('modalGallery');
    const demoHint = currentModalProject.demoUrl
        ? `<a class="pill-btn pill-ghost pill-sm" href="${escapeHTML(currentModalProject.demoUrl)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${escapeHTML(t.openPreview)}</a>`
        : '';

    gallery.innerHTML = `
        <div class="gallery-fallback">
            <div class="gallery-fallback-icon"><i class="fas fa-terminal"></i></div>
            <div>${escapeHTML(currentModalProject.title)} — ${escapeHTML(t.noLocalScreenshots)}</div>
            ${demoHint}
        </div>
    `;
}

function renderProjectSlide() {
    const gallery = document.getElementById('modalGallery');
    if (!modalSlides.length) {
        renderGalleryFallback();
        return;
    }

    const slide = modalSlides[currentSlideIndex];
    const safeSlideUrl = escapeHTML(slide.url);

    if (slide.type === 'video') {
        gallery.innerHTML = `
            <video controls class="modal-video"><source src="${safeSlideUrl}" type="video/mp4"></video>
            <button class="gallery-arrow gallery-prev" type="button" aria-label="Previous media" onclick="prevSlide()">&#10094;</button>
            <button class="gallery-arrow gallery-next" type="button" aria-label="Next media" onclick="nextSlide()">&#10095;</button>
            <span class="gallery-counter">${currentSlideIndex + 1}/${modalSlides.length}</span>
        `;
    } else {
        gallery.innerHTML = `
            <img id="projectModalImage" src="${safeSlideUrl}" alt="${escapeHTML(currentModalProject.title)} preview">
            <button class="gallery-arrow gallery-prev" type="button" aria-label="Previous screenshot" onclick="prevSlide()">&#10094;</button>
            <button class="gallery-arrow gallery-next" type="button" aria-label="Next screenshot" onclick="nextSlide()">&#10095;</button>
            <span class="gallery-counter">${currentSlideIndex + 1}/${modalSlides.length}</span>
        `;
        const img = document.getElementById('projectModalImage');
        if (img) {
            img.addEventListener('error', renderGalleryFallback, { once: true });
        }
    }

    document.querySelectorAll('.gallery-arrow').forEach(arrow => {
        arrow.style.display = modalSlides.length > 1 ? 'flex' : 'none';
    });
}

function nextSlide() {
    if (!modalSlides.length) return;
    currentSlideIndex = (currentSlideIndex + 1) % modalSlides.length;
    renderProjectSlide();
}

function prevSlide() {
    if (!modalSlides.length) return;
    currentSlideIndex = (currentSlideIndex - 1 + modalSlides.length) % modalSlides.length;
    renderProjectSlide();
}

function closeProjectModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

// ===== CERTIFICATE MODAL =====
function openModal(src) {
    const modal = document.getElementById('certModal');
    document.getElementById('modalImg').src = src;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
    document.body.style.overflow = '';
}

function closeModal(e) {
    if (e.target === e.currentTarget) {
        closeCertModal();
    }
}

// ===== KEYBOARD NAVIGATION FOR MODALS =====
document.addEventListener('keydown', event => {
    const projectModal = document.getElementById('projectModal');
    const certModal = document.getElementById('certModal');

    if (event.key === 'Escape') {
        if (projectModal.style.display === 'flex') closeProjectModal();
        if (certModal.style.display === 'flex') closeCertModal();
    } else if (projectModal.style.display === 'flex' && modalSlides.length > 1) {
        if (event.key === 'ArrowRight') nextSlide();
        if (event.key === 'ArrowLeft') prevSlide();
    }
});
