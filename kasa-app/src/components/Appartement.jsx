import React from "react";
import { Link } from "react-router-dom";

const Appartement = () => {
  return (
    <Link to="/accomodations">
    <div className="appartement">
      <div className="thumb"></div>
      <h2 className="titleAppartement">
        Titre de la <br></br>location
      </h2>
    </div>
    </Link>
  );
};

export default Appartement;
