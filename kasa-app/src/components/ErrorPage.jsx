import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <Navbar />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
      <Footer />
    </div>
  );
};

export default ErrorPage;
