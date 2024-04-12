import React, { useEffect } from 'react';

const GosuslugiBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pos.gosuslugi.ru/bin/script.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const widgetScript = document.createElement('script');
    widgetScript.innerHTML = `
      (function(){
        "use strict";function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);if(t)o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable});n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};if(t%2)ownKeys(Object(n),true).forEach(function(t){_defineProperty(e,t,n[t])});else if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(n));else ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(e,t,n){if(t in e)Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true});else e[t]=n;return e}var POS_PREFIX_39="--pos-banner-fluid-39__",posOptionsInitialBanner39=${JSON.stringify(posOptionsInitialBanner39)},setStyles=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:POS_PREFIX_39;Object.keys(e).forEach(function(o){t.style.setProperty(n+o,e[o])})},removeStyles=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:POS_PREFIX_39;Object.keys(e).forEach(function(e){t.style.removeProperty(n+e)})};function changePosBannerOnResize(){var e=document.documentElement,t=_objectSpread({},posOptionsInitialBanner39),n=document.getElementById("js-show-iframe-wrapper"),o=n?n.offsetWidth:document.body.offsetWidth;if(o>340)t["button-wrap-max-width"]="209px";if(o>360)t["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35-2.svg')",t["bg-url-position"]="calc(100% + 135px) bottom";if(o>482)t["text-font-size"]="23px",t["text-small-font-size"]="18px",t["bg-url-position"]="center bottom";if(o>568)t["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35.svg')",t["bg-url-position"]="calc(100% + 35px) bottom",t["text-font-size"]="24px",t["text-small-font-size"]="14px",t["grid-template-columns"]="1fr 292px",t["grid-template-rows"]="100%",t["content-grid-row"]="1",t["content-padding"]="48px 24px";if(o>783)t["grid-template-columns"]="1fr 390px",t["bg-url"]="url('https://pos.gosuslugi.ru/bin/banner-fluid/35/banner-fluid-bg-35-2.svg')",t["bg-url-position"]="calc(100% + 144px) bottom",t["text-small-font-size"]="18px",t["content-padding"]="30px 24px";if(o>820)t["grid-template-columns"]="1fr 420px";if(o>918)t["bg-url-position"]="calc(100% + 100px) bottom";if(o>1098)t["bg-url-position"]="center bottom",t["grid-template-columns"]="1fr 557px",t["text-font-size"]="32px",t["content-padding"]="34px 50px",t["logo-width"]="78px",t["slogan-font-size"]="15px",t["logo-wrap-padding"]="20px 16px 16px";if(o>1422)t["max-width"]="1422px",t["grid-template-columns"]="1fr 720px",t.background="linear-gradient(90deg, #2d73bc 5.49%,#38bafe 59.45%, #E0ECFE 60%)";setStyles(t,e)}changePosBannerOnResize(),window.addEventListener("resize",changePosBannerOnResize),window.onunload=function(){var e=document.documentElement,t=_objectSpread({},posOptionsInitialBanner39);window.removeEventListener("resize",changePosBannerOnResize),removeStyles(t,e)};
    `;
    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);

  useEffect(() => {
    const widgetScript = document.createElement('script');
    widgetScript.innerHTML = 'Widget("https://pos.gosuslugi.ru/form", 360210);';
    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);

  const posOptionsInitialBanner39 = {
    background: "linear-gradient(#2d73bc 26.49%, #38bafe 79.45%)",
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
    "slogan-font-size": "12px"
  };

  return (
    <>
      <style>{`
        #js-show-iframe-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 69%;
          min-width: 200px;
          max-width: 100%;
          background: ${posOptionsInitialBanner39.background};
          color: #fff;
          cursor: pointer;
        }

        /* Your other styles here */
      `}</style>
      <div id='js-show-iframe-wrapper'>
        <div class='pos-banner-fluid bf-39'>

          <div class='bf-39__decor'>
            <div class='bf-39__logo-wrap'>
              <img
                class='bf-39__logo'
                src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg'
                alt='Госуслуги'
              />
              <div class='bf-39__slogan'>Решаем вместе</div>
            </div>
          </div>

          <div class='bf-39__content'>
            <div class='bf-39__description'>
              <span class='bf-39__text'>
                В квитанциях ошибки, в подъезде мусор, сотрудники управляющей хамят?
              </span>
              <span class='bf-39__text bf-39__text_small'>
                Расскажите о проблемах с ЖКХ
              </span>
            </div>

            <div class='bf-39__bottom-wrap'>
              <div class='bf-39__btn-wrap'>
                <button
                  class='pos-banner-btn_2'
                  type='button'
                >Написать о проблеме
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default GosuslugiBanner;
