import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LocationsPage from "./components/LocationsPage";
import ErrorPage from "./components/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/location/:id",
    element: <LocationsPage />,
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
