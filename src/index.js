import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People from "./PopulationComponent/people";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Accounting from "./FinanceComponent/accounting";
import Houses from "./HousesComponent/houses";
import Responsibility from "./RespComponent/responsibility";
import Contact from "./ContactsComponent/contact";
import News from "./NewComponent/news";
import Tarifs from "./TarifsComponent/tarifs";
import AboutCompany from "./AboutComponent/aboutCompany";
import Documents from "./DocumentsComponent/documents";
import Organisations from "./OrganisationComponent/organisations";
import Meeting from "./MeetingComponent/meeting";
import Sanitar from "./SanitarComponent/sanitar";
import Ozhkh from "./NewComponent/20231005/prosto-o-zhkkh";
import OtopitelnyyPeriod from "./NewComponent/20230426/ob-okonchanii-otopitelnogo-perioda-2022-2023-gg.";
import Nachisleniya from "./NewComponent/20220923/voprosy-o-nachileniyakh-za-zhku";
import IzmeneniyaTarifov from "./NewComponent/20220701/izmenenie-tarifov-zhks-s-01.07.2022-g.";
import PuteshestviyeVDetstvo from "./NewComponent/20220531/zhitelej-okruga-pushkinskij-ozhidaet-uvlekatelnoe-puteshestvie-v-detstvo";
import Listovka from "./NewComponent/20220408/listovka-dlya-stenda-s-qr-kodom";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "accounting",
        element: <Accounting />,
      },
      {
        path: "houses",
        element: <Houses />,
      },
      {
        path: "responsibility",
        element: <Responsibility />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "tarifs",
        element: <Tarifs />,
      },
      {
        path: "aboutCompany",
        element: <AboutCompany />,
      },
      {
        path: "documents",
        element: <Documents />,
},
{
  path: "organisations",
  element: <Organisations />,
},
{
  path: "meeting",
  element: <Meeting />,
},
{
  path: "sanitar",
  element: <Sanitar />,
},

/* НОВОСТИ */
{
  path: "prosto-o-zhkh",
  element: <Ozhkh />,
},
{
  path: "ob-okonchanii-otopitelnogo-perioda-2022-2023-gg",
  element: <OtopitelnyyPeriod />,
},

{
  path: "voprosy-o-nachileniyakh-za-zhku",
  element: <Nachisleniya />,
},

{
  path: "izmenenie-tarifov-zhks-s-01.07.2022-g",
  element: <IzmeneniyaTarifov />,
},

{
  path: "zhitelej-okruga-pushkinskij-ozhidaet-uvlekatelnoe-puteshestvie-v-detstvo",
  element: <PuteshestviyeVDetstvo />,
},

{
  path: "listovka-dlya-stenda-s-qr-kodom",
  element: <Listovka />,
},

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
