import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="links">
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/about">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
