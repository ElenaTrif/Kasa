import React from "react";
import logoFooter from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoFooter">
        <img src={logoFooter} alt="Logo" />
      </div>
      <div className="textFooter">
      © 2020 Kasa. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
