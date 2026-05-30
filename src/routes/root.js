import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

const SITE_ORIGIN = "https://ooovexa.ru";

export default function Root() {
  const location = useLocation();
  // canonical всегда указывает на каноническую страницу текущего маршрута;
  // для главной — корень без trailing-slash, для остальных — путь + "/".
  const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/?$/, "/");
  const canonical = `${SITE_ORIGIN}${path}`;
  return (
    <div>
      {/*
        Default Helmet — устанавливает canonical/og:url для каждой страницы.
        Per-route компоненты переопределяют title/description/og:title/og:description.
      */}
      <Helmet>
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}