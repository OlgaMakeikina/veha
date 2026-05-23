import React, { useEffect, useState } from "react";
import "./CookieBanner.css";
import { getConsent, setConsent, activateAllAnalytics } from "./analyticsConsent";

// 152-ФЗ cookie banner. Показывается до явного выбора. Хранит выбор в
// localStorage + cookie (12 мес). Также реагирует на событие 'consent-changed'
// чтобы открываться снова при revoke из футера.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = getConsent();
    if (current === "accept") {
      activateAllAnalytics();
    } else if (current === "deny") {
      // ничего не делаем
    } else {
      setVisible(true);
    }

    const onRevoke = (e) => {
      if (!e.detail) setVisible(true);
    };
    window.addEventListener("consent-revoke", onRevoke);
    return () => window.removeEventListener("consent-revoke", onRevoke);
  }, []);

  const accept = () => {
    setConsent("accept");
    activateAllAnalytics();
    setVisible(false);
  };
  const deny = () => {
    setConsent("deny");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby="cc-title">
      <div className="cookie-consent__text">
        <p>
          Мы используем cookies и системы статистики (Яндекс.Метрика, Google
          Analytics), чтобы понимать, как вы пользуетесь сайтом, и улучшать
          его. Подробнее — в нашей политике конфиденциальности.
        </p>
      </div>
      <div className="cookie-consent__buttons">
        <button type="button" onClick={deny} className="cookie-consent__btn cookie-consent__btn--secondary">
          Только необходимые
        </button>
        <button type="button" onClick={accept} className="cookie-consent__btn cookie-consent__btn--primary">
          Принять
        </button>
      </div>
    </div>
  );
}
