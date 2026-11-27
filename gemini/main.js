/**
 * onebase. Gemini Edition Bootstrap, Bilingual Switcher, Scroll Header & Beta Form
 */
import { I18N } from './i18n.js';
import { createShowcaseController } from './showcase.js';

function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function getInitialLang() {
  try {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get('lang');
    if (qLang === 'ar' || qLang === 'en') return qLang;
    const stored = window.localStorage.getItem('onebase_lang');
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    // ignore storage errors
  }
  const cfgDefault = window.ONEBASE_CONFIG?.defaultLang;
  return cfgDefault === 'ar' ? 'ar' : 'en';
}

function isValidEmailOrPhone(raw) {
  const value = String(raw || '').trim();
  if (!value) return false;
  const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  const digitsOnly = value.replace(/[\s\-().+]/g, '');
  const phoneLike = /^\d{8,15}$/.test(digitsOnly);
  return emailLike || phoneLike;
}

function populateSelect(selectEl, options) {
  if (!selectEl || !Array.isArray(options)) return;
  const prev = selectEl.value;
  selectEl.innerHTML = '';
  for (const opt of options) {
    const el = document.createElement('option');
    el.value = opt.value;
    el.textContent = opt.label;
    selectEl.appendChild(el);
  }
  if (prev && options.some((o) => o.value === prev)) {
    selectEl.value = prev;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const showcase = createShowcaseController();
  let lang = getInitialLang();
  let lastSubmission = null;

  const headerEl = document.getElementById('site-header');
  const menuToggle = document.getElementById('btn-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const formEl = document.getElementById('early-access-form');
  const formSuccessEl = document.getElementById('form-success-box');
  const channelNoticeEl = document.getElementById('channel-notice');

  function syncHeaderState() {
    if (!headerEl) return;
    headerEl.classList.toggle('site-header--scrolled', window.scrollY > 24);
  }
  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });

  function setupSectionMotion() {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;
    const targets = document.querySelectorAll('main > section:not(#top)');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    );
    targets.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        sec.classList.add('is-revealing');
        observer.observe(sec);
      }
    });
  }
  setupSectionMotion();

  function renderConfirmation() {
    if (!lastSubmission || !formSuccessEl) return;
    const c = I18N[lang].cta;
    const businessLabel =
      c.businessOptions.find((o) => o.value === lastSubmission.businessType)?.label ||
      lastSubmission.businessType;
    const platformLabel =
      c.platformOptions.find((o) => o.value === lastSubmission.platform)?.label ||
      lastSubmission.platform;

    document.getElementById('success-title').textContent = c.successTitle;
    document.getElementById('success-body').textContent = c.successBody
      .replace('{business}', businessLabel)
      .replace('{platform}', platformLabel);
    document.getElementById('btn-form-reset').textContent = c.resetForm;
  }

  function applyLanguage(nextLang) {
    lang = nextLang === 'ar' ? 'ar' : 'en';
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = dict.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);

    try {
      window.localStorage.setItem('onebase_lang', lang);
    } catch {
      // ignore storage errors
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18n);
      if (typeof val === 'string') el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18nPlaceholder);
      if (typeof val === 'string') el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18nAria);
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    populateSelect(document.getElementById('waitlist-business'), dict.cta.businessOptions);
    populateSelect(document.getElementById('waitlist-platform'), dict.cta.platformOptions);

    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.textContent = dict.nav.langToggle;
      langBtn.setAttribute('aria-label', dict.nav.langAria);
    }

    if (menuToggle) {
      const isOpen = mobileDrawer?.classList.contains('is-open');
      menuToggle.setAttribute('aria-label', isOpen ? dict.nav.menuClose : dict.nav.menuOpen);
    }

    if (channelNoticeEl && !channelNoticeEl.hidden && channelNoticeEl.dataset.noticeKey) {
      channelNoticeEl.textContent = dict.cta[channelNoticeEl.dataset.noticeKey] || '';
    }

    if (lastSubmission) renderConfirmation();
    showcase.setLanguage(lang);
  }

  document.getElementById('btn-lang-toggle')?.addEventListener('click', () => {
    applyLanguage(lang === 'en' ? 'ar' : 'en');
  });
  document.getElementById('btn-footer-lang')?.addEventListener('click', () => {
    applyLanguage(lang === 'en' ? 'ar' : 'en');
  });

  function closeMobileDrawer() {
    if (!mobileDrawer || !mobileDrawer.classList.contains('is-open')) return;
    mobileDrawer.classList.remove('is-open');
    headerEl?.classList.remove('site-header--drawer-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', I18N[lang].nav.menuOpen);
  }

  menuToggle?.addEventListener('click', () => {
    if (!mobileDrawer) return;
    const willOpen = !mobileDrawer.classList.contains('is-open');
    mobileDrawer.classList.toggle('is-open', willOpen);
    headerEl?.classList.toggle('site-header--drawer-open', willOpen);
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? I18N[lang].nav.menuClose : I18N[lang].nav.menuOpen);
  });

  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMobileDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileDrawer();
  });

  const channelButtons = [
    document.getElementById('btn-channel-testflight'),
    document.getElementById('btn-channel-android'),
    document.getElementById('btn-channel-whatsapp'),
  ].filter(Boolean);

  function setActiveChannel(activeBtn, key, platformValue) {
    for (const btn of channelButtons) {
      btn.setAttribute('aria-checked', String(btn === activeBtn));
    }
    if (platformValue) {
      const platformSelect = document.getElementById('waitlist-platform');
      if (platformSelect) platformSelect.value = platformValue;
    }
    if (channelNoticeEl) {
      channelNoticeEl.dataset.noticeKey = key;
      channelNoticeEl.textContent = I18N[lang].cta[key] || '';
      channelNoticeEl.hidden = false;
    }
    document.getElementById('waitlist-name')?.focus();
  }

  document.getElementById('btn-channel-testflight')?.addEventListener('click', (e) => {
    const url = (window.ONEBASE_CONFIG?.testflightUrl || '').trim();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveChannel(e.currentTarget, 'channelPromptTestflight', 'ios');
  });

  document.getElementById('btn-channel-android')?.addEventListener('click', (e) => {
    const url = (window.ONEBASE_CONFIG?.androidBetaUrl || '').trim();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveChannel(e.currentTarget, 'channelPromptAndroid', 'android');
  });

  document.getElementById('btn-channel-whatsapp')?.addEventListener('click', (e) => {
    const num = String(window.ONEBASE_CONFIG?.whatsappNumber || '').replace(/[^\d]/g, '');
    if (num) {
      const text = encodeURIComponent(
        lang === 'ar'
          ? 'أهلاً، عايز أجرّب النسخة التجريبية من onebase.'
          : 'Hello, I would like to join the onebase. Free Beta.'
      );
      window.open(`https://wa.me/${num}?text=${text}`, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveChannel(e.currentTarget, 'channelPromptWhatsapp', 'web_both');
  });

  function clearErrors() {
    document.getElementById('err-waitlist-name').textContent = '';
    document.getElementById('err-waitlist-contact').textContent = '';
    document.getElementById('err-waitlist-submit').textContent = '';
    document.getElementById('waitlist-name')?.classList.remove('is-error');
    document.getElementById('waitlist-contact')?.classList.remove('is-error');
  }

  document.getElementById('waitlist-name')?.addEventListener('input', clearErrors);
  document.getElementById('waitlist-contact')?.addEventListener('input', clearErrors);

  formEl?.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const c = I18N[lang].cta;
    const nameInput = document.getElementById('waitlist-name');
    const contactInput = document.getElementById('waitlist-contact');
    const businessInput = document.getElementById('waitlist-business');
    const platformInput = document.getElementById('waitlist-platform');
    const submitBtn = document.getElementById('btn-waitlist-submit');

    const name = String(nameInput.value || '').trim();
    const contact = String(contactInput.value || '').trim();
    const businessType = businessInput.value || 'solo_personal';
    const platform = platformInput.value || 'ios';

    let valid = true;
    if (name.length < 2) {
      document.getElementById('err-waitlist-name').textContent = c.errName;
      nameInput.classList.add('is-error');
      valid = false;
    }
    if (!isValidEmailOrPhone(contact)) {
      document.getElementById('err-waitlist-contact').textContent = c.errContact;
      contactInput.classList.add('is-error');
      valid = false;
    }
    if (!valid) {
      (name.length < 2 ? nameInput : contactInput).focus();
      return;
    }

    const payload = {
      name,
      contact,
      businessType,
      platform,
      language: lang,
      source: 'onebase-gemini-landing',
      submittedAt: new Date().toISOString(),
    };

    const endpoint = (window.ONEBASE_CONFIG?.waitlistEndpoint || '').trim();
    if (endpoint) {
      submitBtn.disabled = true;
      submitBtn.textContent = c.submittingBtn;
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } catch {
        document.getElementById('err-waitlist-submit').textContent = c.errEndpoint;
        submitBtn.disabled = false;
        submitBtn.textContent = c.submitBtn;
        return;
      }
    } else {
      try {
        const prev = JSON.parse(window.localStorage.getItem('onebase_waitlist_submissions') || '[]');
        prev.push(payload);
        window.localStorage.setItem('onebase_waitlist_submissions', JSON.stringify(prev));
      } catch {
        // ignore storage errors
      }
    }

    lastSubmission = payload;
    formEl.hidden = true;
    if (channelNoticeEl) channelNoticeEl.hidden = true;
    renderConfirmation();
    formSuccessEl.hidden = false;
    submitBtn.disabled = false;
    submitBtn.textContent = c.submitBtn;
  });

  document.getElementById('btn-form-reset')?.addEventListener('click', () => {
    lastSubmission = null;
    formSuccessEl.hidden = true;
    formEl.hidden = false;
    formEl.reset();
    clearErrors();
    document.getElementById('waitlist-name')?.focus();
  });

  applyLanguage(lang);
});
