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

// 1. Private / Featured Projects List
const PRIVATE_PROJECTS = [
    {
        name: "PotaLang",
        homepage: "https://potalang.netlify.app/",
        language: "Android · Offline-First · Mobile App",
        fullDescription: 'A playful, privacy-first Android language learning app featuring Pota the potato chef and the Veggie Gang. Covers 7 languages (French, Spanish, German, Portuguese, Italian, English, and Arabic) from A1 to C2 through an 8-part lesson method, 86 voiced story episodes, character voices, freshness-based smart review, optional CEFR milestone exams, and a dedicated 42-lesson Arabic Alphabet Path with real native voice recordings, full harakat vowel marks, and stroke-order tracing. Built with a local-first architecture so progress stays on-device and lessons work offline.',
        screenshots: [
            'https://potalang.netlify.app/img/feature-graphic.png',
            'https://potalang.netlify.app/img/screens/screen-home.png',
            'https://potalang.netlify.app/img/screens/screen-alphabet.png',
            'https://potalang.netlify.app/img/screens/screen-story.png'
        ],
        isPrivate: true
    },
    {
        name: "Restauronio",
        homepage: "https://restauronio-frontend.onrender.com/",
        language: "TypeScript · Next.js · Node.js · Supabase",
        fullDescription: 'A complete multi-tenant restaurant SaaS platform built as a TypeScript monorepo. Features include modular licensing, real-time Kitchen Display System (KDS), intelligent reservation and floor management, POS order processing, AI-powered customer chat agents via WhatsApp and web, multi-language digital menus with RTL support, AI-assisted theme generation, and hourly usage-based billing. The backend runs on Node.js with Express and Supabase PostgreSQL, while the frontend is built with Next.js and Tailwind CSS. Designed to serve multiple restaurant businesses from a single shared infrastructure with isolated tenant data, centralized admin controls, and per-restaurant module licensing.',
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
        name: "Receipto",
        homepage: "https://receipto-cihc.onrender.com/",
        language: "React · Node.js · Vision AI",
        fullDescription: 'An AI-powered personal finance application that automates expense tracking. Users can manually log expenses or simply take a photo of any receipt. The system uses Vision AI models to automatically extract line items, total costs, tax amounts, and merchant details from receipt images. Built with a React frontend and Node.js backend, it provides real-time spending analytics, category breakdowns, and budget insights.',
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
                description: repo.description || 'No description available.',
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
            grid.innerHTML = '<p class="loading">Could not load projects right now.</p>';
        }
    }
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    const filtered = allProjects.filter(project => {
        if (activeFilter === 'private') return project.isPrivate;
        if (activeFilter === 'public') return !project.isPrivate;
        return true;
    });

    if (!filtered.length) {
        grid.innerHTML = '<p class="loading">No projects in this category yet.</p>';
        return;
    }

    filtered.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.tabIndex = 0;

    const repoName = project.name;
    const title = project.title || project.name.replace(/-/g, ' ');
    const safeLanguages = project.language || 'Code';
    const fullDescription = project.fullDescription || project.description || 'No description available.';
    const truncatedDesc = fullDescription.length > 145
        ? `${fullDescription.substring(0, 145).trim()}...`
        : fullDescription;

    const openDetails = () => openProjectModal(
        repoName,
        title,
        project.description || 'No description available.',
        project.fullDescription,
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
        ? safeLanguages.split(/[·,]/).map(t => t.trim()).filter(Boolean)
        : [];
    const techTags = techItems
        .slice(0, 4)
        .map(t => `<span>${escapeHTML(t)}</span>`)
        .join('');

    const screenshotCount = Array.isArray(project.screenshots) && project.screenshots.length
        ? ` <span class="project-screens-tag">· ${project.screenshots.length} screens</span>`
        : '';

    const codeUrl = sanitizeUrl(project.html_url);
    const demoUrl = sanitizeUrl(project.homepage);

    card.innerHTML = `
        <div class="project-header">
            <h3>${escapeHTML(title)}</h3>
            <span class="project-badge ${project.isPrivate ? 'badge-private' : 'badge-public'}">
                ${project.isPrivate ? 'Private' : 'Open Source'}
            </span>
        </div>
        <p class="project-desc">${escapeHTML(truncatedDesc)}</p>
        <div class="project-tech">${techTags}</div>
        <div class="project-footer">
            <span class="project-read-more">Details${screenshotCount} &rarr;</span>
            <div class="project-links">
                ${!project.isPrivate && codeUrl ? `<a href="${escapeHTML(codeUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="card-link link-code"><i class="fab fa-github"></i> Code</a>` : ''}
                ${demoUrl ? `<a href="${escapeHTML(demoUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="card-link link-demo"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                ${project.isPrivate && !demoUrl ? `<span class="card-link link-closed">Closed Source</span>` : ''}
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

loadProjects();

// ===== PROJECT DETAILS MODAL =====
let currentSlideIndex = 0;
let modalSlides = [];
let currentModalProject = { title: '', demoUrl: '' };

async function openProjectModal(repoName, title, description, fullDescription, githubUrl, demoUrl, languages, screenshots, isPrivate) {
    const modal = document.getElementById('projectModal');
    const gallery = document.getElementById('modalGallery');
    const previewRepoName = repoName.replace(/\s+/g, '-');
    const previewUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${previewRepoName}`;

    currentModalProject = { title, demoUrl: sanitizeUrl(demoUrl) };

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const badgeSlot = document.getElementById('modalBadgeSlot');
    badgeSlot.innerHTML = `<span class="project-badge ${isPrivate ? 'badge-private' : 'badge-public'}">${isPrivate ? 'Private Product' : 'Open Source'}</span>`;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('projectModalDescription').textContent = fullDescription || description || 'No description available.';
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

    gallery.innerHTML = '<div class="gallery-loading"><i class="fas fa-spinner fa-spin"></i> Loading screenshots...</div>';

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
                        <i class="fas fa-file-pdf"></i> View Project Report
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
    const gallery = document.getElementById('modalGallery');
    const demoHint = currentModalProject.demoUrl
        ? `<a class="pill-btn pill-ghost pill-sm" href="${escapeHTML(currentModalProject.demoUrl)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Open live preview</a>`
        : '';

    gallery.innerHTML = `
        <div class="gallery-fallback">
            <div class="gallery-fallback-icon"><i class="fas fa-terminal"></i></div>
            <div>${escapeHTML(currentModalProject.title)} — no local screenshots attached</div>
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
