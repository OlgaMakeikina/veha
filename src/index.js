import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People from "./PopulationComponent/informatsiya-dlya-naseleniya";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Accounting from "./FinanceComponent/otchyotnost";
import Houses from "./HousesComponent/doma-v-upravlenii";
import Responsibility from "./RespComponent/privlecheniye-k-otvetstvennosti";
import Contact from "./ContactsComponent/kontakty";
import News from "./NewComponent/novosti";
import Tarifs from "./TarifsComponent/tarify-na-zhkh";
import AboutCompany from "./AboutComponent/o-kompanii";
import Documents from "./DocumentsComponent/dokumenty";
import Organisations from "./OrganisationComponent/resursosnabzhaushchiye-organizacii";
import Meeting from "./MeetingComponent/sobraniya-sobstvennikov";
import Sanitar from "./SanitarComponent/grafik-sanitarnoy-uborki";
import Ozhkh from "./NewComponent/20231005/prosto-o-zhkkh";
import OtopitelnyyPeriod from "./NewComponent/20230426/ob-okonchanii-otopitelnogo-perioda-2022-2023-gg.";
import Nachisleniya from "./NewComponent/20220923/voprosy-o-nachileniyakh-za-zhku";
import IzmeneniyaTarifov from "./NewComponent/20220701/izmenenie-tarifov-zhks-s-01.07.2022-g.";
import PuteshestviyeVDetstvo from "./NewComponent/20220531/zhitelej-okruga-pushkinskij-ozhidaet-uvlekatelnoe-puteshestvie-v-detstvo";
import Listovka from "./NewComponent/20220408/listovka-dlya-stenda-s-qr-kodom";
import OtopitelnyyPeriodEnd from "./NewComponent/20240425/ob-okonchanii-otopitelnogo-perioda-2023-2024-gg";

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
        path: "informatsiya-dlya-naseleniya",
        element: <People />,
      },
      {
        path: "otchyotnost",
        element: <Accounting />,
      },
      {
        path: "doma-v-upravlenii",
        element: <Houses />,
      },
      {
        path: "privlecheniye-k-otvetstvennosti",
        element: <Responsibility />,
      },
      {
        path: "kontakty",
        element: <Contact />,
      },
      {
        path: "novosti",
        element: <News />,
      },
      {
        path: "tarify-na-zhkh",
        element: <Tarifs />,
      },
      {
        path: "o-kompanii",
        element: <AboutCompany />,
      },
      {
        path: "dokumenty",
        element: <Documents />,
},
{
  path: "resursosnabzhaushchiye-organizacii",
  element: <Organisations />,
},
{
  path: "sobraniya-sobstvennikov",
  element: <Meeting />,
},
{
  path: "grafik-sanitarnoy-uborki",
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
{
  path: "ob-okonchanii-otopitelnogo-perioda-2023-2024-gg",
  element: <OtopitelnyyPeriodEnd />,
}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
