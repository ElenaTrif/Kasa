import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import AccomodationsPage from "./components/AccomodationsPage";
import ErrorPage from "./components/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/accomodations",
    element: <AccomodationsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        {router}
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
