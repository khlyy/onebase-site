/**
 * onebase. v5 Story Edition: rendering, scroll story, language, lightbox, beta form.
 */
import { I18N } from './i18n.js';

const SHOT_TOP = {
  '09-voice-listening.png': 'sheet',
  '10-voice-ai-processing.png': 'sheet',
  '11-voice-action-plan.png': 'sheet',
  '04-receipt-scanner.png': 'dark',
  '08-manual-entry.png': 'manual',
};

const STATUS_SVG =
  '<svg class="status-svg" viewBox="0 0 300 30" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
  '<text x="20" y="20" font-size="13.5" font-weight="600" fill="currentColor" font-family="IBM Plex Sans, sans-serif">9:41</text>' +
  '<rect x="110" y="5" width="80" height="20" rx="10" fill="#101A16"/>' +
  '<rect x="240" y="14" width="3" height="6" rx="1" fill="currentColor"/>' +
  '<rect x="245" y="12" width="3" height="8" rx="1" fill="currentColor"/>' +
  '<rect x="250" y="9" width="3" height="11" rx="1" fill="currentColor"/>' +
  '<rect x="255" y="7" width="3" height="13" rx="1" fill="currentColor"/>' +
  '<rect x="264" y="8" width="21" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>' +
  '<rect x="266.5" y="10.5" width="15" height="7" rx="1.4" fill="currentColor"/>' +
  '</svg>';

function esc(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function initialLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'en') return q;
    const s = localStorage.getItem('onebase_lang');
    if (s === 'ar' || s === 'en') return s;
  } catch {
    // ignore
  }
  return window.ONEBASE_CONFIG?.defaultLang === 'ar' ? 'ar' : 'en';
}

let lang = initialLang();
let storyIndex = 0;
let storyObserver = null;
let lightboxIndex = -1;
let lastFocus = null;
let lastSubmission = null;

const shotPath = (shot) => `../assets/screenshots/${lang}/${shot}`;

function chapters() {
  return I18N[lang].story.acts.flatMap((a) => a.chapters);
}

function phoneMarkup(shot, alt, label) {
  return `
    <button type="button" class="phone-frame" data-top="${SHOT_TOP[shot] || 'canvas'}" data-lightbox-shot="${esc(shot)}" aria-label="${esc(label)}">
      <span class="phone-screen">
        <span class="phone-status-bar">${STATUS_SVG}</span>
        <img src="${shotPath(shot)}" alt="${esc(alt)}" width="786" height="1704" loading="lazy" />
      </span>
    </button>`;
}

/* ----------------------------------------------------------- Renderers */
function renderStatic() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = dict.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = getByPath(dict, el.dataset.i18n);
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const v = getByPath(dict, el.dataset.i18nPlaceholder);
    if (typeof v === 'string') el.setAttribute('placeholder', v);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const v = getByPath(dict, el.dataset.i18nAria);
    if (typeof v === 'string') el.setAttribute('aria-label', v);
  });

  const langBtn = document.getElementById('btn-lang');
  langBtn.textContent = dict.nav.langToggle;
  langBtn.setAttribute('aria-label', dict.nav.langAria);

  fillSelect(document.getElementById('f-use'), dict.cta.useOptions);
  fillSelect(document.getElementById('f-platform'), dict.cta.platformOptions);
}

