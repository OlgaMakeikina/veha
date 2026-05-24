/* eslint-disable */
// Pos-banner inline assets (CSS + responsive layout JS) — перенесены из
// public/index.html для lazy injection через src/Uslugi.js. Загружаются
// только когда <PosBannerWidget /> mount'ится — не блокируют initial render.

export const POS_BANNER_CSS = `
#js-show-iframe-wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:69%;min-width:200px;max-width:100%;background:linear-gradient(138.4deg,#38bafe 26.49%,#2d73bc 79.45%);color:#fff;cursor:pointer}#js-show-iframe-wrapper .pos-banner-fluid *{box-sizing:border-box}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{display:block;width:240px;min-height:56px;font-size:18px;line-height:24px;cursor:pointer;background:#0d4cd3;color:#fff;border:none;border-radius:8px;outline:0}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#1d5deb}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus{background:#2a63ad}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active{background:#2a63ad}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:LatoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff");font-style:normal;font-weight:400}@font-face{font-family:LatoWeb;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff");font-style:normal;font-weight:400}@font-face{font-family:LatoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff");font-style:normal;font-weight:400}#js-show-iframe-wrapper{background:var(--pos-banner-fluid-39__background)}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{width:100%;min-height:52px;background:#fff;color:#0b1f33;font-size:16px;font-family:LatoWeb,sans-serif;font-weight:400;padding:0;line-height:1.2}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active,#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus,#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#e4ecfd}#js-show-iframe-wrapper .bf-39{position:relative;display:grid;grid-template-columns:var(--pos-banner-fluid-39__grid-template-columns);grid-template-rows:var(--pos-banner-fluid-39__grid-template-rows);width:100%;max-width:var(--pos-banner-fluid-39__max-width);box-sizing:border-box;grid-auto-flow:row dense}#js-show-iframe-wrapper .bf-39__decor{background:var(--pos-banner-fluid-39__bg-url) var(--pos-banner-fluid-39__bg-url-position) no-repeat;background-size:cover;background-color:#f8efec;position:relative}#js-show-iframe-wrapper .bf-39__content{display:flex;flex-direction:column;padding:var(--pos-banner-fluid-39__content-padding);grid-row:var(--pos-banner-fluid-39__content-grid-row);justify-content:center}#js-show-iframe-wrapper .bf-39__description{display:flex;flex-direction:column;margin:var(--pos-banner-fluid-39__description-margin)}#js-show-iframe-wrapper .bf-39__text{margin:var(--pos-banner-fluid-39__text-margin);font-size:var(--pos-banner-fluid-39__text-font-size);line-height:1.4;font-family:LatoWeb,sans-serif;font-weight:700;color:#fff}#js-show-iframe-wrapper .bf-39__text_small{font-size:var(--pos-banner-fluid-39__text-small-font-size);font-weight:400;margin:0}#js-show-iframe-wrapper .bf-39__bottom-wrap{display:flex;flex-direction:row;align-items:center}#js-show-iframe-wrapper .bf-39__logo-wrap{position:absolute;top:var(--pos-banner-fluid-39__logo-wrap-top);left:0;padding:var(--pos-banner-fluid-39__logo-wrap-padding);background:#fff;border-radius:0 0 8px 0}#js-show-iframe-wrapper .bf-39__logo{width:var(--pos-banner-fluid-39__logo-width);margin-left:1px}#js-show-iframe-wrapper .bf-39__slogan{font-family:LatoWeb,sans-serif;font-weight:700;font-size:var(--pos-banner-fluid-39__slogan-font-size);line-height:1.2;color:#005ca9}#js-show-iframe-wrapper .bf-39__btn-wrap{width:100%;max-width:var(--pos-banner-fluid-39__button-wrap-max-width)}
`;

