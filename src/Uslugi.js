import React, { useEffect } from 'react';

const PosBannerWidget = () => {


  useEffect(() => {
    const ACTION_ID = 'js-show-iframe-wrapper';
    const BLOCK_ACTION_CLASS = 'pos-block-action';

    function Widget(src, opaId, isFz59) {
      const fz59 = isFz59 ? 'true' : 'false';
      src += '?opaId=' + opaId + '&fz59=' + fz59;

      const div = document.createElement('div');
      const header = document.createElement('header');
      const overlay = document.createElement('div');
      const body = document.getElementsByTagName('body')[0];

      div.style.background = 'white';
      div.style.position = 'fixed';
      div.style.maxWidth = '620px';
      div.style.maxHeight = '768px';
      div.style.margin = 'auto';
      div.style.top = '0';
      div.style.bottom = '0';
      div.style.left = '0';
      div.style.right = '0';
      div.style.zIndex = '999999999';

      overlay.style.position = 'fixed';
      overlay.style.zIndex = '999999998';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.backgroundColor = 'rgba(0,0,0,.3)';

      div.setAttribute('id', 'js-iframe-wrapper');
      overlay.setAttribute('id', 'js-iframe-overlay');
      const iframe = document.createElement('iframe');

      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';

      iframe.setAttribute('src', src);
      iframe.setAttribute('id', 'js-iframe-widget');
      iframe.referrerPolicy = 'unsafe-url';

      div.appendChild(iframe);
      header.innerHTML = 'Новое обращение';

      function destroy() {
        const wOverlay = document.getElementById('js-iframe-overlay');
        const wWrapper = document.getElementById('js-iframe-wrapper');
        wWrapper && body.removeChild(wWrapper);
        wOverlay && body.removeChild(wOverlay);
      }

      function create() {
        body.appendChild(div);
        body.appendChild(overlay);
      }

      function closeWidget() {
        destroy();
      }

      function showWidget() {
        create();
      }

      const openWidgetBtn = document.getElementById(ACTION_ID);

      if (openWidgetBtn) {
        openWidgetBtn.addEventListener('click', function (e) {
          e.preventDefault();
          showWidget();
        });

        openWidgetBtn.addEventListener('touchend', function (e) {
          if (!document.getElementById(ACTION_ID).classList.contains(BLOCK_ACTION_CLASS)) {
            showWidget();
          } else {
            setTimeout(function () {
              document.getElementById(ACTION_ID).classList.remove(BLOCK_ACTION_CLASS);
            }, 0);
          }
        });

        openWidgetBtn.addEventListener('touchmove', function (e) {
          document.getElementById(ACTION_ID).classList.add(BLOCK_ACTION_CLASS); 
        });
      }

      window.addEventListener('message', function (event) {
        if (event.data.close) {
          closeWidget();
        }
      }, false);

      (function overrideSlogan() {
        const posBanner = document.getElementById(ACTION_ID);
        const posButton = posBanner.querySelector('.bf-1 .pos-banner-btn_2') || posBanner.querySelector('.bf-2 .pos-banner-btn_2');
        
        if (posBanner) {
          const sloganTag = posBanner.querySelector('.bf-1__slogan') || posBanner.querySelector('.bf-2__slogan');

          if (sloganTag) {
            sloganTag.innerHTML = 'Решаем вместе';
          }
          
          if(posButton){
            posButton.innerHTML = 'Сообщить о проблеме';
            posButton.style.width = '240px';
          }
        }
      })();
    }

    Widget("https://pos.gosuslugi.ru/form", 360210);
  }, []);

  return (
<div>
<style>
 
</style>




    <div id='js-show-iframe-wrapper'>
      <div className='pos-banner-fluid bf-39'>

        <div className='bf-39__decor'>
          <div className='bf-39__logo-wrap'>
            <img
              className='bf-39__logo'
              src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg'
              alt='Госуслуги'
            />

            <div className='bf-39__slogan'>Решаем вместе</div >
          </div >
        </div >
        <div className='bf-39__content'>
          <div className='bf-39__description'>
              <span className='bf-39__text'>
                 В квитанциях ошибки, в подъезде мусор, сотрудники управляющей хамят?
              </span >
            <span className='bf-39__text bf-39__text_small'>
                Расскажите о проблемах с ЖКХ
              </span >
          </div >
          <div className='bf-39__bottom-wrap'>
            <div className='bf-39__btn-wrap'>
              <button
                className='pos-banner-btn_2'
                type='button'
              >Написать о проблеме
              </button >
            </div >
          </div>
        </div >
      </div >
    </div >
   
    </div>
  );
};

export default PosBannerWidget;
