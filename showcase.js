/**
 * onebase. — Full-Height Screen Showcase, 5-Mode Entry & AI Switcher, Solo/Team Modes, App Tour & Lightbox
 */
import { I18N } from './i18n.js';

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const ENTRY_ICONS = {
  mic:
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>',
  spark:
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.3L19 10l-5.1 1.7L12 17l-1.9-5.3L5 10l5.1-1.7z"/><path d="M19 3v3M20.5 4.5h-3"/></svg>',
  plan:
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 10l1.5 1.5L13 8.5"/><line x1="8.5" y1="15.5" x2="15.5" y2="15.5"/></svg>',
  camera:
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
  edit:
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
};

const CHECK_SVG =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';

function applyPhoneTopStyle(frame, topStyle) {
  if (!frame) return;
  frame.classList.toggle('phone-frame--dark-top', topStyle === 'dark');
  frame.classList.toggle('phone-frame--sheet-top', topStyle === 'sheet');
  frame.classList.toggle('phone-frame--manual-top', topStyle === 'manual');
}

export function createShowcaseController() {
  let lang = 'en';
  let heroRole = 'owner';
  let activeEntryIndex = 0;
  let activeModeKey = 'solo';
  let activeTourIndex = 0;
  let lightboxIndex = -1;
  let lastFocusedEl = null;

  function shotPath(shot) {
    return `./assets/screenshots/${lang}/${shot}`;
  }

  function renderHeroStage() {
    const h = I18N[lang].hero;
    const isOwner = heroRole === 'owner';
    const shot = isOwner ? '01-owner-home.png' : '02-employee-wallet.png';

    const frame = document.getElementById('hero-phone-frame');
    const img = document.getElementById('hero-phone-img');
    const caption = document.getElementById('hero-phone-caption');
    const ownerBtn = document.getElementById('btn-hero-owner');
    const empBtn = document.getElementById('btn-hero-employee');

    if (ownerBtn && empBtn) {
      ownerBtn.setAttribute('aria-selected', String(isOwner));
      empBtn.setAttribute('aria-selected', String(!isOwner));
    }
    if (frame) {
      frame.dataset.lightboxShot = shot;
      applyPhoneTopStyle(frame, 'canvas');
      frame.setAttribute('aria-label', `${h.inspectHint}: ${isOwner ? h.roleOwner : h.roleEmployee}`);
    }
    if (img) {
      img.src = shotPath(shot);
      img.alt = isOwner ? h.ownerAlt : h.employeeAlt;
    }
    if (caption) {
      caption.textContent = isOwner ? h.ownerCaption : h.employeeCaption;
    }
  }

  function renderEntrySection() {
    const e = I18N[lang].entry;
    if (activeEntryIndex < 0 || activeEntryIndex >= e.modes.length) activeEntryIndex = 0;
    const active = e.modes[activeEntryIndex];

    const list = document.getElementById('entry-modes-list');
    const img = document.getElementById('entry-phone-img');
    const frame = document.getElementById('entry-phone-frame');
    const caption = document.getElementById('entry-phone-caption');

    if (list) {
      list.innerHTML = e.modes
        .map((mode, idx) => {
          const isSelected = idx === activeEntryIndex;
          return `
          <button
            type="button"
            class="entry-mode-btn"
            role="tab"
            id="entry-mode-${escapeHtml(mode.id)}"
            aria-selected="${isSelected}"
            aria-controls="entry-phone-frame"
            tabindex="${isSelected ? '0' : '-1'}"
            data-entry-index="${idx}"
          >
            <span class="entry-mode-icon">${ENTRY_ICONS[mode.icon] || ENTRY_ICONS.mic}</span>
            <span class="entry-mode-copy">
              <strong>${escapeHtml(mode.title)}</strong>
              <span>${escapeHtml(mode.body)}</span>
            </span>
          </button>`;
        })
        .join('');
    }
    if (img) {
      img.src = shotPath(active.shot);
      img.alt = active.alt;
    }
    if (frame) {
      frame.dataset.lightboxShot = active.shot;
      applyPhoneTopStyle(frame, active.topStyle);
      frame.setAttribute('aria-label', `${I18N[lang].hero.inspectHint}: ${active.title}`);
    }
    if (caption) {
      caption.textContent = active.caption;
    }
  }

  function renderModesSection() {
    const m = I18N[lang].modes;
    const isSolo = activeModeKey !== 'team';
    const view = isSolo ? m.views.solo : m.views.team;

    const soloBtn = document.getElementById('btn-mode-solo');
    const teamBtn = document.getElementById('btn-mode-team');
    const list = document.getElementById('modes-bullets');
    const img = document.getElementById('modes-phone-img');
    const frame = document.getElementById('modes-phone-frame');
    const caption = document.getElementById('modes-phone-caption');

    if (soloBtn && teamBtn) {
      soloBtn.setAttribute('aria-selected', String(isSolo));
      teamBtn.setAttribute('aria-selected', String(!isSolo));
    }
    if (list) {
      list.innerHTML = view.bullets
        .map(
          (text) => `
          <li>
            <span class="check-dot">${CHECK_SVG}</span>
            <span>${escapeHtml(text)}</span>
          </li>`
        )
        .join('');
    }
    if (img) {
      img.src = shotPath(view.shot);
      img.alt = view.alt;
    }
    if (frame) {
      frame.dataset.lightboxShot = view.shot;
      applyPhoneTopStyle(frame, view.topStyle);
      frame.setAttribute(
        'aria-label',
        `${I18N[lang].hero.inspectHint}: ${isSolo ? m.soloTab : m.teamTab}`
      );
    }
    if (caption) {
      caption.textContent = view.caption;
    }
  }

  function renderTour() {
    const t = I18N[lang].tour;
    const tabsContainer = document.getElementById('tour-tabs');
    const copyPanel = document.getElementById('tour-copy-panel');
    const phoneFrame = document.getElementById('tour-phone-frame');
    const phoneImg = document.getElementById('tour-phone-img');

    if (activeTourIndex < 0 || activeTourIndex >= t.tabs.length) activeTourIndex = 0;
    const activeTab = t.tabs[activeTourIndex];

    if (tabsContainer) {
      tabsContainer.innerHTML = t.tabs
        .map(
          (tab, idx) => `
          <button
            type="button"
            class="tour-tab-btn"
            role="tab"
            id="tour-tab-${escapeHtml(tab.id)}"
            aria-selected="${idx === activeTourIndex}"
            aria-controls="tour-copy-panel"
            tabindex="${idx === activeTourIndex ? '0' : '-1'}"
            data-tour-index="${idx}"
          >${escapeHtml(tab.tabLabel)}</button>`
        )
        .join('');
    }

    if (copyPanel) {
      copyPanel.setAttribute('aria-labelledby', `tour-tab-${activeTab.id}`);
      copyPanel.innerHTML = `
        <h3>${escapeHtml(activeTab.title)}</h3>
        <p class="tour-body">${escapeHtml(activeTab.body)}</p>
        <ul class="check-list">
          ${activeTab.bullets
            .map(
              (b) => `
              <li>
                <span class="check-dot">${CHECK_SVG}</span>
                <span>${escapeHtml(b)}</span>
              </li>`
            )
            .join('')}
        </ul>
        <div class="tour-actions">
          <button
            type="button"
            class="btn btn--outline btn--sm"
            id="tour-inspect-btn"
            data-lightbox-shot="${escapeHtml(activeTab.shot)}"
          >${escapeHtml(t.inspectBtn)}</button>
        </div>
      `;
    }

    if (phoneFrame) {
      phoneFrame.dataset.lightboxShot = activeTab.shot;
      applyPhoneTopStyle(phoneFrame, activeTab.shot === '04-receipt-scanner.png' ? 'dark' : 'canvas');
      phoneFrame.setAttribute('aria-label', `${I18N[lang].hero.inspectHint}: ${activeTab.tabLabel}`);
    }

    if (phoneImg) {
      phoneImg.src = shotPath(activeTab.shot);
      phoneImg.alt = activeTab.alt;
    }
  }

  function openLightboxByIndex(index) {
    const screens = I18N[lang].screens;
    if (index < 0 || index >= screens.length) return;
    const modal = document.getElementById('gallery-lightbox');
    const titleEl = document.getElementById('lightbox-title');
    const imgEl = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    if (!modal || !titleEl || !imgEl) return;

    const wasClosed = modal.hidden;
    if (wasClosed) lastFocusedEl = document.activeElement;
    lightboxIndex = index;

    const item = screens[index];
    titleEl.textContent = item.title;
    imgEl.src = shotPath(item.shot);
    imgEl.alt = item.title;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (wasClosed && closeBtn) closeBtn.focus();
  }

  function openLightboxByShot(shot) {
    const screens = I18N[lang].screens;
    const idx = screens.findIndex((s) => s.shot === shot);
    openLightboxByIndex(idx >= 0 ? idx : 0);
  }

  function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    lightboxIndex = -1;
    document.body.style.overflow = '';
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function stepLightbox(delta) {
    if (lightboxIndex === -1) return;
    const total = I18N[lang].screens.length;
    openLightboxByIndex((lightboxIndex + delta + total) % total);
  }

  function bindEvents() {
    document.getElementById('btn-hero-owner')?.addEventListener('click', () => {
      heroRole = 'owner';
      renderHeroStage();
    });

    document.getElementById('btn-hero-employee')?.addEventListener('click', () => {
      heroRole = 'employee';
      renderHeroStage();
    });

    document.getElementById('entry-modes-list')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-entry-index]');
      if (!btn) return;
      activeEntryIndex = Number(btn.dataset.entryIndex);
      renderEntrySection();
    });

    document.getElementById('entry-modes-list')?.addEventListener('keydown', (e) => {
      const total = I18N[lang].entry.modes.length;
      if (
        e.key !== 'ArrowDown' &&
        e.key !== 'ArrowUp' &&
        e.key !== 'ArrowRight' &&
        e.key !== 'ArrowLeft'
      ) {
        return;
      }
      e.preventDefault();
      let delta = 0;
      if (e.key === 'ArrowDown') delta = 1;
      else if (e.key === 'ArrowUp') delta = -1;
      else delta = (e.key === 'ArrowRight' ? 1 : -1) * (lang === 'ar' ? -1 : 1);
      activeEntryIndex = (activeEntryIndex + delta + total) % total;
      renderEntrySection();
      document.querySelector(`[data-entry-index="${activeEntryIndex}"]`)?.focus();
    });

    document.getElementById('btn-mode-solo')?.addEventListener('click', () => {
      activeModeKey = 'solo';
      renderModesSection();
    });

    document.getElementById('btn-mode-team')?.addEventListener('click', () => {
      activeModeKey = 'team';
      renderModesSection();
    });

    document.getElementById('tour-tabs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tour-index]');
      if (!btn) return;
      activeTourIndex = Number(btn.dataset.tourIndex);
      renderTour();
    });

    document.getElementById('tour-tabs')?.addEventListener('keydown', (e) => {
      const total = I18N[lang].tour.tabs.length;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const delta = (e.key === 'ArrowRight' ? 1 : -1) * (lang === 'ar' ? -1 : 1);
      activeTourIndex = (activeTourIndex + delta + total) % total;
      renderTour();
      document.querySelector(`[data-tour-index="${activeTourIndex}"]`)?.focus();
    });

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox-shot]');
      if (!trigger) return;
      openLightboxByShot(trigger.dataset.lightboxShot);
    });

    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', () => stepLightbox(-1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => stepLightbox(1));
    document.getElementById('gallery-lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'gallery-lightbox') closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        stepLightbox(lang === 'ar' ? 1 : -1);
      } else if (e.key === 'ArrowRight') {
        stepLightbox(lang === 'ar' ? -1 : 1);
      } else if (e.key === 'Tab') {
        const focusables = [
          document.getElementById('lightbox-prev'),
          document.getElementById('lightbox-next'),
          document.getElementById('lightbox-close'),
        ].filter(Boolean);
        if (!focusables.length) return;
        const idx = focusables.indexOf(document.activeElement);
        if (e.shiftKey && (idx <= 0)) {
          e.preventDefault();
          focusables[focusables.length - 1].focus();
        } else if (!e.shiftKey && idx === focusables.length - 1) {
          e.preventDefault();
          focusables[0].focus();
        }
      }
    });
  }

  bindEvents();

  return {
    setLanguage(nextLang) {
      lang = nextLang === 'ar' ? 'ar' : 'en';
      renderHeroStage();
      renderEntrySection();
      renderModesSection();
      renderTour();
      if (lightboxIndex !== -1) openLightboxByIndex(lightboxIndex);
    },
  };
}
