import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./components/App";
import About from "./components/About";
import Accomodations from "./components/Accomodations";
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accomodations",
    element: <Accomodations />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/404",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
