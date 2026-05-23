// Helpers для consent-gated загрузки аналитики (152-ФЗ).
// Yandex.Metrika (87981216) и Google Analytics (G-KHT3SYM7LG) активируются
// только после явного согласия пользователя в баннере cookies.

const CONSENT_KEY = "veha-consent";
const YM_ID = 87981216;
const GA_ID = "G-KHT3SYM7LG";

export function getConsent() {
  try {
    const ls = localStorage.getItem(CONSENT_KEY);
    if (ls) return ls;
  } catch (e) {}
  const m = document.cookie.match(/(?:^|; )veha-consent=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export function setConsent(value) {
  try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  const exp = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${CONSENT_KEY}=${value}; expires=${exp}; path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("consent-changed", { detail: value }));
}

let yandexLoaded = false;
let googleLoaded = false;

export function loadYandexMetrika() {
  if (yandexLoaded) return;
  yandexLoaded = true;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  // eslint-disable-next-line no-undef
  ym(YM_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

export function loadGoogleAnalytics() {
  if (googleLoaded) return;
  googleLoaded = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

export function activateAllAnalytics() {
  loadYandexMetrika();
  loadGoogleAnalytics();
}
