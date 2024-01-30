import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accomodations",
    element: <h1>Nos locations</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos</h1>,
  },
  {
    path: "/404",
    element: <h1>404</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
