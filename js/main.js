/* ============================================================
   Renders nav, footer, and every config-driven section on the
   page. Add your content in config.js — this file should
   rarely need edits.
   ============================================================ */

const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.65V23h-4V8z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.15v3.19c0 .3.2.66.79.55C20.71 21.38 24 17.08 24 12 24 5.65 18.35.5 12 .5z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.5h3.6l-7.86 8.98L24 22.5h-7.4l-5.8-7.6-6.63 7.6H.56l8.4-9.62L0 1.5h7.58l5.24 6.94L18.9 1.5zm-1.26 18.9h2L6.5 3.48H4.35L17.64 20.4z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.18.2-.3.29-.5.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.5.07-.77.37-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.15.2 2.02 3.1 4.9 4.34.68.3 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34zM12.02 2C6.5 2 2 6.48 2 12c0 1.87.5 3.63 1.44 5.15L2 22l4.98-1.4A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm18.1 2H3.9l8.1 6.4L20.1 6zM2 8.2V18h20V8.2l-9.4 7.4a1 1 0 0 1-1.2 0L2 8.2z"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>`
};

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function fullName(c) {
  return `${c.name.first} ${c.name.middle} ${c.name.last}`;
}

function socialsHtml() {
  const s = SITE_CONFIG.socials;
  const items = [
    ['linkedin', s.linkedin],
    ['github', s.github],
    ['twitter', s.twitter],
    ['whatsapp', s.whatsapp],
    ['email', SITE_CONFIG.email ? `mailto:${SITE_CONFIG.email}` : '']
  ].filter(([, url]) => url);
  return items.map(([key, url]) =>
    `<a href="${url}" target="_blank" rel="noopener">${ICONS[key]}</a>`
  ).join('');
}

function renderNav() {
  const mount = document.getElementById('site-header');
  if (!mount) return;
  const links = [
    ['#about', 'about'],
    ['#skills', 'skills'],
    ['#cv', 'cv']
  ];
  const linksHtml = links.map(([href, label]) =>
    `<a href="${href}" data-nav-link="${href}">${label}</a>`
  ).join('');

  mount.appendChild(el(`
    <div class="nav container">
      <a href="#top" class="nav-logo">${SITE_CONFIG.name.first.toLowerCase()}<span class="dim">.dev</span></a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">menu</button>
      <div class="nav-center" id="nav-links">
        <div class="nav-links">${linksHtml}</div>
      </div>
      <div class="nav-right">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle light/dark theme"></button>
        <div class="socials">${socialsHtml()}</div>
        <a href="#contact" class="btn btn-primary nav-hire">Hire me</a>
      </div>
    </div>
  `));

  const toggle = document.getElementById('nav-toggle');
  const navCenter = document.getElementById('nav-links');
  toggle.addEventListener('click', () => navCenter.classList.toggle('open'));
  navCenter.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navCenter.classList.remove('open'))
  );

  initScrollSpy();
  initTheme();
}

function initTheme() {
  const root = document.documentElement;
  // Dark is the default look — the toggle switches to light, not tied to device preference.
  root.dataset.theme = root.dataset.theme || 'dark';

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const paint = () => { btn.innerHTML = root.dataset.theme === 'dark' ? ICONS.sun : ICONS.moon; };
  paint();
  btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    paint();
  });
}

function initScrollSpy() {
  const sections = ['about', 'skills', 'powerbi', 'excel', 'sql', 'python', 'cv']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;

  const navAnchors = document.querySelectorAll('[data-nav-link]');
  const setActive = (id) => {
    navAnchors.forEach(a => a.classList.toggle('active', a.dataset.navLink === `#${id}`));
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}

function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.appendChild(el(`
    <div class="container footer-row">
      <div class="footer-note">© ${new Date().getFullYear()} ${fullName(SITE_CONFIG)} — built with SQL, coffee and stubbornness.</div>
    </div>
  `));
}

