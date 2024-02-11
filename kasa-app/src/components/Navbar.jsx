import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
