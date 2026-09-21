// ===== MOBILE MENU =====
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== PROJECTS CONFIGURATION =====
const GITHUB_USERNAME = 'abdoukhemir';

// 1. Private Projects List (Hardcoded details with Demo links, no Code links)
const PRIVATE_PROJECTS = [
    {
        name: "Restauronio",
        homepage: "https://restauronio-frontend.onrender.com/",
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
        fullDescription: 'An AI-powered personal finance application that automates expense tracking. Users can manually log expenses or simply take a photo of any receipt. The system uses Vision AI models to automatically extract line items, total costs, tax amounts, and merchant details from receipt images. Built with a React frontend and Node.js backend, it provides real-time spending analytics, category breakdowns, and budget insights.',
        isPrivate: true
    }
];

// 2. Repositories we want to EXCLUDE from public GitHub list
const EXCLUDED_REPOS = [
    'abdoukhemir.github.io',
    'n8n'
];

async function loadProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    // Render Private Projects First
    PRIVATE_PROJECTS.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });

    // Fetch Public Repos
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        const repos = await res.json();

        const publicRepos = repos.filter(repo => {
            if (repo.fork) return false;
            const shouldExclude = EXCLUDED_REPOS.some(excluded =>
                repo.name.toLowerCase().includes(excluded.toLowerCase())
            );
            return !shouldExclude;
        });

        publicRepos.forEach(repo => {
            const projectData = {
                name: repo.name,
                title: repo.name.replace(/-/g, ' '),
                description: repo.description || 'No description available.',
                language: repo.language || 'Code',
                html_url: repo.html_url,
                homepage: repo.homepage,
                isPrivate: false
            };
            grid.appendChild(createProjectCard(projectData));
        });

    } catch (err) {
        console.error("Failed to load public repos from GitHub:", err);
    }
}

function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[character]));
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    const repoName = project.name;
    const title = project.title || project.name.replace(/-/g, ' ');
    const safeLanguages = project.language || 'Code';
    const fullDescription = project.fullDescription || project.description || 'No description available.';
    const truncatedDesc = fullDescription.length > 150
        ? `${fullDescription.substring(0, 150)}...`
        : fullDescription;

    card.onclick = () => openProjectModal(
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

    // Split tech string into individual tags
    const techTags = safeLanguages
        ? safeLanguages.split(/[·,]/).map(t => `<span>${escapeHTML(t.trim())}</span>`).join('')
        : '';

    card.innerHTML = `
        <div class="project-header">
            <h3>${escapeHTML(title)}</h3>
            <span class="project-badge ${project.isPrivate ? 'badge-private' : 'badge-public'}">
                ${project.isPrivate ? '🔒 Private' : '🌐 Public'}
            </span>
        </div>
        <p>${escapeHTML(truncatedDesc)}</p>
        <div class="project-tech">${techTags}</div>
        <span class="project-read-more">Read More &rarr;</span>
        <div class="project-links">
            ${!project.isPrivate ? `<a href="${project.html_url}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="link-code"><i class="fab fa-github"></i> Code</a>` : ''}
            ${project.homepage ? `<a href="${project.homepage}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="link-demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            ${project.isPrivate && !project.homepage ? `<span class="link-code" style="cursor:default;opacity:0.6">Closed Source</span>` : ''}
        </div>
    `;
    return card;
}

loadProjects();

// ===== PROJECT DETAILS MODAL =====
let currentSlideIndex = 0;
let modalSlides = [];

async function openProjectModal(repoName, title, description, fullDescription, githubUrl, demoUrl, languages, screenshots, isPrivate) {
    const modal = document.getElementById('projectModal');
    const gallery = document.getElementById('modalGallery');
    const previewRepoName = repoName.replace(/\s+/g, '-');
    const previewUrl = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${previewRepoName}`;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('projectModalDescription').textContent = fullDescription || description || 'No description available.';
    document.getElementById('projectModalTech').innerHTML = (languages || 'Code')
        .split(/[·,]/)
        .map(language => `<span>${escapeHTML(language.trim())}</span>`)
        .join('');
    document.getElementById('projectCodeLink').href = githubUrl || '#';
    document.getElementById('projectCodeLink').style.display = githubUrl ? 'inline-flex' : 'none';
    document.getElementById('projectDemoLink').href = demoUrl || '#';
    document.getElementById('projectDemoLink').style.display = demoUrl ? 'inline-flex' : 'none';
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
            console.warn(`No screenshots found for ${repoName}:`, error);
            modalSlides = [];
        }
    }

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
        console.warn(`No videos found for ${repoName}:`, error);
    }

    if (!modalSlides.length) modalSlides = [{ type: 'image', url: previewUrl }];

    let reportUrl = null;
    try {
        reportUrl = await findProjectReport(repoName);
    } catch (error) {
        console.warn(`No report found for ${repoName}:`, error);
    }
    if (reportUrl) {
        document.getElementById('modalReportContainer').innerHTML = `
            <a class="btn-report" href="${reportUrl}" target="_blank" rel="noopener">
                <i class="fas fa-file-pdf"></i> View Project Report
            </a>
        `;
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

function renderProjectSlide() {
    const gallery = document.getElementById('modalGallery');
    const slide = modalSlides[currentSlideIndex];
    const slideMarkup = slide.type === 'video'
        ? `<video controls class="modal-video"><source src="${slide.url}" type="video/mp4"></video>`
        : `<img id="projectModalImage" src="${slide.url}" alt="Project screenshot">`;

    gallery.innerHTML = `
        ${slideMarkup}
        <button class="gallery-arrow gallery-prev" type="button" aria-label="Previous screenshot" onclick="prevSlide()">&#10094;</button>
        <button class="gallery-arrow gallery-next" type="button" aria-label="Next screenshot" onclick="nextSlide()">&#10095;</button>
        <span class="gallery-counter">${currentSlideIndex + 1}/${modalSlides.length}</span>
    `;
    document.querySelectorAll('.gallery-arrow').forEach(arrow => {
        arrow.style.display = modalSlides.length > 1 ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % modalSlides.length;
    renderProjectSlide();
}

function prevSlide() {
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
}

function closeModal(e) {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
}