function fillSelect(el, options) {
  const prev = el.value;
  el.innerHTML = options.map((o) => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('');
  if (prev && options.some((o) => o.value === prev)) el.value = prev;
}

function renderHero() {
  const h = I18N[lang].hero;
  document.getElementById('hero-gallery').innerHTML = h.gallery
    .map(
      (g) => `
      <figure class="gallery-item">
        ${phoneMarkup(g.shot, g.alt, `${h.zoomHint}: ${g.caption}`)}
        <figcaption>${esc(g.caption)}</figcaption>
      </figure>`
    )
    .join('');
}

function renderFits() {
  document.getElementById('fits-grid').innerHTML = I18N[lang].fits.items
    .map((it) => `<div class="fits-item"><h3>${esc(it.title)}</h3><p>${esc(it.body)}</p></div>`)
    .join('');
}

function renderStory() {
  const s = I18N[lang].story;
  let idx = 0;
  document.getElementById('story-acts').innerHTML = s.acts
    .map((act) =>
      act.chapters
        .map((ch, k) => {
          const i = idx++;
          const actHead = k === 0 ? `<h3 class="act-title">${esc(act.title)}</h3>` : '';
          return `
          <article class="chapter${k === 0 ? ' chapter--act-start' : ''}" data-chapter="${i}">
            ${actHead}
            <h4>${esc(ch.title)}</h4>
            <p>${esc(ch.body)}</p>
            <div class="chapter-phone">${phoneMarkup(ch.shot, ch.title, `${I18N[lang].hero.zoomHint}: ${ch.name}`)}</div>
          </article>`;
        })
        .join('')
    )
    .join('');

  const list = chapters();
  const frame = document.getElementById('story-frame');
  frame.querySelector('[data-status]').innerHTML = STATUS_SVG;
  document.getElementById('story-stack').innerHTML = list
    .map(
      (ch, i) =>
        `<img src="${shotPath(ch.shot)}" alt="${i === storyIndex ? esc(ch.title) : ''}" width="786" height="1704" data-stack="${i}"${SHOT_TOP[ch.shot] === 'sheet' ? ' class="is-sheet"' : ''} />`
    )
    .join('');

  setStoryIndex(Math.min(storyIndex, list.length - 1));
  observeStory();
}

function setStoryIndex(i) {
  const list = chapters();
  storyIndex = i;
  const ch = list[i];
  document.querySelectorAll('.chapter').forEach((el) => el.classList.toggle('is-active', Number(el.dataset.chapter) === i));
  document.querySelectorAll('#story-stack img').forEach((img) => {
    const on = Number(img.dataset.stack) === i;
    img.classList.toggle('is-active', on);
    img.alt = on ? ch.title : '';
  });
  const frame = document.getElementById('story-frame');
  frame.dataset.top = SHOT_TOP[ch.shot] || 'canvas';
  frame.dataset.lightboxShot = ch.shot;
  frame.setAttribute('aria-label', `${I18N[lang].hero.zoomHint}: ${ch.name}`);
  document.getElementById('story-caption').innerHTML =
    `<strong>${esc(ch.name)}</strong><span>${esc(I18N[lang].story.counter(i + 1, list.length))}</span>`;
}

function observeStory() {
  storyObserver?.disconnect();
  if (typeof IntersectionObserver === 'undefined') return;
  storyObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) setStoryIndex(Number(e.target.dataset.chapter));
      }
    },
    { rootMargin: '-48% 0px -48% 0px', threshold: 0 }
  );
  document.querySelectorAll('.chapter').forEach((el) => storyObserver.observe(el));
}

function renderAll() {
  renderStatic();
  renderHero();
  renderStory();
  renderFits();
  if (lastSubmission) renderSuccess();
  if (lightboxIndex !== -1) openLightbox(lightboxIndex);
}

function setLang(next) {
  lang = next === 'ar' ? 'ar' : 'en';
  try {
    localStorage.setItem('onebase_lang', lang);
  } catch {
    // ignore
  }
  renderAll();
}

/* ----------------------------------------------------------- Lightbox */
function openLightbox(index) {
  const list = chapters();
  if (index < 0 || index >= list.length) return;
  const modal = document.getElementById('lightbox');
  const wasClosed = modal.hidden;
  if (wasClosed) lastFocus = document.activeElement;
  lightboxIndex = index;
  document.getElementById('lightbox-title').textContent = list[index].name;
  const img = document.getElementById('lightbox-img');
  img.src = shotPath(list[index].shot);
  img.alt = list[index].title;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  if (wasClosed) document.getElementById('lb-close').focus();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox');
  if (modal.hidden) return;
  modal.hidden = true;
  lightboxIndex = -1;
  document.body.style.overflow = '';
  lastFocus?.focus?.();
}

