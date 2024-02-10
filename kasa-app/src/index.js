import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LocationsPage from "./pages/LocationsPage";
import ErrorPage from "./pages/ErrorPage";
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
