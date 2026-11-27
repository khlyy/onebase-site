/**
 * onebase. — Launch Site Bootstrap, Bilingual Switcher & Streamlined Beta Form
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

  const menuToggle = document.getElementById('btn-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const formEl = document.getElementById('early-access-form');
  const formSuccessEl = document.getElementById('form-success-box');
  const channelNoticeEl = document.getElementById('channel-notice');

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
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', I18N[lang].nav.menuOpen);
  }

  menuToggle?.addEventListener('click', () => {
    if (!mobileDrawer) return;
    const willOpen = !mobileDrawer.classList.contains('is-open');
    mobileDrawer.classList.toggle('is-open', willOpen);
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? I18N[lang].nav.menuClose : I18N[lang].nav.menuOpen);
  });

  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMobileDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileDrawer();
  });

  function showChannelNotice(key, platformValue) {
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

  document.getElementById('btn-channel-testflight')?.addEventListener('click', () => {
    const url = (window.ONEBASE_CONFIG?.testflightUrl || '').trim();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    showChannelNotice('channelPromptTestflight', 'ios');
  });

  document.getElementById('btn-channel-android')?.addEventListener('click', () => {
    const url = (window.ONEBASE_CONFIG?.androidBetaUrl || '').trim();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    showChannelNotice('channelPromptAndroid', 'android');
  });

  document.getElementById('btn-channel-whatsapp')?.addEventListener('click', () => {
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
    showChannelNotice('channelPromptWhatsapp', null);
  });

  function clearFormErrors() {
    document.getElementById('waitlist-name')?.classList.remove('is-error');
    document.getElementById('waitlist-contact')?.classList.remove('is-error');
    const errName = document.getElementById('err-waitlist-name');
    const errContact = document.getElementById('err-waitlist-contact');
    const errForm = document.getElementById('err-waitlist-submit');
    if (errName) errName.textContent = '';
    if (errContact) errContact.textContent = '';
    if (errForm) errForm.textContent = '';
  }

  formEl?.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearFormErrors();

    const c = I18N[lang].cta;
    const nameInput = document.getElementById('waitlist-name');
    const contactInput = document.getElementById('waitlist-contact');
    const businessInput = document.getElementById('waitlist-business');
    const platformInput = document.getElementById('waitlist-platform');
    const submitBtn = document.getElementById('btn-waitlist-submit');

    const nameVal = (nameInput?.value || '').trim();
    const contactVal = (contactInput?.value || '').trim();
    let valid = true;

    if (nameVal.length < 2) {
      nameInput?.classList.add('is-error');
      const errName = document.getElementById('err-waitlist-name');
      if (errName) errName.textContent = c.errName;
      valid = false;
    }

    if (!isValidEmailOrPhone(contactVal)) {
      contactInput?.classList.add('is-error');
      const errContact = document.getElementById('err-waitlist-contact');
      if (errContact) errContact.textContent = c.errContact;
      valid = false;
    }

    if (!valid) {
      if (nameVal.length < 2) nameInput?.focus();
      else contactInput?.focus();
      return;
    }

    const payload = {
      name: nameVal,
      contact: contactVal,
      businessType: businessInput?.value || 'interior_design',
      platform: platformInput?.value || 'ios',
      language: lang,
      source: window.location.hostname || 'launch-site',
      submittedAt: new Date().toISOString(),
    };

    const endpoint = (window.ONEBASE_CONFIG?.waitlistEndpoint || '').trim();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = c.submittingBtn;
    }

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Waitlist POST failed');
      }

      try {
        const existing = JSON.parse(window.localStorage.getItem('onebase_waitlist') || '[]');
        existing.push(payload);
        window.localStorage.setItem('onebase_waitlist', JSON.stringify(existing));
      } catch {
        // ignore storage errors
      }

      lastSubmission = payload;
      formEl.hidden = true;
      formSuccessEl.hidden = false;
      renderConfirmation();
    } catch {
      const errForm = document.getElementById('err-waitlist-submit');
      if (errForm) errForm.textContent = c.errEndpoint;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = c.submitBtn;
      }
    }
  });

  document.getElementById('btn-form-reset')?.addEventListener('click', () => {
    lastSubmission = null;
    formEl?.reset();
    clearFormErrors();
    if (formSuccessEl) formSuccessEl.hidden = true;
    if (formEl) formEl.hidden = false;
  });

  applyLanguage(lang);
});