function stepLightbox(d) {
  if (lightboxIndex === -1) return;
  const n = chapters().length;
  openLightbox((lightboxIndex + d + n) % n);
}

/* ----------------------------------------------------------- Form */
function validContact(v) {
  const s = String(v || '').trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return true;
  return /^\d{8,15}$/.test(s.replace(/[\s\-().+]/g, ''));
}

function clearErrors() {
  ['err-name', 'err-contact', 'err-submit'].forEach((id) => (document.getElementById(id).textContent = ''));
  document.getElementById('f-name').classList.remove('is-error');
  document.getElementById('f-contact').classList.remove('is-error');
}

function renderSuccess() {
  const c = I18N[lang].cta;
  const platform = c.platformOptions.find((o) => o.value === lastSubmission.platform)?.label || lastSubmission.platform;
  document.getElementById('success-title').textContent = c.successTitle;
  document.getElementById('success-body').textContent = c.successBody.replace('{platform}', platform);
  document.getElementById('btn-reset').textContent = c.reset;
}

/* ----------------------------------------------------------- Events */
function bind() {
  document.getElementById('btn-lang').addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));
  document.getElementById('btn-lang-footer').addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lightbox-shot]');
    if (!t) return;
    const idx = chapters().findIndex((c) => c.shot === t.dataset.lightboxShot);
    openLightbox(idx >= 0 ? idx : 0);
  });
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => stepLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', () => stepLightbox(1));
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (lightboxIndex === -1) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(lang === 'ar' ? 1 : -1);
    else if (e.key === 'ArrowRight') stepLightbox(lang === 'ar' ? -1 : 1);
    else if (e.key === 'Tab') {
      const f = ['lb-prev', 'lb-next', 'lb-close'].map((id) => document.getElementById(id));
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && i === f.length - 1) {
        e.preventDefault();
        f[0].focus();
      }
    }
  });

  const form = document.getElementById('beta-form');
  document.getElementById('f-name').addEventListener('input', clearErrors);
  document.getElementById('f-contact').addEventListener('input', clearErrors);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();
    const c = I18N[lang].cta;
    const nameEl = document.getElementById('f-name');
    const contactEl = document.getElementById('f-contact');
    const name = nameEl.value.trim();
    const contact = contactEl.value.trim();
    let ok = true;
    if (name.length < 2) {
      document.getElementById('err-name').textContent = c.errName;
      nameEl.classList.add('is-error');
      ok = false;
    }
    if (!validContact(contact)) {
      document.getElementById('err-contact').textContent = c.errContact;
      contactEl.classList.add('is-error');
      ok = false;
    }
    if (!ok) {
      (name.length < 2 ? nameEl : contactEl).focus();
      return;
    }
    const payload = {
      name,
      contact,
      businessType: document.getElementById('f-use').value,
      platform: document.getElementById('f-platform').value,
      language: lang,
      source: 'onebase-v5-story',
      submittedAt: new Date().toISOString(),
    };
    const btn = document.getElementById('btn-submit');
    const endpoint = (window.ONEBASE_CONFIG?.waitlistEndpoint || '').trim();
    if (endpoint) {
      btn.disabled = true;
      btn.textContent = c.submitting;
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        document.getElementById('err-submit').textContent = c.errEndpoint;
        btn.disabled = false;
        btn.textContent = c.submit;
        return;
      }
    } else {
      try {
        const prev = JSON.parse(localStorage.getItem('onebase_waitlist_submissions') || '[]');
        prev.push(payload);
        localStorage.setItem('onebase_waitlist_submissions', JSON.stringify(prev));
      } catch {
        // ignore
      }
    }
    lastSubmission = payload;
    form.hidden = true;
    renderSuccess();
    document.getElementById('form-success').hidden = false;
    btn.disabled = false;
    btn.textContent = c.submit;
  });
  document.getElementById('btn-reset').addEventListener('click', () => {
    lastSubmission = null;
    document.getElementById('form-success').hidden = true;
    form.hidden = false;
    form.reset();
    clearErrors();
    document.getElementById('f-name').focus();
  });
}

bind();
renderAll();
