import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People from "./routes/people";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import WebDev from "./routes/web-dev";
import Accounting from "./FinanceComponent/accounting";
import HomeInformation from "./routes/homeInformation";
import Houses from "./routes/houses";
import Contract from "./routes/contract";
import Responsibility from "./routes/responsibility";
import Contact from "./ContactsComponent/contact";
import News from "./routes/news";
import Tarifs from "./routes/tarifs";
import AboutCompany from "./AboutComponent/aboutCompany";
import Documents from "./DocumentsComponent/documents";

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
        path: "web-dev",
        element: <WebDev />,
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
        path: "contract",
        element: <Contract />,
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



    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