function renderHero() {
  const mount = document.getElementById('hero-mount');
  if (!mount) return;
  const c = SITE_CONFIG;
  mount.innerHTML = `
    <div class="hero-bg-photo" style="background-image:url('${c.heroImage}')"></div>
    <div class="container hero-inner">
      <span class="eyebrow">${c.location} · open to work</span>
      <h1 class="hero-name">
        <span class="given">${c.name.first} ${c.name.middle}</span>
        <span class="family">${c.name.last}</span>
      </h1>
      <p class="hero-role">${c.role}</p>
      <p class="hero-tagline">${c.tagline}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${c.cvPdfUrl || '#cv'}" ${c.cvPdfUrl ? 'download' : ''}>${c.cvPdfUrl ? 'Download CV' : 'View CV'}</a>
        <a class="btn" href="#powerbi">See Power BI work</a>
        <a class="btn" href="#sql">Browse SQL</a>
      </div>

      <div class="console reveal">
        <div class="console-bar">
          <span class="console-dot" style="background:#e05f5f"></span>
          <span class="console-dot" style="background:#e8c15c"></span>
          <span class="console-dot" style="background:#5ec98a"></span>
          <span class="console-title">query — analysts.sql</span>
        </div>
        <div class="console-body">
          <div class="console-query"><span class="kw">SELECT</span> * <span class="kw">FROM</span> analysts <span class="kw">WHERE</span> name = '${fullName(c)}';</div>
          <dl class="console-row">
            <dt>role</dt><dd>${c.role}</dd>
            <dt>stack</dt><dd>${c.skills.map(s => s.name).join(' · ')}</dd>
            <dt>location</dt><dd>${c.location}</dd>
            <dt>status</dt><dd><span class="status-tag">available for opportunities</span></dd>
          </dl>
        </div>
      </div>
    </div>
  `;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderSkills() {
  const mount = document.getElementById('skills-mount');
  if (!mount) return;
  mount.innerHTML = SITE_CONFIG.skills.map(s => {
    const href = s.link || `#skill-${slugify(s.name)}`;
    return `
    <a class="skill-cell" href="${href}">
      <div class="skill-name">${s.name}</div>
      <div class="skill-detail">${s.detail}</div>
    </a>
  `;
  }).join('');
}

function renderMoreSkills() {
  const mount = document.getElementById('more-skills-mount');
  if (!mount) return;
  const extras = SITE_CONFIG.skills.filter(s => !s.link);
  if (!extras.length) {
    document.getElementById('more-skills').style.display = 'none';
    return;
  }
  mount.innerHTML = extras.map(s => `
    <div class="skill-detail-card reveal" id="skill-${slugify(s.name)}">
      <div class="card-title">${s.name}</div>
      <div class="card-desc">${s.detail}</div>
      ${s.highlights && s.highlights.length
        ? `<ul class="skill-highlights">${s.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
        : `<p class="skill-empty-note">No examples added yet — add bullet points under "highlights" for ${s.name} in js/config.js.</p>`}
    </div>
  `).join('');
}

function renderPowerBI() {
  const mount = document.getElementById('powerbi-mount');
  if (!mount) return;
  mount.innerHTML = SITE_CONFIG.powerbiProjects.map((p, pi) => `
    <div class="card reveal">
      <div class="card-embed ${p.image ? 'square' : ''}">
        ${(p.image || p.embedUrl) ? `<button class="expand-btn" data-expand="${pi}" aria-label="Enlarge">⤢</button>` : ''}
        ${p.image
          ? `<img src="${p.image}" alt="${p.title} screenshot">`
          : p.embedUrl
            ? `<iframe src="${p.embedUrl}" allowfullscreen></iframe>`
            : `<div class="card-embed-placeholder">no embed link yet —<br>paste your Power BI<br>"publish to web" URL into embedUrl,<br>or drop a screenshot in /assets<br>and set "image" in config.js</div>`}
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.description}</div>
        <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        ${p.details && p.details.length ? `
          <button class="details-toggle" data-details="${pi}">Read more ▾</button>
          <ul class="project-details" id="details-${pi}" hidden>
            ${p.details.map(d => `<li>${d}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    </div>
  `).join('');

  mount.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = SITE_CONFIG.powerbiProjects[Number(btn.dataset.expand)];
      const item = p.image
        ? { src: p.image, caption: p.title, type: 'image' }
        : { src: p.embedUrl, caption: p.title, type: 'iframe' };
      openLightbox([item], 0, '');
    });
  });

  mount.querySelectorAll('.details-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = document.getElementById(`details-${btn.dataset.details}`);
      const isHidden = list.hidden;
      list.hidden = !isHidden;
      btn.textContent = isHidden ? 'Read less ▴' : 'Read more ▾';
    });
  });
}

function highlightSQL(code) {
  const kws = ['SELECT','FROM','WHERE','GROUP BY','ORDER BY','JOIN','ON','AS','WITH','OVER','PARTITION BY','ROWS BETWEEN','PRECEDING','CURRENT ROW','AND','DISTINCT','SUM','COUNT','MIN','MAX','USING','DATE_TRUNC'];
  let escaped = code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  kws.sort((a,b) => b.length - a.length).forEach(kw => {
    const re = new RegExp(`\\b${kw.replace(/ /g, '\\s+')}\\b`, 'g');
    escaped = escaped.replace(re, m => `<span class="tok-kw">${m}</span>`);
  });
  return escaped;
}

function renderSQL() {
  const mount = document.getElementById('sql-mount');
  if (!mount) return;
  mount.innerHTML = SITE_CONFIG.sqlSnippets.map((s, i) => `
    <div class="snippet reveal">
      <div class="snippet-head">
        <div>
          <div class="snippet-title">${s.title}</div>
          <div class="snippet-desc">${s.description}</div>
        </div>
        <button class="copy-btn" data-copy-target="snippet-${i}">copy</button>
      </div>
      <pre id="snippet-${i}">${highlightSQL(s.code)}</pre>
    </div>
  `).join('');

  mount.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.copyTarget;
      const text = document.getElementById(targetId).innerText;
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'copied';
        setTimeout(() => { btn.textContent = original; }, 1500);
      });
    });
  });
}

function renderPython() {
  const mount = document.getElementById('python-mount');
  if (!mount) return;
  mount.innerHTML = SITE_CONFIG.pythonProjects.map(p => `
    <div class="card reveal">
      <div class="card-embed ${p.image ? 'square' : ''}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.title} screenshot">`
          : p.notebookUrl
            ? `<iframe src="${p.notebookUrl}"></iframe>`
            : `<div class="card-embed-placeholder">no notebook linked yet —<br>run: jupyter nbconvert --to html<br>your_notebook.ipynb<br>then drop it in /assets/notebooks<br>and set notebookUrl in config.js,<br>or add a screenshot via "image"</div>`}
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.description}</div>
        <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-links">
          ${p.notebookUrl ? `<a href="${p.notebookUrl}" target="_blank">Open notebook</a>` : ''}
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank">GitHub</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderCV() {
  const pdfBlock = document.getElementById('cv-pdf-block');
  if (!pdfBlock) return;
  const c = SITE_CONFIG;
  const viewer = document.getElementById('cv-pdf-viewer');
  const downloadBtn = document.getElementById('cv-pdf-download');

  if (c.cvPdfUrl) {
    viewer.innerHTML = `<iframe id="cv-pdf-frame" title="CV PDF" src="${c.cvPdfUrl}"></iframe>`;
    downloadBtn.href = c.cvPdfUrl;
    downloadBtn.style.display = '';
  } else {
    viewer.innerHTML = `<div class="card-embed-placeholder">no CV uploaded yet —<br>drop a PDF in /assets<br>and set "cvPdfUrl" in config.js</div>`;
    downloadBtn.style.display = 'none';
  }
}

function renderExcel() {
  const mount = document.getElementById('excel-mount');
  if (!mount) return;

  mount.innerHTML = SITE_CONFIG.excelProjects.map((p, pi) => `
    <div class="card workflow-card reveal">
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.description}</div>
        <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="workflow-grid">
          ${p.images.map((img, i) => `
            <div class="workflow-item" data-project="${pi}" data-step="${i}">
              <div class="workflow-step">
                <span class="step-num">${i + 1}/${p.images.length}</span>
                ${img.src
                  ? `<img src="${img.src}" alt="${img.caption || p.title + ' step ' + (i + 1)}">`
                  : `<div class="workflow-step-placeholder">add screenshot<br>&amp; set "src" in<br>config.js</div>`}
              </div>
              <p class="workflow-caption">${img.caption || `Step ${i + 1}`}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  mount.querySelectorAll('.workflow-item').forEach(step => {
    step.addEventListener('click', () => {
      const pi = Number(step.dataset.project);
      const si = Number(step.dataset.step);
      openLightbox(SITE_CONFIG.excelProjects[pi].images, si, SITE_CONFIG.excelProjects[pi].title);
    });
  });
}

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index, title) {
  lightboxImages = images;
  lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.dataset.title = title || '';
  paintLightbox();
  lb.classList.add('open');
}

function paintLightbox() {
  const item = lightboxImages[lightboxIndex];
  if (!item) return;
  const lb = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightbox-img');
  const frameEl = document.getElementById('lightbox-frame');
  const captionEl = document.getElementById('lightbox-caption');
  const controlsEl = document.getElementById('lightbox-controls');
  if (!lb || !imgEl || !frameEl || !captionEl || !controlsEl) {
    console.warn('Lightbox markup incomplete — check index.html has all #lightbox-* elements.');
    return;
  }

  if (item.type === 'iframe') {
    imgEl.style.display = 'none';
    imgEl.src = '';
    frameEl.style.display = 'block';
    frameEl.src = item.src || 'about:blank';
  } else {
    frameEl.style.display = 'none';
    frameEl.src = 'about:blank';
    imgEl.style.display = 'block';
    imgEl.src = item.src || '';
  }

  const stepLabel = lightboxImages.length > 1 ? ` (${lightboxIndex + 1}/${lightboxImages.length})` : '';
  captionEl.textContent =
    `${lb.dataset.title ? lb.dataset.title + ' — ' : ''}${item.caption || ''}${stepLabel}`.trim();
  controlsEl.style.display = lightboxImages.length > 1 ? 'flex' : 'none';
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const close = () => lb.classList.remove('open');
  document.getElementById('lightbox-close').addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.getElementById('lightbox-prev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    paintLightbox();
  });
  document.getElementById('lightbox-next').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    paintLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') document.getElementById('lightbox-prev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightbox-next').click();
  });
}

function renderContact() {
  const heading = document.getElementById('contact-heading');
  if (!heading) return;
  heading.textContent = SITE_CONFIG.contact.heading;
  document.getElementById('contact-blurb').textContent = SITE_CONFIG.contact.blurb;
  document.getElementById('contact-note').innerHTML =
    `Prefer email directly? <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>`;

  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => io.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  renderHero();
  renderSkills();
  renderMoreSkills();
  renderPowerBI();
  renderExcel();
  renderSQL();
  renderPython();
  renderCV();
  renderContact();
  initLightbox();
  initReveal();
});