// Responsive layout — устанавливает CSS-переменные на :root в зависимости
// от ширины viewport. Вызывается на init + window.resize.
export function initPosBannerResponsive() {
  const POS_PREFIX_39 = "--pos-banner-fluid-39__";
  const posOptionsInitialBanner39 = {
    background: "linear-gradient(#2d73bc 26.49%,#38bafe 79.45%)",
    "grid-template-columns": "100%",
    "grid-template-rows": "264px auto",
    "max-width": "100%",
    "text-font-size": "20px",
    "text-small-font-size": "14px",
    "text-margin": "0 0 12px 0",
    "description-margin": "0 0 24px 0",
    "button-wrap-max-width": "100%",
    "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35.svg')",
    "bg-url-position": "right bottom",
    "content-padding": "26px 24px 20px",
    "content-grid-row": "0",
    "logo-wrap-padding": "16px 12px 12px",
    "logo-width": "65px",
    "logo-wrap-top": "0",
    "slogan-font-size": "12px",
  };

  function setStyles(opts, root) {
    Object.keys(opts).forEach((k) => root.style.setProperty(POS_PREFIX_39 + k, opts[k]));
  }
  function removeStyles(opts, root) {
    Object.keys(opts).forEach((k) => root.style.removeProperty(POS_PREFIX_39 + k));
  }

  function changePosBannerOnResize() {
    const root = document.documentElement;
    const t = { ...posOptionsInitialBanner39 };
    const banner = document.getElementById("js-show-iframe-wrapper");
    const o = banner ? banner.offsetWidth : document.body.offsetWidth;
    if (o > 340) t["button-wrap-max-width"] = "209px";
    if (o > 360) {
      t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35-2.svg')";
      t["bg-url-position"] = "calc(100% + 135px) bottom";
    }
    if (o > 482) {
      t["text-font-size"] = "23px";
      t["text-small-font-size"] = "18px";
      t["bg-url-position"] = "center bottom";
    }
    if (o > 568) {
      t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35.svg')";
      t["bg-url-position"] = "calc(100% + 35px) bottom";
      t["text-font-size"] = "24px";
      t["text-small-font-size"] = "14px";
      t["grid-template-columns"] = "1fr 292px";
      t["grid-template-rows"] = "100%";
      t["content-grid-row"] = "1";
      t["content-padding"] = "48px 24px";
    }
    if (o > 783) {
      t["grid-template-columns"] = "1fr 390px";
      t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35-2.svg')";
      t["bg-url-position"] = "calc(100% + 144px) bottom";
      t["text-small-font-size"] = "18px";
      t["content-padding"] = "30px 24px";
    }
    if (o > 820) t["grid-template-columns"] = "1fr 420px";
    if (o > 918) t["bg-url-position"] = "calc(100% + 100px) bottom";
    if (o > 1098) {
      t["bg-url-position"] = "center bottom";
      t["grid-template-columns"] = "1fr 557px";
      t["text-font-size"] = "32px";
      t["content-padding"] = "34px 50px";
      t["logo-width"] = "78px";
      t["slogan-font-size"] = "15px";
      t["logo-wrap-padding"] = "20px 16px 16px";
    }
    if (o > 1422) {
      t["max-width"] = "1422px";
      t["grid-template-columns"] = "1fr 720px";
      t.background = "linear-gradient(90deg, #2d73bc 5.49%,#38bafe 59.45%, #E0ECFE 60%)";
    }
    setStyles(t, root);
  }

  changePosBannerOnResize();
  window.addEventListener("resize", changePosBannerOnResize);
  return () => {
    window.removeEventListener("resize", changePosBannerOnResize);
    removeStyles(posOptionsInitialBanner39, document.documentElement);
  };
}

// Injects CSS once (idempotent). Returns cleanup function.
export function injectPosBannerCSS() {
  if (document.getElementById("pos-banner-styles")) return () => {};
  const style = document.createElement("style");
  style.id = "pos-banner-styles";
  style.textContent = POS_BANNER_CSS;
  document.head.appendChild(style);
  return () => {
    style.parentNode && style.parentNode.removeChild(style);
  };
}
