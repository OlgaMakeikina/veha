import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People from "./PopulationComponent/people";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Accounting from "./FinanceComponent/accounting";
import HomeInformation from "./routes/homeInformation";
import Houses from "./HousesComponent/houses";
import Responsibility from "./RespComponent/responsibility";
import Contact from "./ContactsComponent/contact";
import News from "./routes/news";
import Tarifs from "./TarifsComponent/tarifs";
import AboutCompany from "./AboutComponent/aboutCompany";
import Documents from "./DocumentsComponent/documents";
import Organisations from "./OrganisationComponent/organisations";
import Meeting from "./MeetingComponent/meeting";

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
        path: "homeInformation",
        element: <HomeInformation />,
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

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
